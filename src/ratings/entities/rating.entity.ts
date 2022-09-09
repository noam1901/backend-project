import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ratings {
    @PrimaryGeneratedColumn()
    RatingID: number

    @Column('int')
    productid: number

    @Column('int')
    userID: number

    @Column('int')
    rating: number

    @Column('varchar',{length:13})
    review: string
}
