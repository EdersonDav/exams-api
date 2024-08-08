import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateUserTable1723131129955 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                    },
                    {
                        name: 'deleted_at',
                        type: 'timestamp',
                    },
                    {
                        name: 'email',
                        type: 'varchar(25)',
                        isUnique: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar(50)',
                    },
                    {
                        name: 'password',
                        type: 'varchar(25)',
                    },
                    {
                        name: 'reset_token',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'email_checked',
                        type: 'boolean',
                        default: false,
                    },
                    {
                        name: 'role',
                        type: 'enum',
                        enum: ['admin', 'teacher', 'student'],
                        enumName: 'UserRole',
                    },
                ],
            }),
            true,
        ),
            await queryRunner.createIndex(
                'users',
                new TableIndex({
                    name: 'USER_EMAIL',
                    columnNames: ['email'],
                }),
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('users', 'USER_EMAIL');
        await queryRunner.dropTable('users');
        await queryRunner.query('DROP TYPE "UserRole"');
    }
}
