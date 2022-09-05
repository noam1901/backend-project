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
            return false
        }else{
            body.password = await bcrypt.hash(body.password,10)
            const newUser = await this.usersRepositoty.create(body)
            return this.usersRepositoty.save(newUser)
        }
        
        
    }
}
