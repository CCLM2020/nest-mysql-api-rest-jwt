import { Module } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity';
//import { AuthModule } from '../auth/auth.module';
import { CustomConfigModule } from 'src/config/config.module';

@Module({
  imports: [TypeOrmModule.forFeature([Breed]), CustomConfigModule],
  controllers: [BreedsController],
  providers: [BreedsService],
  exports: [TypeOrmModule]
})
export class BreedsModule {}
