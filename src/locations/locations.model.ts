import { Prisma } from '@prisma/client';

export class Location implements Prisma.LocationCreateInput {
  name: string;
  address: string;
  type: string;
  latitude: number;
  longitude: number;
}
