import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileModule } from './file/file.module';
import { FolderModule } from './folder/folder.module';
import * as fs from 'fs-extra';
import * as path from 'path';

@Module({
  imports: [FileModule, FolderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  implements OnModuleInit{
  onModuleInit() {
      fs.ensureDir(path.join(process.cwd(),"fs-root"))
  }
}
