import { Module } from '@nestjs/common';
import { ControllerModule } from '../http/controller.module';
import { DataBaseModule } from '@database/database.module';
import { CoreModule } from '@core/core.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DataBaseModule,
        ControllerModule,
        CoreModule,
    ],
})
export class AppModule {}
