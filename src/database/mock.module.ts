import { Module } from '@nestjs/common';
import { FakeUserRepository } from './repositories/fakes/fake.user.repository';
import { UserRepository } from './repositories/interfaces';

@Module({
    providers: [
        FakeUserRepository,
        {
            provide: UserRepository,
            useClass: FakeUserRepository,
        },
    ],
    exports: [UserRepository, FakeUserRepository],
})
export class MockDatabaseModule {}
