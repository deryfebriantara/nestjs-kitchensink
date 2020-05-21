import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { UserEntity } from '../user/user.entity';

@Entity('todos')
export class TodoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(type => UserEntity, user => user.id)
  user: string;

  @Column({
    type: 'boolean',
    default: false
  })
  is_done: boolean

  @CreateDateColumn()
  create_at: Date

  @UpdateDateColumn()
  updated_at: Date
}