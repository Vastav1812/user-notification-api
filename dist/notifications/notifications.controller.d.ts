import { NotificationsService } from './notifications.service';
import { SendNotificationDto } from '../dto/send-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    sendNotification(sendNotificationDto: SendNotificationDto): Promise<import("../schemas/notification-log.schema").NotificationLog>;
    getNotificationLogs(userId: string): Promise<import("../schemas/notification-log.schema").NotificationLog[]>;
    getNotificationStats(): Promise<any>;
}
