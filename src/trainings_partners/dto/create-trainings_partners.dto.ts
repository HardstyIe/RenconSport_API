// DTO pour la création d'un TrainingPartner
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateTrainingPartnerDto {
  @IsUUID()
  @IsNotEmpty()
  // ID de l'entraînement auquel le partenaire est associé
  trainingId: string;

  @IsUUID()
  @IsNotEmpty()
  // ID de l'utilisateur qui est le partenaire d'entraînement
  userId: string;

  @IsString()
  @IsNotEmpty()
  // Statut du partenaire d'entraînement (ex. : "Actif", "Inactif")
  status: string;
}
