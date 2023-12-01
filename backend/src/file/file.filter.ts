import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import {Response} from "express"
@Catch(Error)
export class FileFilter<T> implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response :Response= ctx.getResponse<Response>();
    response.status(400).json({
      statusCode: 400,
      data : "file already exists"
    });
  }
}
