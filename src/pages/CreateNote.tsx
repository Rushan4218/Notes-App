import { NoteForm } from "../components/NoteForm";
import { useDispatch } from "react-redux";
import { setIsNewNote, setIsReadOnly, setViewing } from "../redux/notesSlice";

const CreateNote = () => {

    const dispatch = useDispatch();
    dispatch(setIsNewNote(true));
    dispatch(setIsReadOnly(false));
    dispatch(setViewing(false));
    const nId = "";
    const title = "";
    const description = "";
    return (
        <NoteForm nId={nId} curTitle={title} curDescription={description}/>
    )
}

export { CreateNote } 