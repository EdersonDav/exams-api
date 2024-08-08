import { Module } from '@nestjs/common';
import { ControllerModule } from '../http/controller.module';
import { DataBaseModule } from '@database/index';
import { CoreModule } from '@core/index';
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
