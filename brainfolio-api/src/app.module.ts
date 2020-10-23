import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { UserModule } from './user/user.module';
import {MongooseConfig} from './Config/mongoose.config';
import { ProjectsModule} from './projects/projects.module';
import { PortfolioModule} from './portfolio/portfolio.module';

//TODO: (Optional) Create ConfigServiceto deserialise vars
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_URL, MongooseConfig),
    AuthModule,
    HealthcheckModule,
    UserModule,
    ProjectsModule,
    PortfolioModule,
  ]
})
export class AppModule {}