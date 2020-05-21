import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';

@Entity('user')
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string

  @Column({ unique: true })
  email: string

  @Column({
    type: 'varchar',
    nullable: false
  })
  @Exclude()
  password: string;

  @CreateDateColumn()
  create_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}