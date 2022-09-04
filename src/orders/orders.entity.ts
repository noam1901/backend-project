import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orders {
    @PrimaryGeneratedColumn()
    orderId: number

    @Column('int')
    userId: number

    @Column('datetime')
    orderDate: Date

    @Column('varchar',{length:100})
    ShipAddress: string

    @Column('varchar', {length: 45})
    shipCountry: string

    @Column('varchar',{length:45})
    shipCity: string

    @Column('varchar', {length:45, nullable:true})
    shipPostalCode: string|null

}
