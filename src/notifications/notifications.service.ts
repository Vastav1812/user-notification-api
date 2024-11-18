import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationLog } from '../schemas/notification-log.schema';
import { SendNotificationDto } from '../dto/send-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(NotificationLog.name)
    private readonly notificationLogModel: Model<NotificationLog>,
  ) {}

  async send(sendNotificationDto: SendNotificationDto): Promise<NotificationLog> {
    try {
      const log = new this.notificationLogModel({
        userId: sendNotificationDto.userId,
        type: sendNotificationDto.type,
        channel: sendNotificationDto.channel,
        status: 'sent',
        sentAt: new Date(),
        metadata: sendNotificationDto.content,
      });
      return log.save();
    } catch (error) {
      throw new Error('Error sending notification');
    }
  }

  async getLogs(userId: string): Promise<NotificationLog[]> {
    const logs = await this.notificationLogModel.find({ userId }).exec();
    if (!logs.length) {
      throw new NotFoundException(`No logs found for userId: ${userId}`);
    }
    return logs;
  }

  async getStats(): Promise<any> {
    const total = await this.notificationLogModel.countDocuments();
    const sent = await this.notificationLogModel.countDocuments({ status: 'sent' });
    const failed = await this.notificationLogModel.countDocuments({ status: 'failed' });
    return { total, sent, failed };
  }
}
