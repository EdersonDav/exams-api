import { Column, Entity, Index, Unique } from 'typeorm';
import { BaseEntity } from './base';
import { UserRole } from '@core/enums';

Unique(['email']);
@Entity('users')
export class User extends BaseEntity {
    @Index()
    @Column({ unique: true })
    email!: string;

    @Column()
    name!: string;

    @Column({ enum: UserRole, enumName: 'UserRole', type: 'enum' })
    role!: UserRole;

    @Column()
    password!: string;

    @Column({ nullable: true })
    reset_token?: string;

    @Column({ default: false })
    email_checked!: boolean;
}
