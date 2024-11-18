import {
    IsString,
    IsEnum,
    IsNotEmpty,
    IsObject,
    IsOptional,
    ValidateNested,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  
  class ContentDto {
    @IsString()
    @IsNotEmpty()
    subject: string;
  
    @IsString()
    @IsNotEmpty()
    body: string;
  }
  
  export class SendNotificationDto {
    @IsString()
    @IsNotEmpty()
    userId: string;
  
    @IsEnum(['marketing', 'newsletter', 'updates'])
    type: 'marketing' | 'newsletter' | 'updates';
  
    @IsEnum(['email', 'sms', 'push'])
    channel: 'email' | 'sms' | 'push';
  
    @ValidateNested()
    @Type(() => ContentDto)
    content: ContentDto;
  }
  