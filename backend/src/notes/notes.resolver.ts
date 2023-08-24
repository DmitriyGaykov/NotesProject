import {Args, ID, Int, Mutation, Query, Resolver} from "@nestjs/graphql";
import {NotesService} from "./notes.service";
import {Note} from "../graph-ql/schemas/note.schema";
import {INote} from "./interfaces/note.interface";

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
    async findAll(): Promise<INote[]> {
        return await this.notesService.findAll()
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
    async update(
        @Args('id', { type: () => Int}) id: number,
        @Args('name', { nullable: true }) name: string,
        @Args('context', { nullable: true }) context: string
    ): Promise<INote> {
        return this.notesService.update({
            id,
            name,
            context
        })
    }
}