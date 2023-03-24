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
import { User } from "../users/user.entity";
@Entity('classes')
export class Class {
    constructor(data: Partial<Class>) {
        Object.assign(this, data);
    }
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn({ default: null })
    deletedAt: Date;

    @ManyToOne(() => User, (user) => user.classes)
    @JoinColumn()
    teacher: Relation<User>;

    @Column({ nullable: true })
    teacherId: number

    @OneToMany(() => User, (user) => user.class)
    users: Relation<User>[];

}