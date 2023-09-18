import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { UsersServices } from 'src/users/users.service';
import { LoginDto } from './dto/login-user.dto';
import { RegisterUsersDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  prismaClient: PrismaClient;

  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
    private readonly usersServices: UsersServices,
  ) {}

  async login(LoginDto: LoginDto) {
    const { email, password } = LoginDto;

    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException(`User Not Found`);
    }

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      throw new UnauthorizedException(`Password is incorrect`);
    }

    return { token: this.jwtService.sign({ uuid: user.id }) };
  }

  async register(createDTO: RegisterUsersDto) {
    const password = await bcrypt.hash(createDTO.password, 10);

    const user = await this.usersServices.createUser({
      email: createDTO.email,
      password,
    });

    return user;
  }
}
