import { Module } from '@nestjs/common';
import { ControllerModule } from '../http/controller.module';

@Module({
  imports: [ControllerModule],
})
export class AppModule {}
