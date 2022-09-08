import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    cartid: number

    @Column('int')
    userid:number
}
