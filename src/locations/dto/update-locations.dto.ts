import { LocationType } from '@prisma/client';

export class UpdateLocationDto {
  name?: string;
  address?: string;
  type?: LocationType;
  latitude?: number;
  longitude?: number;
}
