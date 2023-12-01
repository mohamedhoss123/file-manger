import { ApiProperty } from "@nestjs/swagger";

export class FolderDto {
    @ApiProperty()
    folders:string[]
    @ApiProperty()
    files:string[]
}