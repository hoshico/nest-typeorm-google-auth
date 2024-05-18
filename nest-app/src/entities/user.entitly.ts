import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Entityの付け忘れ注意
@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  birthDate: string;

  @Column()
  imageUrl: string;
}
