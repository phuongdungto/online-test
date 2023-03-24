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
import { TestDetail } from "../testdetails/tesdetails.entity";
import { Test } from "../tests/test.entity";
import { User } from "../users/user.entity";
@Entity('marks')
export class Mark {
    constructor(data: Partial<Mark>) {
        Object.assign(this, data);
    }
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    mark: number

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ default: null })
    deletedAt: Date;

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

}