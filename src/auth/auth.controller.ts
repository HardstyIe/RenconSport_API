import {
  Body,
  Controller,
  InternalServerErrorException,
  Logger,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-user.dto';
import { RegisterUsersDto } from './dto/register-user.dto';

@ApiTags('Authentification')
@Controller('/auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    try {
      this.logger.log(`Login attempt: ${JSON.stringify(loginDto)}`);

      const result = await this.authService.login(loginDto);

      return result;
    } catch (err) {
      this.logger.error(`Login failed: ${err.message}`);

      console.error(err);

      throw new InternalServerErrorException();
    }
  }

  @Post('/register')
  async register(@Body() registerDto: RegisterUsersDto) {
    try {
      this.logger.log(`Register attempt: ${JSON.stringify(registerDto)}`);

      const result = await this.authService.register(registerDto);

      return result;
    } catch (err) {
      this.logger.error(`Registration failed: ${err.message}`);

      console.error(err);

      throw new InternalServerErrorException();
    }
  }
}
