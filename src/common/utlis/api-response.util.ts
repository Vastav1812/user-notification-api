export class ApiResponse {
    static success(data: any, message: string = 'Operation successful') {
      return {
        success: true,
        data,
        message,
        timestamp: new Date().toISOString(),
      };
    }
  
    static error(message: string, statusCode: number = 400) {
      return {
        success: false,
        statusCode,
        message,
        timestamp: new Date().toISOString(),
      };
    }
  }
  