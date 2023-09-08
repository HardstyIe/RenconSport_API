import { Module } from '@nestjs/common';
import { AuthModule } from './authentification/auth.module';
import { ChatMessagesModule } from './chats_messages/chats_messages.module';
import { ExercicesModule } from './exercices/exercices.module';
import { ExerciceTrainingModule } from './exercices_trainings/exercices_trainings.module';
import { LocationModule } from './locations/locations.module';
import { TrainingsModule } from './trainings/trainings.module';
import { TrainingPartnersModule } from './trainings_partners/trainings_partners.module';
import { UsersModule } from './users/users.module';
import { UserChatGroupModule } from './users_chatgroups/users_chatgroups.module';
import { UserLikesModule } from './users_likes/users_likes.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    UserLikesModule,
    UserChatGroupModule,
    TrainingsModule,
    TrainingPartnersModule,
    LocationModule,
    ExerciceTrainingModule,
    ExercicesModule,
    ChatMessagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
