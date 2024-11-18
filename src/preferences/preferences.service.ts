import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from '../schemas/user-preference.schema';
import { CreateUserPreferenceDto } from '../dto/create-user-preference.dto';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectModel(UserPreference.name)
    private readonly userPreferenceModel: Model<UserPreference>,
  ) {}

  async create(createUserPreferenceDto: CreateUserPreferenceDto): Promise<UserPreference> {
    try {
      const createdPreference = new this.userPreferenceModel(createUserPreferenceDto);
      return createdPreference.save();
    } catch (error) {
      throw new Error('Unable to create user preference');
    }
  }

  async findByUserId(userId: string): Promise<UserPreference> {
    const userPreference = await this.userPreferenceModel.findOne({ userId }).exec();
    if (!userPreference) {
      throw new NotFoundException(`User preference not found for userId: ${userId}`);
    }
    return userPreference;
  }

  async update(
    userId: string,
    updateUserPreferenceDto: Partial<CreateUserPreferenceDto>,
  ): Promise<UserPreference> {
    const updatedPreference = await this.userPreferenceModel
      .findOneAndUpdate({ userId }, { $set: updateUserPreferenceDto }, { new: true })
      .exec();
    if (!updatedPreference) {
      throw new NotFoundException(`Cannot update preference for userId: ${userId}`);
    }
    return updatedPreference;
  }

  async delete(userId: string): Promise<{ deleted: boolean }> {
    const result = await this.userPreferenceModel.deleteOne({ userId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Cannot delete preference for userId: ${userId}`);
    }
    return { deleted: true };
  }
}
