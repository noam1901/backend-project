import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    userid: number

    @Column('varchar', {length: 45})
    firstName: string

    @Column('varchar',{length: 45})
    lastName: string

    @Column('varchar',{length: 100, nullable: true})
    address: string | null

    @Column('varchar', {length:45, nullable:true})
    country: string | null

    @Column('varchar',{length:45, nullable:true})
    city: string | null

    @Column('varchar',{length:45, nullable: true})
    postalCode: string | null

    @Column('varchar',{length: 45, nullable: true})
    phone: string | null

    @Column('varchar',{length:45, nullable: true})
    email: string | null

    @Column('char', {length:64})
    password: string

    @Column('varchar',{length:45})
    gender: string
}
