import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { User } from 'src/users/users.model';
import { UsersServices } from 'src/users/users.service';
import { LoginDto } from './dto/login-user.dto';
import { RegisterUsersDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  prisma: any;
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
    private readonly usersServices: UsersServices,
  ) {}

  async login(LoginDto: LoginDto): Promise<any> {
    const { email, password } = LoginDto;

    const user = await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new NotFoundException(`User Not Found`);
    }
    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword) {
      throw new NotFoundException(`Password is incorrect`);
    }

    return {
      token: this.jwtService.sign({ uuid: user.id }),
    };
  }

  async register(createDTO: RegisterUsersDto): Promise<any> {
    const createUsers = new User();
    createUsers.email = createDTO.email;

    createUsers.password = await bcrypt.hash(createDTO.password, 10);

    const user = await this.usersServices.createUser(createUsers);

    return;
  }
}
