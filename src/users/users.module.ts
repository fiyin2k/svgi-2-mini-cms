import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {PermissionsModule} from './modules/permissions/permissions.module';
import {RolesModule} from './modules/roles/roles.module';
import { User } from './models/user.entity';
import { Profile } from './models/profile.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([User,Profile]),
    PermissionsModule,
    RolesModule
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
