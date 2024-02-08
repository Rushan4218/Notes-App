import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { NoteForm } from "../components/NoteForm";
import { setIsReadOnly, setViewing } from "../redux/notesSlice";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { notesListType } from "../redux/notesSlice";

const NoteDetails = () => {

    const { id } = useParams();

    const notes = useSelector((state: RootState) => state.notes);
    const thisNote: notesListType = notes.notesList.find(note => note.id === id)!;
    const dispatch = useDispatch();

    dispatch(setViewing(true));
    dispatch(setIsReadOnly(true));

    return (
        <div>
            <NoteForm nId={thisNote.id} curTitle={thisNote.title} curDescription={thisNote.description}/>
        </div>
    )
}

export { NoteDetails }