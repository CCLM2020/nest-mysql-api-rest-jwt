import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { CustomConfigModule } from 'src/config/config.module';
//import { jwtConstants } from './constants/jwt.constant';
//import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [UsersModule, CustomConfigModule
    // JwtModule.registerAsync({
    //   imports:[ConfigModule],
    //   useFactory: async (ConfigService: ConfigService) => ({
    //     secret: ConfigService.get<string>('JWT_SECRET'),
    //     global: true,
    //     signOptions: { expiresIn: '1d'},
    //   }),
    //   inject: [ConfigService],
    // })
    // JwtModule.register({
    //   global: true,
    //   secret: jwtConstants.secret,
    //   signOptions: {
    //     expiresIn: '24h'
    //   }
    // })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  //exports: [JwtModule],
})
export class AuthModule {}
