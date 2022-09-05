import { Body, Controller, Get, Post, Res, Req, Session } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private service:UsersService){}
    @Post('/login')
    async login(@Body() body,@Session() session, @Res() res, @Req() req){
        const idOrFalse = await this.service.checkUser(body) 
        if (idOrFalse){
            session.userid = idOrFalse
            res.cookie('id', idOrFalse)  
            res.send(true)
        }
        else {
            res.send(false)
        }
        
    }
    @Get()
    get(){
        return this.service.getUsers()
    }
}
