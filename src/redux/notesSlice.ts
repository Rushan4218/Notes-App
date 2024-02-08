import { createSlice } from "@reduxjs/toolkit";

export type notesListType = {
    id: string,
    title: string,
    description: string
}

const getNotesList: string | null = localStorage.getItem("NOTESLIST");
console.log(typeof(getNotesList));
console.log(getNotesList);
const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notesList: (getNotesList == null) ? [] : JSON.parse(getNotesList) as notesListType[],
        isNewNote: null as boolean | null,
        viewing: null as boolean | null,
        isReadOnly: null as boolean | null
    },
    reducers: {
        setIsNewNote: (state, action) => {
            state.isNewNote = action.payload;
        },
        setIsReadOnly: (state, action) => {
            state.isReadOnly = action.payload;
        },
        setViewing: (state, action) => {
            state.viewing = action.payload;
        },
        addToList: (state, action) => {
            state.notesList.push(action.payload);
        },
        updateNote: (state, action) => {
            const currNoteIndex = state.notesList.findIndex(note => note.id === action.payload.id);
            state.notesList[currNoteIndex] = { id: action.payload.id, title: action.payload.title, description: action.payload.description };
        },
        deleteFromList: (state, action) => {
            state.notesList = state.notesList.filter(note => note.id !== action.payload);
        }
    }
})


export const { setIsNewNote, setIsReadOnly, setViewing, addToList, updateNote, deleteFromList } = notesSlice.actions;
export default notesSlice.reducer;