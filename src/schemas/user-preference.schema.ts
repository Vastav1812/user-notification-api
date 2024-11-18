// src/schemas/user-preference.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class Channels {
  @Prop({ required: true })
  email: boolean;

  @Prop({ required: true })
  sms: boolean;

  @Prop({ required: true })
  push: boolean;
}

const ChannelsSchema = SchemaFactory.createForClass(Channels);

@Schema()
class Preferences {
  @Prop({ required: true })
  marketing: boolean;

  @Prop({ required: true })
  newsletter: boolean;

  @Prop({ required: true })
  updates: boolean;

  @Prop({ required: true, enum: ['daily', 'weekly', 'monthly', 'never'] })
  frequency: string;

  @Prop({ required: true, type: ChannelsSchema })
  channels: Channels;
}

const PreferencesSchema = SchemaFactory.createForClass(Preferences);

@Schema({ timestamps: true })
export class UserPreference extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, type: PreferencesSchema })
  preferences: Preferences;

  @Prop({ required: true })
  timezone: string;

  // `lastUpdated` and `createdAt` are automatically handled by `timestamps: true`
}

export const UserPreferenceSchema = SchemaFactory.createForClass(UserPreference);
