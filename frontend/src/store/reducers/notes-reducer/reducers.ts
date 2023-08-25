import {NotesState} from "./index";
import {PayloadAction} from "@reduxjs/toolkit";
import Note, {noteMapper} from "../../../db/models/note";

export const setShowFormReducer = (state : NotesState, action : PayloadAction<boolean>) => {
    state.showForm = action.payload
}

export const clearNotesReducer = (state : NotesState) : void => {
    state.notes = []
}

export const addNoteFullfilled = (state : NotesState, action : PayloadAction<Note | undefined>) => {
    const note = noteMapper.map(action.payload) as Note

    if(note) {
        state.notes = [note, ...state.notes]
    }
}

export const getAllFullfilled = (state : NotesState, action : PayloadAction<Note[]>) => {
    state.notes = noteMapper.map(action.payload) as Note[]
}