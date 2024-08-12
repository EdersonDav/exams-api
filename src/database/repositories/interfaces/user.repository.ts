import { User } from '@database/entities';

export abstract class UserRepository {
    abstract getByEmail(email: string): Promise<User | null>;
    abstract save(user: Partial<User>): Promise<User>;
}
