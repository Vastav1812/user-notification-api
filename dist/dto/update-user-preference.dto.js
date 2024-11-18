"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserPreferenceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_preference_dto_1 = require("./create-user-preference.dto");
class UpdateUserPreferenceDto extends (0, mapped_types_1.PartialType)(create_user_preference_dto_1.CreateUserPreferenceDto) {
}
exports.UpdateUserPreferenceDto = UpdateUserPreferenceDto;
//# sourceMappingURL=update-user-preference.dto.js.map