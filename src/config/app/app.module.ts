import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import appConfiguration from './app.configuration';
import { AppConfigService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfiguration],
      validationSchema: Joi.object({
        APP_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        APP_PORT: Joi.number().default(3000),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
