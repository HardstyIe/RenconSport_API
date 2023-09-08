import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/authentification/auth.guard';
import { CreateUsersDto } from './dto/create-users.dto'; // À créer
import { UpdateUsersDto } from './dto/update-users.dto'; // À créer
import { UsersServices } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersServices) {}

  // Get all users
  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllUsers(@Res() response: Response): Promise<any> {
    const result = await this.usersService.getAllUsers();
    return response.status(200).json({
      status: 'Ok!',
      message: 'Successfully fetched data!',
      result: result,
    });
  }

  // Get single user
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getUserById(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<any> {
    const result = await this.usersService.getUserById(id);
    return response.status(200).json(result);
  }

  // Create user
  @Post()
  async createUser(
    @Body() createUserDto: CreateUsersDto,
    @Res() response: Response,
  ): Promise<any> {
    const result = await this.usersService.createUser(createUserDto);
    return response.status(201).json(result);
  }

  // Update user
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateUser(
    @Param('id') id: string,
    @Body() updateUsersDto: UpdateUsersDto,
    @Res() response: Response,
  ): Promise<any> {
    const result = await this.usersService.updateUser(id, updateUsersDto);
    return response.status(200).json(result);
  }

  // Delete user
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteUser(
    @Param('id') id: string,
    @Res() response: Response,
  ): Promise<any> {
    const result = await this.usersService.deleteUser(id);
    return response.status(200).json(result);
  }
}
