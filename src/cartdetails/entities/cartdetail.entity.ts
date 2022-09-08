import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Cartdetails {
    @PrimaryColumn('int')
    cartid: number

    @PrimaryColumn('int')
    productid: number

    @Column('int')
    amount: number

    @Column('float')
    unitprice: number
}
