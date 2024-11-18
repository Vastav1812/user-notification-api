import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  
  @Catch()
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
  
      const message =
        exception instanceof HttpException
          ? exception.getResponse()
          : 'Internal server error';
  
      response.status(status).json({
        success: false,
        statusCode: status,
        message: message,
        timestamp: new Date().toISOString(),
      });
    }
  }
  