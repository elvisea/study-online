import Course from './Course';
import {
  Column,
  Entity,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Image from './Image';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  email: string;

  @OneToMany(type => Course, course => course.user, { eager: true })
  courses: Course[];

  @Column('varchar')
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Image, (image) => image.user, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "user_id" })
  images: Image[];
}

export default User;
