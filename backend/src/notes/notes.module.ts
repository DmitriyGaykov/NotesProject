import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesDbService } from './notes-db.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Note} from "../db/entities/note.entity";
import {NotesResolver} from "./notes.resolver";
import {APP_FILTER} from "@nestjs/core";
import {BadRequestToGraphQlFilter} from "../filters/bad-request-to-graph-ql/bad-request-to-graph-ql.filter";

@Module({
    imports: [
        TypeOrmModule.forFeature([Note]),
    ],
    providers: [
        NotesResolver,
        NotesService,
        NotesDbService,
        {
            provide: APP_FILTER,
            useClass: BadRequestToGraphQlFilter
        }
    ],
})
export class NotesModule {}
