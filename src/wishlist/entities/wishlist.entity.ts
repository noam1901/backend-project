import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Wishlist {
    @PrimaryColumn('int')
    userid: number

    @PrimaryColumn('int')
    productid: number
}
