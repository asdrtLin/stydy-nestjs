import { Girl } from 'src/girl/entities/girl.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  orderId: number;
  @Column()
  orderDate: Date;
  @Column()
  orderMoney: number;

  // 多对一
  @ManyToOne(() => Girl, (girl) => girl.order)
  @JoinColumn({
    name: 'girl_id',
  })
  girl: Girl;
}
