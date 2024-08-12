import { UserRepository } from '../interfaces/user.repository';

export class FakeUserRepository implements UserRepository {
    getByEmail = jest.fn();
    save = jest.fn();
}
