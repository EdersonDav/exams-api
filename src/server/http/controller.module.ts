import { Module } from '@nestjs/common';
import { HelloController } from './controllers/hello';
import { CoreModule } from '../../core/core.module';

@Module({
    imports: [CoreModule],
    controllers: [HelloController],
})
export class ControllerModule {}
