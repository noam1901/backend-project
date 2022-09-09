import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
import { Repository } from 'typeorm';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Ratings } from './entities/rating.entity';

@Injectable()
export class RatingsService {
  constructor(@InjectRepository(Ratings) private ratingsRepo:Repository<Ratings>,
  private userService:UsersService){}
  async getById(prodid) {
    const rating = await this.ratingsRepo.find({
      where: [{'productid':prodid}]
    })
    console.log(rating);
    const ratingWithUsers = []
    for(let rev of rating){
      const name = await this.userService.getUserFullName(rev.userID)
      console.log(name);
      ratingWithUsers.push({...rev,fullname:name[0].firstName+' '+name[0].lastName})
    }
    return ratingWithUsers
  }

 
}
