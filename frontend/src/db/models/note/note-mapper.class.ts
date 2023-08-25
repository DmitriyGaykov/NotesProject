import IMapper from "../../../interfaces/IMapper";
import Note from "./";

export class NoteMapper implements IMapper<Note | Note[]> {
    map(obj: any): Note | Note[]  {
        if(Array.isArray(obj)) {
            return obj.map(el => this.map(el)) as Note[]
        }

        const note : Note = {}

        const { id, name, context, publishDate } = obj;

        if(id) {
            note['id'] = Number(id)
        }
        if(name) {
            note['name'] = name
        }
        if(context) {
            note['context'] = context
        }
        if(publishDate) {
            note['publishDate'] = new Date(publishDate)
        }

        return note;
    }
}