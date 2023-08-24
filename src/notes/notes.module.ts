import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesDbService } from './notes-db.service';
import { NotesController } from './notes.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Note} from "../db/entities/note.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Note])],
    providers: [
      NotesService,
      NotesDbService
    ],
    controllers: [NotesController]
})
export class NotesModule {}
