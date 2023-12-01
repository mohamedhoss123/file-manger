import { ApiProperty } from '@nestjs/swagger';
import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'


export const CreateFileSchema = z.object({
    name:z.string().optional().describe("the name of the file you want to add"),
    path:z.string().describe("path to save the file")
})

export class CreateFileDto extends createZodDto(CreateFileSchema){}
