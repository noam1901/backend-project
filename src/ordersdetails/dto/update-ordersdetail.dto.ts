import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdersdetailDto } from './create-ordersdetail.dto';

export class UpdateOrdersdetailDto extends PartialType(CreateOrdersdetailDto) {}
