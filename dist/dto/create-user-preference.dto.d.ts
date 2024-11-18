declare class ChannelsDto {
    email: boolean;
    sms: boolean;
    push: boolean;
}
declare class PreferencesDto {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: ChannelsDto;
}
export declare class CreateUserPreferenceDto {
    userId: string;
    email: string;
    preferences: PreferencesDto;
    timezone: string;
}
export {};
