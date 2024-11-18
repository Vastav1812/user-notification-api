"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const notification_log_schema_1 = require("../schemas/notification-log.schema");
let NotificationsService = class NotificationsService {
    constructor(notificationLogModel) {
        this.notificationLogModel = notificationLogModel;
    }
    async send(sendNotificationDto) {
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
        }
        catch (error) {
            throw new Error('Error sending notification');
        }
    }
    async getLogs(userId) {
        const logs = await this.notificationLogModel.find({ userId }).exec();
        if (!logs.length) {
            throw new common_1.NotFoundException(`No logs found for userId: ${userId}`);
        }
        return logs;
    }
    async getStats() {
        const total = await this.notificationLogModel.countDocuments();
        const sent = await this.notificationLogModel.countDocuments({ status: 'sent' });
        const failed = await this.notificationLogModel.countDocuments({ status: 'failed' });
        return { total, sent, failed };
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(notification_log_schema_1.NotificationLog.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map