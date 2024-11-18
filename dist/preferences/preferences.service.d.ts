import { Model } from 'mongoose';
import { UserPreference } from '../schemas/user-preference.schema';
import { CreateUserPreferenceDto } from '../dto/create-user-preference.dto';
export declare class PreferencesService {
    private readonly userPreferenceModel;
    constructor(userPreferenceModel: Model<UserPreference>);
    create(createUserPreferenceDto: CreateUserPreferenceDto): Promise<UserPreference>;
    findByUserId(userId: string): Promise<UserPreference>;
    update(userId: string, updateUserPreferenceDto: Partial<CreateUserPreferenceDto>): Promise<UserPreference>;
    delete(userId: string): Promise<{
        deleted: boolean;
    }>;
}
