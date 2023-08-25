import Note from "../../../db/models/note";
import {createSlice} from "@reduxjs/toolkit";
import {addNoteAction, getAllAction} from "./action";
import {addNoteFullfilled, clearNotesReducer, getAllFullfilled, setShowFormReducer} from "./reducers";

export interface NotesState {
    notes: Note[];
    showForm: boolean;
}

const initialState : NotesState = {
    notes: [],
    showForm: false
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setShowForm: setShowFormReducer,
        clearNotes: clearNotesReducer
    },
    extraReducers: builder => {
        builder
            .addCase(addNoteAction.fulfilled, addNoteFullfilled)
            .addCase(getAllAction.fulfilled, getAllFullfilled)
    }
})

const notes = notesSlice.reducer
export default notes

export const {
    setShowForm,
    clearNotes
} = notesSlice.actions