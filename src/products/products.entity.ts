import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    productid: number

    @Column('varchar',{length: 45})
    productName: string

    @Column('float')
    unitPrice: number

    @Column('int')
    unitInStock: number

    @Column('varchar', {length: 600})
    Description: string

    @Column('int')
    discount: number

}
