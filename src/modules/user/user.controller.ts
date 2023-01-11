import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { createUserDto } from './dto/create-user.dto';

@Controller('user')
@ApiTags('User-Controller')
export class UserController {
  /**
   * Create User
   */
  @Post()
  @ApiCreatedResponse({
    description: 'ok',
  })
  async createUser(@Body() dto: createUserDto) {}
}
