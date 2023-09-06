import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from './users.model';

@Injectable()
export class UsersServices {
  constructor(private prisma: PrismaService) {}

  /**
   * Fetch all users.
   * @returns {Promise<User[]>} An array of users.
   */
  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  /**
   * Fetch a user by their ID.
   * @param {string} id - The ID of the user.
   * @returns {Promise<User>} The user fetched.
   * @throws {NotFoundException} If the user is not found.
   */
  async getUserById(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
    });
    if (!user) {
      throw new NotFoundException(`No user found with the ID ${id}.`);
    }
    return user;
  }

  /**
   * Create a new user.
   * @param {User} data - The data for the new user.
   * @returns {Promise<User>} The user created.
   * @throws {ConflictException} If the email is already in use.
   */
  async createUser(data: User): Promise<User> {
    const existing = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existing) {
      throw new ConflictException(
        'The email address is already associated with an account.',
      );
    }
    return this.prisma.user.create({ data });
  }

  /**
   * Update an existing user.
   * @param {string} id - The ID of the user.
   * @param {Partial<User>} data - The data to update.
   * @returns {Promise<User>} The user updated.
   * @throws {NotFoundException} If the user is not found.
   */
  async updateUser(id: string, data: Partial<User>): Promise<User> {
    const existing = await this.getUserById(id);
    if (!existing) {
      throw new NotFoundException(
        `No user found with the ID ${id} for updating.`,
      );
    }
    return this.prisma.user.update({
      where: { id: id },
      data,
    });
  }

  /**
   * Delete an existing user.
   * @param {string} id - The ID of the user.
   * @returns {Promise<User>} The user deleted.
   * @throws {NotFoundException} If the user is not found.
   */
  async deleteUser(id: string): Promise<User> {
    const existing = await this.getUserById(id);
    if (!existing) {
      throw new NotFoundException(
        `No user found with the ID ${id} for deletion.`,
      );
    }
    return this.prisma.user.delete({
      where: { id: id },
    });
  }
}
