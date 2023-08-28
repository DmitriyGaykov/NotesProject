import {Args, ID, Int, Mutation, Query, Resolver} from "@nestjs/graphql";
import {NotesService} from "./notes.service";
import {Note} from "../graph-ql/schemas/note.schema";
import {INote} from "./interfaces/note.interface";
import {AddNoteInput} from "./inputs/add.input";
import {UpdateInput} from "./inputs/update.input";
import {RemoveInput} from "./inputs/remove.input";

@Resolver(of => Note)
export class NotesResolver {
    constructor(
       private readonly notesService : NotesService
    ) {}

    @Query(returns => [Note])
    async findAll(@Args('page', { type: () => Int, nullable: true }) page: number): Promise<INote[]> {
        return await this.notesService.findAll(page)
    }

    @Query(returns => Note)
    async findById(@Args('id', { type: () => Int }) id: number): Promise<INote> {
        return await this.notesService.findById(id)
    }


    @Mutation(returns => Note)
    async addNote(@Args('input') input : AddNoteInput): Promise<Note> {
        console.log('Hello')
        return await this.notesService.add({
            name: input.name,
            context: input.context
        })
    }

    @Mutation(returns => Note)
    async remove(@Args('input') { id } : RemoveInput): Promise<INote> {
        return await this.notesService.remove(id)
    }

    @Mutation(returns => Note)
    async update(@Args('input') { id, name, context } : UpdateInput): Promise<INote> {
        return this.notesService.update({
            id,
            name,
            context
        })
    }
}