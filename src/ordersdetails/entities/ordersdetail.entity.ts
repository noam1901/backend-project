import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Ordersdetails {
    @PrimaryColumn('int')
    orderId: number

    @PrimaryColumn('int')
    productId: number

    @Column('float')
    unitPrice: number

    @Column('smallint')
    amount: number

    @Column('tinyint')
    discount: number

}
