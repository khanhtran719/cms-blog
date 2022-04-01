import { Module } from '@nestjs/common';
import { ConfigRootModule } from './config/index.module';
import { MongoDbModule } from './database/index.module';
import { ModelModule } from './modules/index.module';

@Module({
  imports: [ConfigRootModule, MongoDbModule, ModelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
