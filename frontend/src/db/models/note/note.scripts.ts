import Note from "./";

export const equal = (note1 : Note, note2 : Note) : boolean => {
    return (
        note1.id === note2.id &&
        note1.name === note2.name &&
        note1.context === note2.context &&
        note1.publishDate === note2.publishDate
    )
}

