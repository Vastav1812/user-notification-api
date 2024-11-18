import { PreferencesService } from './preferences.service';
import { CreateUserPreferenceDto } from '../dto/create-user-preference.dto';
export declare class PreferencesController {
    private readonly preferencesService;
    constructor(preferencesService: PreferencesService);
    createPreference(createUserPreferenceDto: CreateUserPreferenceDto): Promise<{
        success: boolean;
        data: any;
        message: string;
        timestamp: string;
    }>;
    getPreference(userId: string): Promise<{
        success: boolean;
        data: any;
        message: string;
        timestamp: string;
    }>;
    updatePreference(userId: string, updateUserPreferenceDto: Partial<CreateUserPreferenceDto>): Promise<{
        success: boolean;
        data: any;
        message: string;
        timestamp: string;
    }>;
    deletePreference(userId: string): Promise<{
        success: boolean;
        data: any;
        message: string;
        timestamp: string;
    }>;
}
