import { UserModel } from './user.model';

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { UserService } from './user.service';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Query(() => [UserModel])
  async users(): Promise<UserModel[]> {
    return await this.userService.findAll();
  }

  @Mutation(() => UserModel)
  async createUser(
    @Args('name') name: string,
    @Args('email') email: string,
  ): Promise<UserModel> {
    return await this.userService.create({ name, email });
  }
}
