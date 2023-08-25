import Note from "../db/models/note";
import axios, {AxiosResponse} from "axios";
import {createAddMutation, createGetAllQuery} from "../db/models/note/note.scripts";
import {IQuery} from "./api.interfaces";

export const postQuery = async (query : IQuery) : Promise<AxiosResponse> => {
    return axios.post('/graphql', query)
}

export const addNote = async (note : Note) : Promise<Note> => {
    try {
        const mutation = createAddMutation(note)
        const res = await postQuery(mutation)
        return res.data.add as Note
    } catch (e) {
        throw e
    }
}

export const getAll = async (page?: number) : Promise<Note[] | undefined> => {
    try {
        const getAllQuery = createGetAllQuery(page)
        const response = await postQuery(getAllQuery)
        return response?.data?.data?.findAll as Note[] || []
    } catch {
        return []
    }
}

