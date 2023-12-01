import { Injectable } from '@nestjs/common';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import * as fs from "fs-extra"
import * as path from "path"
import { FolderDto } from './dto/folder.dto';
const fsRoot = path.join(process.cwd(), "fs-root")
const makePath = (...paths: string[]) => {
  return path.join(fsRoot, ...paths)
}
@Injectable()
export class FolderService {
  async create(paylod: CreateFolderDto) {
    let data = await fs.mkdir(path.join(fsRoot, paylod.path, paylod.name))
    return data
  }

  private async getFoldersAndFiles(path: string): Promise<FolderDto> {
    const folders = [];
    const files = [];

    const entries = await fs.readdir(path);
    for (const entry of entries) {
      const fullPath = path + '/' + entry;
      const stats = await fs.stat(fullPath);

      if (stats.isDirectory()) {
        if (fullPath.includes('fs-root')) {
          const relativePath = fullPath.slice(path.length + 1);
          folders.push(relativePath);
        }
      } else {
        if (fullPath.includes('fs-root')) {
          const relativePath = fullPath.slice(path.length + 1);
          files.push(relativePath);
        }
      }
    }

    let result: FolderDto = { folders, files }
    return result;
  }

  async findAll(path: string): Promise<FolderDto> {
    let data = this.getFoldersAndFiles(makePath(...path.split("/")))
    return data;
  }


  update(updateFolderDto: UpdateFolderDto) {
    let { name, newName, path } = updateFolderDto
    return fs.rename(makePath(path, name), makePath(path, newName), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Folder renamed successfully');
      }
    });;
  }

  async remove(paylod: CreateFolderDto) {
    let data = await fs.rmdir(path.join(fsRoot, paylod.path, paylod.name))
    return data;
  }
}
