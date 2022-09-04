/*
 * @Author: Ma Jade
 * @Date: 2022-09-04 22:37:22
 * @LastEditTime: 2022-09-04 23:21:14
 * @LastEditors: Ma Jade
 * @FilePath: \messages\src\messages\messages.controller.ts
 */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {

  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('body:', body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id:', id);
  }
}
