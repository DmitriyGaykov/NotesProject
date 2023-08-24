import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesDbService } from './notes-db.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Note} from "../db/entities/note.entity";
import {NotesResolver} from "./notes.resolver";
import {_GraphQLModule} from "../graph-ql/graph-ql.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Note]),
        _GraphQLModule
    ],
    providers: [
        NotesResolver,
        NotesService,
        NotesDbService,
    ],
})
export class NotesModule {}
