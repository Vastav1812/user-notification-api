import { Model } from 'mongoose';
import { NotificationLog } from '../schemas/notification-log.schema';
import { SendNotificationDto } from '../dto/send-notification.dto';
export declare class NotificationsService {
    private readonly notificationLogModel;
    constructor(notificationLogModel: Model<NotificationLog>);
    send(sendNotificationDto: SendNotificationDto): Promise<NotificationLog>;
    getLogs(userId: string): Promise<NotificationLog[]>;
    getStats(): Promise<any>;
}
