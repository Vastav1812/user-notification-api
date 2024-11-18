import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { CreateUserPreferenceDto } from '../dto/create-user-preference.dto';
import { ApiResponse } from '../common/utlis/api-response.util';

@Controller('api/preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Post()
  async createPreference(@Body() createUserPreferenceDto: CreateUserPreferenceDto) {
    const data = await this.preferencesService.create(createUserPreferenceDto);
    return ApiResponse.success(data, 'User preference created successfully');
  }

  @Get(':userId')
  async getPreference(@Param('userId') userId: string) {
    const data = await this.preferencesService.findByUserId(userId);
    return ApiResponse.success(data, `User preference fetched successfully`);
  }

  @Patch(':userId')
  async updatePreference(
    @Param('userId') userId: string,
    @Body() updateUserPreferenceDto: Partial<CreateUserPreferenceDto>,
  ) {
    const data = await this.preferencesService.update(userId, updateUserPreferenceDto);
    return ApiResponse.success(data, `User preference updated successfully`);
  }

  @Delete(':userId')
  async deletePreference(@Param('userId') userId: string) {
    const data = await this.preferencesService.delete(userId);
    return ApiResponse.success(data, `User preference deleted successfully`);
  }
}
