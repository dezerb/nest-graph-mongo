import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetUsersArgs } from './entities/get-users-args';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserInput: CreateUserInput) {
    const newUser = new this.userModel(createUserInput);
    return newUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  filter(args: GetUsersArgs): Promise<User[]> {
    return this.userModel.find({ ...args }).exec();
  }

  update(payload: UpdateUserInput) {
    return this.userModel
      .findByIdAndUpdate(payload.id, payload, { new: true })
      .exec();
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
