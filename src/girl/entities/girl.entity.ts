import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

// girl表
@Entity()
export class Girl {
  // id自增列
  @PrimaryGeneratedColumn()
  id: number;
  // name列
  @Column({ type: 'varchar', length: 255 })
  name: string;
  // age列
  @Column({ type: 'int' })
  age: number;
  // skill列
  @Column({ type: 'varchar', length: 255 })
  skill: string;
  // 键入 列
  @CreateDateColumn({ type: 'timestamp' })
  entryTime: Date;
  // uuid 列
  // @Generated('uuid')
  // uuid: string;
}
