import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './user.model';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    forwardRef(() => UserModule),
    TypeOrmModule.forFeature([UserModel]),
  ],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
