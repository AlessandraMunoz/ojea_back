import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.mudule';
import { loginModule } from './modules/login/login.module';
import { profileModule } from './modules/profile/profile.module';


@Module({
  imports: [
    DatabaseModule,
    loginModule,
    profileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
