import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './groups/messages/messages.module';
import { LocationModule } from './locations/locations.module';
import { ExercicesModule } from './trainings/sports/exercices/exercices.module';
import { ExerciceTrainingModule } from './trainings/sports/exercices/rounds/rounds.module';
import { TrainingsModule } from './trainings/trainings.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TrainingsModule,
    LocationModule,
    ExerciceTrainingModule,
    ExercicesModule,
    MessagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
