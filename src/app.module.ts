import { Module } from '@nestjs/common';
import { AuthModule } from './authentification/auth.module';
import { UsersModule } from './users/users.module';
import { UserLikesModule } from './users_likes/users_likes.module';

@Module({
  imports: [UsersModule, AuthModule, UserLikesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
