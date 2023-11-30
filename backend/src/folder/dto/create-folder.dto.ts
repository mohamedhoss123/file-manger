import { createZodDto } from "nestjs-zod"
import { z } from "nestjs-zod/z"




export const CreateFolderSchema = {
    name: z.string().describe('a name for the new folder'),
    path: z.string().describe('path for dir witch folder will be created in'),
}

export class CreateFolderDto extends createZodDto(z.object(CreateFolderSchema)) { }