import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from './breeds/breeds.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CustomConfigModule } from './config/config.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      //envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      autoLoadEntities: true, //entities:[], //[__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,

    }),
    CatsModule,
    BreedsModule,
    UsersModule,
    AuthModule,
    CustomConfigModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
