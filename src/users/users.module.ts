import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
//import { AuthModule } from '../auth/auth.module';
import { CustomConfigModule } from 'src/config/config.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CustomConfigModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
