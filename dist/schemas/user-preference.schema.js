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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPreferenceSchema = exports.UserPreference = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Channels = class Channels {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Channels.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Channels.prototype, "sms", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Channels.prototype, "push", void 0);
Channels = __decorate([
    (0, mongoose_1.Schema)()
], Channels);
const ChannelsSchema = mongoose_1.SchemaFactory.createForClass(Channels);
let Preferences = class Preferences {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Preferences.prototype, "marketing", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Preferences.prototype, "newsletter", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Preferences.prototype, "updates", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['daily', 'weekly', 'monthly', 'never'] }),
    __metadata("design:type", String)
], Preferences.prototype, "frequency", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: ChannelsSchema }),
    __metadata("design:type", Channels)
], Preferences.prototype, "channels", void 0);
Preferences = __decorate([
    (0, mongoose_1.Schema)()
], Preferences);
const PreferencesSchema = mongoose_1.SchemaFactory.createForClass(Preferences);
let UserPreference = class UserPreference extends mongoose_2.Document {
};
exports.UserPreference = UserPreference;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserPreference.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserPreference.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: PreferencesSchema }),
    __metadata("design:type", Preferences)
], UserPreference.prototype, "preferences", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserPreference.prototype, "timezone", void 0);
exports.UserPreference = UserPreference = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], UserPreference);
exports.UserPreferenceSchema = mongoose_1.SchemaFactory.createForClass(UserPreference);
//# sourceMappingURL=user-preference.schema.js.map