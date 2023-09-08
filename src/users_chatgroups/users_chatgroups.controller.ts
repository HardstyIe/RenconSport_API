import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentification/auth.guard';
import { UserChatGroupServices } from './users_chatgroups.service';

@ApiTags('UserChatGroup')
@Controller('chatgroup')
export class UserChatGroupController {
  constructor(private readonly userChatGroupService: UserChatGroupServices) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllUserChatGroups(@Res() res): Promise<any> {
    const result = await this.userChatGroupService.getAllUserChatGroups();
    return res.status(200).json(result);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getUserChatGroupById(@Res() res, id: number): Promise<any> {
    const result = await this.userChatGroupService.getUserChatGroupById(id);
    return res.status(200).json(result);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createUserChatGroup(@Res() res, data): Promise<any> {
    const result = await this.userChatGroupService.createUserChatGroup(data);
    return res.status(201).json(result);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateUserChatGroup(@Res() res, id: number, data): Promise<any> {
    const result = await this.userChatGroupService.updateUserChatGroup(
      id,
      data,
    );
    return res.status(200).json(result);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteUserChatGroup(@Res() res, id: number): Promise<any> {
    const result = await this.userChatGroupService.deleteUserChatGroup(id);
    return res.status(200).json(result);
  }
}
