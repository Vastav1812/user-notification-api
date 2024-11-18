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
exports.PreferencesController = void 0;
const common_1 = require("@nestjs/common");
const preferences_service_1 = require("./preferences.service");
const create_user_preference_dto_1 = require("../dto/create-user-preference.dto");
const api_response_util_1 = require("../common/utlis/api-response.util");
let PreferencesController = class PreferencesController {
    constructor(preferencesService) {
        this.preferencesService = preferencesService;
    }
    async createPreference(createUserPreferenceDto) {
        const data = await this.preferencesService.create(createUserPreferenceDto);
        return api_response_util_1.ApiResponse.success(data, 'User preference created successfully');
    }
    async getPreference(userId) {
        const data = await this.preferencesService.findByUserId(userId);
        return api_response_util_1.ApiResponse.success(data, `User preference fetched successfully`);
    }
    async updatePreference(userId, updateUserPreferenceDto) {
        const data = await this.preferencesService.update(userId, updateUserPreferenceDto);
        return api_response_util_1.ApiResponse.success(data, `User preference updated successfully`);
    }
    async deletePreference(userId) {
        const data = await this.preferencesService.delete(userId);
        return api_response_util_1.ApiResponse.success(data, `User preference deleted successfully`);
    }
};
exports.PreferencesController = PreferencesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_preference_dto_1.CreateUserPreferenceDto]),
    __metadata("design:returntype", Promise)
], PreferencesController.prototype, "createPreference", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PreferencesController.prototype, "getPreference", null);
__decorate([
    (0, common_1.Patch)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PreferencesController.prototype, "updatePreference", null);
__decorate([
    (0, common_1.Delete)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PreferencesController.prototype, "deletePreference", null);
exports.PreferencesController = PreferencesController = __decorate([
    (0, common_1.Controller)('api/preferences'),
    __metadata("design:paramtypes", [preferences_service_1.PreferencesService])
], PreferencesController);
//# sourceMappingURL=preferences.controller.js.map