import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ImgsService } from './imgs.service';

@Controller('imgs')
export class ImgsController {
    constructor(private service:ImgsService){}
    @Get()
    get(){
        return this.service.getAll()
    }
    @Get(':id')
    getById(@Param('id',ParseIntPipe) id:number){
        
        return this.service.getById(id)
    }
}
