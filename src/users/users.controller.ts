import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/authentification/auth.guard';
import { UsersServices } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersServices) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllUsers(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
      const result = await this.usersService.getAllUsers();
      return response.status(200).json({
        status: `Ok!`,
        message: `Successfully fetch data!`,
        result: result,
      });
    } catch (err) {
      return response.status(500).json({
        status: `Error!`,
        message: `Internal Server Error`,
        result: err,
      });
    }
  }
}
