import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  delete(id: number) {
    return null;
  }

  findByid(id: number) {
    return null;
  }

  findByName(name: string): User{
    return {id:1 , username: name, password: "ulala"} as User
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return null;
  }

  update(id: number, user: CreateUserDto) {
    return null;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
