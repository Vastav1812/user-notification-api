import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { SendNotificationDto } from '../dto/send-notification.dto';

@Controller('api/notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  // POST /api/notifications/send - Simulate sending a notification
  @Post('send')
  async sendNotification(@Body() sendNotificationDto: SendNotificationDto) {
    return this.notificationsService.send(sendNotificationDto);
  }

  // GET /api/notifications/:userId/logs - Get notification logs by userId
  @Get(':userId/logs')
  async getNotificationLogs(@Param('userId') userId: string) {
    return this.notificationsService.getLogs(userId);
  }

  // GET /api/notifications/stats - Get notification statistics
  @Get('stats')
  async getNotificationStats() {
    return this.notificationsService.getStats();
  }
}
