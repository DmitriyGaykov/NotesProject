import Note from "./";
import {IQuery} from "../../../services/api.interfaces";

export const equal = (note1 : Note, note2 : Note) : boolean => {
    return (
        note1.id === note2.id &&
        note1.name === note2.name &&
        note1.context === note2.context &&
        note1.publishDate === note2.publishDate
    )
}

export const createAddMutation = ({name, context} : Note) : IQuery => {
    const query = `
        mutation {
            add(name: "${name}", context: "${context}") {
                id,
                name,
                context,
                publishDate
            }
        }
    `

    return { query }
}

export const createGetAllQuery = (page?: number) : IQuery => {
    return {
        query: `
        query {
            findAll ${ page === undefined  || `(page: ${page})` } {
                id
                name
                context
                publishDate
            }
        }
        `
    }
}