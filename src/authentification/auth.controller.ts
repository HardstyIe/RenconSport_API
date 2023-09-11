import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { FacebookLoginDto } from './dto/facebook-login.dto';
import { GoogleLoginDto } from './dto/google-login.dto';
import { LoginDto } from './dto/login-user.dto';
import { RegisterUsersDto } from './dto/register-user.dto';

@ApiTags('Authentification')
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(
    @Req() request: Request,
    @Res() response: Response,
    @Body() loginDto: LoginDto,
  ): Promise<any> {
    try {
      const result = await this.authService.login(loginDto);
      return response.status(200).json({
        status: 'Ok!',
        message: 'Successfully login!',
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: 'Error!',
        message: 'Internal Server Error!',
      });
    }
  }

  @Post('/register')
  async register(
    @Req() request: Request,
    @Res() response: Response,
    @Body() registerDto: RegisterUsersDto,
  ): Promise<any> {
    const result = await this.authService.register(registerDto);
    return response.status(200).json({
      status: 'Ok!',
      message: 'Successfully register user!',
      result: result,
    });
  }

  @Post('/login-google')
  async loginWithGoogle(
    @Req() request: Request,
    @Res() response: Response,
    @Body() googleLoginDto: GoogleLoginDto,
  ): Promise<any> {
    try {
      const result = await this.authService.loginWithGoogle(
        googleLoginDto.token,
      );
      return response.status(200).json(result);
    } catch (err) {
      return response.status(500).json(err);
    }
  }

  @Post('/login-facebook')
  async loginWithFacebook(
    @Req() request: Request,
    @Res() response: Response,
    @Body() facebookLoginDto: FacebookLoginDto,
  ): Promise<any> {
    try {
      const result = await this.authService.loginWithFacebook(
        facebookLoginDto.token,
      );
      return response.status(200).json(result);
    } catch (err) {
      return response.status(500).json(err);
    }
  }
}
