import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from '../config';
import { UserRepository } from './repositories/interfaces';
import { UserService } from './repositories/services/typeorm.repository.service';
import { User } from './entities';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: env.db.HOST,
            port: env.db.PORT,
            database: env.db.NAME,
            entities: [User],
            password: env.db.PASSWORD,
            username: env.db.USER,
            synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
    ],
    providers: [
        UserService,
        {
            provide: UserRepository,
            useClass: UserService,
        },
    ],
    exports: [UserRepository, UserService],
})
export class DataBaseModule {}
