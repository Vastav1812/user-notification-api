declare class ContentDto {
    subject: string;
    body: string;
}
export declare class SendNotificationDto {
    userId: string;
    type: 'marketing' | 'newsletter' | 'updates';
    channel: 'email' | 'sms' | 'push';
    content: ContentDto;
}
export {};
