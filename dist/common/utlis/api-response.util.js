"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    static success(data, message = 'Operation successful') {
        return {
            success: true,
            data,
            message,
            timestamp: new Date().toISOString(),
        };
    }
    static error(message, statusCode = 400) {
        return {
            success: false,
            statusCode,
            message,
            timestamp: new Date().toISOString(),
        };
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=api-response.util.js.map