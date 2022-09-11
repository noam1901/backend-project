import { Body, Controller, Get, Post, Res, Req, Session, Param } from '@nestjs/common';
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
    @Post('/register')
    async register(@Body() body,@Session() session, @Res() res, @Req() req){
        const added =await this.service.addUser(body)
        
        if(!added || added.message){
            res.send(added)
        }else{
            session.userid = added.userid
            res.cookie('id',added.userid )
            res.send(added)
        }
        
    }  
    @Get(':id')
    getById(@Param('id') id){
        return this.service.getUserDetails(id)
    }  

    @Post('updatename/:id')
    updateName(@Body() body,@Param('id') id){
        return this.service.updateName(body, id)
    }

    @Post('updatepassword/:id')
    updatePassword(@Body() body,@Param('id') id){
        return this.service.updatePass(body, id)
    }

    @Get()
    get(){
        return this.service.getUsers()
    } 
    
}
