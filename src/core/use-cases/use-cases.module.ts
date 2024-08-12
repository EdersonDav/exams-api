import { Module } from '@nestjs/common';
import { HelloModuleModule } from './hello';
import { DataBaseModule } from '@database/database.module';

const modules = [HelloModuleModule];

@Module({
    imports: [...modules, DataBaseModule],
    exports: modules,
})
export class UseCasesModule {}
