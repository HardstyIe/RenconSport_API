import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateGroupDto } from './dto/create-groups.dto';
import { UpdateGroupDto } from './dto/update-groups.dto';
import { GroupService } from './groups.service';

@ApiTags('Groups')
@Controller('groups')
export class ChatGroupsController {
  constructor(private readonly service: GroupService) {}

  @Get()
  async getAllChatGroups(@Res() response: Response) {
    const result = await this.service.getAllGroups();
    return response.status(200).json(result);
  }

  @Get(':id')
  async getChatGroupById(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.getGroupById(id);
    return response.status(200).json(result);
  }

  @Post()
  async createChatGroup(
    @Body() createDto: CreateGroupDto,
    @Res() response: Response,
  ) {
    const result = await this.service.createGroup(createDto);
    return response.status(201).json(result);
  }

  @Put(':id')
  async updateChatGroup(
    @Param('id') id: string,
    @Body() updateDto: UpdateGroupDto,
    @Res() response: Response,
  ) {
    const result = await this.service.updateGroup(id, updateDto);
    return response.status(200).json(result);
  }

  @Delete(':id')
  async deleteChatGroup(@Param('id') id: string, @Res() response: Response) {
    const result = await this.service.deleteGroup(id);
    return response.status(200).json(result);
  }
}
