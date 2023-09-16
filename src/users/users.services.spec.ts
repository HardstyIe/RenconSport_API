import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UsersServices } from '../users/users.service';

describe('UsersServices', () => {
  let service: UsersServices;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersServices, PrismaService],
    }).compile();

    service = module.get<UsersServices>(UsersServices);
    prisma = module.get<PrismaService>(PrismaService);
  });

  // Test 1: Vérifie que la fonction retourne un tableau d'utilisateurs
  it('devrait récupérer tous les utilisateurs', async () => {
    const mockUsers: User[] = [
      {
        id: '1',
        email: 'test@test.com',
        first_name: 'Test',
        last_name: 'User',
        password: 'hashedPassword',
        is_admin: false,
        birthday: new Date(),
        location: 'somewhere',
        phoneNumber: '1234567890',
        googleId: null,
        facebookId: null,
        auth0Id: null,
      },
      {
        id: '2',
        email: 'test@test.com',
        first_name: 'Test',
        last_name: 'User',
        password: 'hashedPassword',
        is_admin: false,
        birthday: new Date(),
        location: 'somewhere',
        phoneNumber: '1234567890',
        googleId: null,
        facebookId: null,
        auth0Id: null,
      },
      {
        id: '3',
        email: 'test@test.com',
        first_name: 'Test',
        last_name: 'User',
        password: 'hashedPassword',
        is_admin: false,
        birthday: new Date(),
        location: 'somewhere',
        phoneNumber: '1234567890',
        googleId: null,
        facebookId: null,
        auth0Id: null,
      },
    ];

    jest.spyOn(prisma.user, 'findMany').mockResolvedValue(mockUsers);

    const users = await service.getAllUsers();
    expect(users).toEqual(mockUsers);
  });

  // Test 2: Vérifie que chaque utilisateur a un ID valide
  it('devrait récupérer des utilisateurs avec des IDs valides', async () => {
    const mockUsers: User[] = [
      {
        id: '1',
        email: 'test@test.com',
        first_name: 'Test',
        last_name: 'User',
        password: 'hashedPassword',
        is_admin: false,
        birthday: new Date(),
        location: 'somewhere',
        phoneNumber: '1234567890',
        googleId: null,
        facebookId: null,
        auth0Id: null,
      },
      {
        id: '2',
        email: 'test@test.com',
        first_name: 'Test',
        last_name: 'User',
        password: 'hashedPassword',
        is_admin: false,
        birthday: new Date(),
        location: 'somewhere',
        phoneNumber: '1234567890',
        googleId: null,
        facebookId: null,
        auth0Id: null,
      },
      {
        id: '3',
        email: 'test@test.com',
        first_name: 'Test',
        last_name: 'User',
        password: 'hashedPassword',
        is_admin: false,
        birthday: new Date(),
        location: 'somewhere',
        phoneNumber: '1234567890',
        googleId: null,
        facebookId: null,
        auth0Id: null,
      },
    ];

    jest.spyOn(prisma.user, 'findMany').mockResolvedValue(mockUsers);

    const users = await service.getAllUsers();
    users.forEach((user) => {
      expect(typeof user.id).toBe('string');
      expect(user.id.length).toBeGreaterThan(0);
    });
  });

  // Test 3: Vérifie que la fonction gère correctement un tableau vide
  it('devrait gérer un tableau vide', async () => {
    jest.spyOn(prisma.user, 'findMany').mockResolvedValue([]);

    const users = await service.getAllUsers();
    expect(users).toEqual([]);
  });

  // Test 4: Vérifie que la fonction lance une exception si la base de données échoue
  it('devrait lancer une exception si la base de données échoue', async () => {
    jest
      .spyOn(prisma.user, 'findMany')
      .mockRejectedValue(new Error('Erreur de la DB'));

    await expect(service.getAllUsers()).rejects.toThrow('Erreur de la DB');
  });

  // Vous pouvez ajouter davantage de tests pour couvrir d'autres aspects et scénarios.
});
