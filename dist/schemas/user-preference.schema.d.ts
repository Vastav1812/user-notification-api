import { Document } from 'mongoose';
declare class Channels {
    email: boolean;
    sms: boolean;
    push: boolean;
}
declare class Preferences {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: string;
    channels: Channels;
}
export declare class UserPreference extends Document {
    userId: string;
    email: string;
    preferences: Preferences;
    timezone: string;
}
export declare const UserPreferenceSchema: import("mongoose").Schema<UserPreference, import("mongoose").Model<UserPreference, any, any, any, Document<unknown, any, UserPreference> & UserPreference & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserPreference, Document<unknown, {}, import("mongoose").FlatRecord<UserPreference>> & import("mongoose").FlatRecord<UserPreference> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export {};
