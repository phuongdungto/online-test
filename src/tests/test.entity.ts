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
import { Class } from "../classes/classes.entity";
import { Roles, TypeTest } from "../core/enum";
import { Mark } from "../marks/mark.entity";
import { TestDetail } from "../testdetails/tesdetails.entity";
import { User } from "../users/user.entity";
@Entity('tests')
export class Test {
    constructor(data: Partial<Test>) {
        Object.assign(this, data);
    }
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ name: 'name' })
    name: string;

    @Column({
        name: 'type',
        type: 'enum',
        enum: TypeTest,
        nullable: false
    })
    type: TypeTest;

    @Column()
    questionUrl: string;

    @Column()
    answerUrl: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ default: null })
    deletedAt: Date;

    @OneToMany(() => TestDetail, (testDetail) => testDetail.test)
    testdetails: Relation<TestDetail>[];

    @OneToMany(() => Mark, (Mark) => Mark.test)
    marks: Relation<Mark>[];

    @ManyToOne(() => User, (user) => user.tests)
    @JoinColumn()
    teacher: Relation<User>;

    @Column({ nullable: true })
    teacherId: number

    @ManyToOne(() => Class, (Class) => Class.tests)
    @JoinColumn()
    class: Relation<Class>;

    @Column({ nullable: true })
    classId: number

    @Column()
    startDate: Date

    @Column()
    time: number
}