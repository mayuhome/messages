/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

/*
 * @Author: Ma Jade
 * @Date: 2022-09-04 23:19:31
 * @LastEditTime: 2022-09-04 23:19:32
 * @LastEditors: Ma Jade
 * @FilePath: \messages\src\messages\dtos\create-message.dto.ts
 */
export class CreateMessageDto {
  @IsString()
  content: string;
}
