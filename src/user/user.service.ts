import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>,
  ) {}

  create(details: UserDTO): Promise<UserModel> {
    return this.userRepository.save(details);
  }

  findAll(): Promise<UserModel[]> {
    return this.userRepository.find();
  }
}
