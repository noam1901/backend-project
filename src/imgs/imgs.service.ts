import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Imgs } from './imgs.entity';
@Injectable()
export class ImgsService {
    constructor(@InjectRepository(Imgs) private imgsRepository: Repository<Imgs>){}
    async getAll(){
        return await this.imgsRepository.find()
    }
    async getById(id){
        return await this.imgsRepository.find({
            where: [{'productid':id}]
        })
    }
}
