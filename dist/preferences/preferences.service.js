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
exports.PreferencesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_preference_schema_1 = require("../schemas/user-preference.schema");
let PreferencesService = class PreferencesService {
    constructor(userPreferenceModel) {
        this.userPreferenceModel = userPreferenceModel;
    }
    async create(createUserPreferenceDto) {
        try {
            const createdPreference = new this.userPreferenceModel(createUserPreferenceDto);
            return createdPreference.save();
        }
        catch (error) {
            throw new Error('Unable to create user preference');
        }
    }
    async findByUserId(userId) {
        const userPreference = await this.userPreferenceModel.findOne({ userId }).exec();
        if (!userPreference) {
            throw new common_1.NotFoundException(`User preference not found for userId: ${userId}`);
        }
        return userPreference;
    }
    async update(userId, updateUserPreferenceDto) {
        const updatedPreference = await this.userPreferenceModel
            .findOneAndUpdate({ userId }, { $set: updateUserPreferenceDto }, { new: true })
            .exec();
        if (!updatedPreference) {
            throw new common_1.NotFoundException(`Cannot update preference for userId: ${userId}`);
        }
        return updatedPreference;
    }
    async delete(userId) {
        const result = await this.userPreferenceModel.deleteOne({ userId }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException(`Cannot delete preference for userId: ${userId}`);
        }
        return { deleted: true };
    }
};
exports.PreferencesService = PreferencesService;
exports.PreferencesService = PreferencesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_preference_schema_1.UserPreference.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PreferencesService);
//# sourceMappingURL=preferences.service.js.map