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
import { CreateUsersLikesDto } from './dto/create-users_likes.dto';
import { UpdateUsersLikesDto } from './dto/update-users_likes.dto';
import { UserLikesServices } from './users_likes.service';

@ApiTags('UserLikes')
@Controller('likes')
export class UserLikesController {
  constructor(private readonly userLikesService: UserLikesServices) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllLikes(@Res() response: Response): Promise<any> {
    const result = await this.userLikesService.getAllLikes();
    return response.status(200).json(result);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createLike(
    @Body() createUsersLikesDto: CreateUsersLikesDto,
    @Res() response: Response,
  ): Promise<any> {
    const result = await this.userLikesService.createLike(createUsersLikesDto);
    return response.status(201).json(result);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getLikeById(
    @Param('id') id: number,
    @Res() response: Response,
  ): Promise<any> {
    const result = await this.userLikesService.getLikeById(id);
    return response.status(200).json(result);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateLike(
    @Param('id') id: number,
    @Body() updateUsersLikesDto: UpdateUsersLikesDto,
    @Res() response: Response,
  ): Promise<any> {
    const result = await this.userLikesService.updateLike(
      id,
      updateUsersLikesDto,
    );
    return response.status(200).json(result);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteLike(
    @Param('id') id: number,
    @Res() response: Response,
  ): Promise<any> {
    const result = await this.userLikesService.deleteLike(id);
    return response.status(200).json(result);
  }
}
