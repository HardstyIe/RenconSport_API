import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import FB from 'fb';
import { OAuth2Client } from 'google-auth-library';
import { PrismaService } from 'src/prisma.service';
import { User } from 'src/users/users.model';
import { UsersServices } from 'src/users/users.service';
import { LoginDto } from './dto/login-user.dto';
import { RegisterUsersDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  private googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  private fb = FB;
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
    private readonly usersServices: UsersServices,
  ) {
    FB.options({
      version: 'v10.0',
      appId: process.env.FB_APP_ID,
      appSecret: process.env.FB_APP_SECRET,
    });
  }

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
    createUsers.first_name = createDTO.first_name;
    createUsers.last_name = createDTO.last_name;

    // Convertir le timestamp en objet Date
    const convertedDate = new Date(createDTO.birthday * 1000);
    createUsers.birthday = convertedDate;

    createUsers.password = await bcrypt.hash(createDTO.password, 10);

    const user = await this.usersServices.createUser(createUsers);

    return {
      token: this.jwtService.sign({ uuid: user.id }),
    };
  }

  async loginWithGoogle(token: string): Promise<any> {
    const ticket = await this.googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const googleId = payload['sub'];
    // Recherchez l'utilisateur dans votre base de données et créez-le si nécessaire
    // Générez un JWT et renvoyez-le

    const user = await this.prismaService.user.findUnique({
      where: {
        googleId: googleId,
      },
    });

    if (!user) {
      const newUser = new User();
      newUser.email = payload['email'];
      newUser.first_name = payload['first_name'];
      newUser.last_name = payload['last_name'];
      newUser.googleId = googleId;

      const user = await this.usersServices.createUser(newUser);

      return {
        token: this.jwtService.sign({ uuid: user.id }),
      };
    }

    return {
      token: this.jwtService.sign({ uuid: user.id }),
    };
  }

  async loginWithFacebook(token: string): Promise<any> {
    // Validez le token Facebook
    const data = await this.fb.api('me', {
      fields: ['id', 'name', 'email'],
      access_token: token,
    });

    const facebookId = data.facebookId;

    const user = await this.prismaService.user.findUnique({
      where: {
        facebookId: facebookId,
      },
    });

    if (!user) {
      const newUser = new User();
      newUser.email = data.email;
      newUser.first_name = data.name.split(' ')[0]; // Cela suppose que le nom est au format "Prénom Nom"
      newUser.last_name = data.name.split(' ')[1]; // Cela suppose que le nom est au format "Prénom Nom"
      newUser.facebookId = facebookId;

      const user = await this.usersServices.createUser(newUser);

      return {
        token: this.jwtService.sign({ uuid: user.id }),
      };
    }

    return {
      token: this.jwtService.sign({ uuid: user.id }),
    };
  }
}
