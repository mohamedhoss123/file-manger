import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { FolderService } from './folder.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { ApiTags } from "@nestjs/swagger"
import { ZodValidationPipe } from 'nestjs-zod';



@ApiTags("Folder")
@UsePipes(ZodValidationPipe)
@Controller('folder')
export class FolderController {
  constructor(private readonly folderService: FolderService) { }

  @Post()
  create(@Body() createFolderDto: CreateFolderDto) {
    return this.folderService.create(createFolderDto);
  }

  @Get(":path")
  findAll(@Param("path") path:string) {
    return this.folderService.findAll(path);
  }


  @Patch()
  update(@Body() updateFolderDto: UpdateFolderDto) {
    return this.folderService.update(updateFolderDto);
  }

  @Delete()
  remove(@Body() createFolderDto: CreateFolderDto) {
    return this.folderService.remove(createFolderDto);
  }
}
