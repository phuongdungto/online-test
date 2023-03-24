import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    Relation,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { Roles } from "../core/enum";
import { Mark } from "../marks/mark.entity";
import { TestDetail } from "../testdetails/tesdetails.entity";
@Entity('users')
export class User {
    constructor(data: Partial<User>) {
        Object.assign(this, data);
    }
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ name: 'fullname' })
    fullname: string;

    @Column({ name: 'email', nullable: false })
    email: string;

    @Column({ name: 'password', select: false })
    password?: string;

    @Column({
        name: 'role',
        type: 'enum',
        enum: Roles,
        default: Roles.STUDENT,
        nullable: false
    })
    role: Roles;

    @Column()
    numberPhone: string;

    @Column()
    birthDay: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ default: null })
    deletedAt: Date;

    @OneToMany(() => TestDetail, (testDetail) => testDetail.user)
    testdetails: Relation<TestDetail>[];

    @OneToMany(() => Mark, (Mark) => Mark.user)
    marks: Relation<Mark>[];

}