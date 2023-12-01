import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import * as fs from 'fs-extra';
import * as path from "path"

const fsRoot = path.join(process.cwd(), "fs-root")

const makePathToFsRoot = (...paths: string[]) => {
  return path.join(fsRoot, ...paths)
}
const cwd = (p: string) => path.join(process.cwd(), p)

@Injectable()
export class FileService {
  async create(paylod: CreateFileDto, file: Express.Multer.File) {
    await fs.move(cwd(file.path),makePathToFsRoot(paylod.path,paylod.name||file.originalname))
    return 'This action adds a new file';
  }

  findAll() {
    return `This action returns all file`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(updateFileDto: UpdateFileDto) {
    let { name, newName, path } = updateFileDto
    return fs.rename(makePathToFsRoot(path, name), makePathToFsRoot(path, newName), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Folder renamed successfully');
      }
    });;
  }

  async remove(path: string) {
    return await fs.unlink(makePathToFsRoot(...path.split("/")))
  }
}
