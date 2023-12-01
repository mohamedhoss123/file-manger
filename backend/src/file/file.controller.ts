import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, UseInterceptors, UsePipes, UploadedFile } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { ApiTags, ApiConsumes, ApiBody, ApiNotFoundResponse, ApiBadRequestResponse, ApiResponse } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { FileFilter } from './file.filter';
import { ZodValidationPipe } from 'nestjs-zod';


@ApiTags("File")
@Controller('file')
@UsePipes(ZodValidationPipe)
@UseFilters(FileFilter)
export class FileController {
  constructor(private readonly fileService: FileService) { }

  @Post()

  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: ["path", "file"],
      properties: {
        name: { type: 'string' },
        path: { type: 'string', },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async create(@Body() createFileDto: CreateFileDto, @UploadedFile() files: Express.Multer.File) {
    return await this.fileService.create(createFileDto, files);
  }

  @Get(':path')
  findOne(@Param('path') path: string) {
    return this.fileService.findOne(+path);
  }

  @Patch()
  async update(@Body() updateFileDto: UpdateFileDto) {
    return this.fileService.update(updateFileDto);
  }

  @Delete(':path')
  async remove(@Param('path') path: string) {
    return await this.fileService.remove(path);
  }
}
