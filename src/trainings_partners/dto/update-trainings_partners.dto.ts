// DTO pour la mise à jour d'un TrainingPartner
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateTrainingPartnerDto {
  @IsUUID()
  @IsOptional()
  // ID de l'entraînement (optionnel pour la mise à jour)
  trainingId?: string;

  @IsUUID()
  @IsOptional()
  // ID de l'utilisateur (optionnel pour la mise à jour)
  userId?: string;

  @IsString()
  @IsOptional()
  // Statut (optionnel pour la mise à jour)
  status?: string;
}
