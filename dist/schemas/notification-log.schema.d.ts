import { Document } from 'mongoose';
export declare class NotificationLog extends Document {
    userId: string;
    type: string;
    channel: string;
    status: string;
    sentAt?: Date;
    failureReason?: string;
    metadata: Record<string, any>;
}
export declare const NotificationLogSchema: import("mongoose").Schema<NotificationLog, import("mongoose").Model<NotificationLog, any, any, any, Document<unknown, any, NotificationLog> & NotificationLog & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, NotificationLog, Document<unknown, {}, import("mongoose").FlatRecord<NotificationLog>> & import("mongoose").FlatRecord<NotificationLog> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
