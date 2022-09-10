import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepositoty:Repository<Users>){}
    async getUsers():Promise<Users[]>{
        return await this.usersRepositoty.find()
    }
    async checkUser(body){   
        const response = await this.usersRepositoty.find({
            select: ['password','userid'],
            where: [{email: body.email}]
        })
        
        if(response.length == 0){
            return false
        }
        const checkPass = await bcrypt.compare(body.password, response[0].password)
        
        if (checkPass){
            return response[0].userid
        }
        return false
    }

    async addUser(body):Promise<any>{
        const emailValid = await this.usersRepositoty.find({
            where: [{'email':body.email}]
        });
        if(emailValid.length > 0){
            return {message:"email was taken"}
        }else{
            body.password = await bcrypt.hash(body.password,10)
            const newUser = await this.usersRepositoty.create(body)
            return this.usersRepositoty.save(newUser)
        }
    }
    async getUserFullName(id){
        const user = await this.usersRepositoty.find({
            select: ['firstName','lastName'],
            where: [{'userid':id}]
        })
        return user
    }
    async getUserDetails(id){
        const details = await this.usersRepositoty.find({
            select: ['firstName','lastName', 'email', 'phone'],
            where: [{'userid': id}]
        })
        return details
    }
    async updateName(body, userid){
        const user = await this.usersRepositoty.find({
            where: [{'userid':userid}]
        })
        user[0].firstName = body.firstName === ''?user[0].firstName: body.firstName
        user[0].lastName = body.lastName === ''? user[0].lastName: body.lastName
        
        return await this.usersRepositoty.save(user[0])
    }
}
