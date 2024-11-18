export declare class ApiResponse {
    static success(data: any, message?: string): {
        success: boolean;
        data: any;
        message: string;
        timestamp: string;
    };
    static error(message: string, statusCode?: number): {
        success: boolean;
        statusCode: number;
        message: string;
        timestamp: string;
    };
}
