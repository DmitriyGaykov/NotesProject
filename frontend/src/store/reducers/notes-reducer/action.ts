import {createAsyncThunk} from "@reduxjs/toolkit";
import Note from "../../../db/models/note";
import {addNote, getAll} from "../../../services/api";


export const addNoteAction = createAsyncThunk(
    'notes/add-note',
    async (note: Note, { rejectWithValue }) => {
        try {
            return await addNote(note)
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)


export const getAllAction = createAsyncThunk(
    'notes/get-all',
    async (page?: number) : Promise<Note[]> => {
        try {
            const notes = await getAll(page)
            return notes || []
        } catch {
            return []
        }
    }
)