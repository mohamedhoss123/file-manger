import { Module, OnModuleInit } from '@nestjs/common';

import { FileModule } from './file/file.module';
import { FolderModule } from './folder/folder.module';
import * as fs from 'fs-extra';
import * as path from 'path';

@Module({
  imports: [FileModule, FolderModule],
}) 
export class AppModule  implements OnModuleInit{
  onModuleInit() {
      fs.ensureDir(path.join(process.cwd(),"fs-root"))
  }
}
