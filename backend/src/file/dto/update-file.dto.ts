import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'



export const UpdateFileSchema = z.object({
    newName:z.string(),
    name:z.string().describe("the name of the file you want to add"),
    path:z.string().describe("path to save the file")
})

export class UpdateFileDto extends createZodDto(UpdateFileSchema){}