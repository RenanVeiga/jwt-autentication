import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll() : Promise<User[]>{
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) : Promise<User>{
    return this.userService.findByid(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.update(id, createUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
