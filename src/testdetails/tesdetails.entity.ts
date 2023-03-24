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
import { Roles, TypeTest } from "../core/enum";
import { Test } from "../tests/test.entity";
import { User } from "../users/user.entity";
@Entity('test_details')
export class TestDetail {
    constructor(data: Partial<TestDetail>) {
        Object.assign(this, data);
    }
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @ManyToOne(() => User, (user) => user.testdetails)
    @JoinColumn()
    user: Relation<User>;

    @Column({ nullable: true })
    userId: number

    @ManyToOne(() => Test, (test) => test.testdetails)
    @JoinColumn()
    test: Relation<Test>;

    @Column({ nullable: true })
    testId: number

    @Column({ nullable: true })
    question: number

    @Column({ nullable: true })
    answer: number

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ default: null })
    deletedAt: Date;



}