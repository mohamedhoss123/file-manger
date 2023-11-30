import { PartialType } from '@nestjs/swagger'
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'
import {  CreateFolderSchema } from './create-folder.dto'




export const UpdateFolderSchema = z.object({
    newName:z.string().describe("hellow")
}).extend(CreateFolderSchema)

export class UpdateFolderDto extends createZodDto(UpdateFolderSchema){}

