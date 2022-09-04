import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepositoty:Repository<Users>){}
    async getUsers():Promise<Users[]>{
        return await this.usersRepositoty.find()
    }
}
