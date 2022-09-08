import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orders {
    @PrimaryGeneratedColumn()
    orderId: number

    @Column('int')
    userId: number

    @Column('datetime')
    orderDate: Date

    @Column('varchar',{length:100,default:""})
    ShipAddress: string

    @Column('varchar', {length: 45,default:""})
    shipCountry: string

    @Column('varchar',{length:45,default:""})
    shipCity: string

    @Column('varchar', {length:45, nullable:true,default:""})
    shipPostalCode: string|null

}
