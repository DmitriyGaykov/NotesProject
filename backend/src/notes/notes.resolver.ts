import {Args, ID, Int, Mutation, Query, Resolver} from "@nestjs/graphql";
import {NotesService} from "./notes.service";
import {Note} from "../graph-ql/schemas/note.schema";
import {INote} from "./interfaces/note.interface";
import {UpdateDto} from "./dto/update.dto";
import {FindAllDto} from "./dto/find-all.dto";

@Resolver(of => Note)
export class NotesResolver {
    constructor(
       private readonly notesService : NotesService
    ) {}

    @Mutation(returns => Note)
    async add(@Args('name') name: string, @Args('context') context: string): Promise<Note> {
        return await this.notesService.add({
            name,
            context
        })
    }

    @Query(returns => [Note])
    async findAll(@Args() { page } : FindAllDto): Promise<INote[]> {
        return await this.notesService.findAll(page)
    }

    @Query(returns => Note)
    async findById(@Args('id', { type: () => Int}) id: number): Promise<INote> {
        return await this.notesService.findById(id)
    }

    @Mutation(returns => Note)
    async remove(@Args('id', { type: () => Int}) id: number): Promise<INote> {
        return await this.notesService.remove(id)
    }

    @Mutation(returns => Note)
    async update(@Args() {id, name, context} : UpdateDto): Promise<INote> {
        return this.notesService.update({
            id,
            name,
            context
        })
    }
}