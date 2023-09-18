import { $Enums, Prisma } from '@prisma/client';

export class Location implements Prisma.LocationCreateInput {
  type: $Enums.LocationType;
  id?: string;
  name?: string;
  address?: string;
  latitude: number;
  longitude: number;
  user?: Prisma.UserCreateNestedOneWithoutLocationInput;
  training?: Prisma.TrainingCreateNestedOneWithoutLocationInput;
}
