import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Imgs{
    @PrimaryGeneratedColumn()
    imgId: number

    @Column('int')
    productid: number

    @Column('varchar', {length: 205})
    imgURL: string
}
