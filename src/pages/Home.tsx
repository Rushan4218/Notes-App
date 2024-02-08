import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { NoteItem } from "../components/NoteItem";
import { RootState } from "../redux/store";
import { updateInputValue } from "../redux/inputSlice";
import { useEffect } from "react";

const Home = () => {

    const noteList = useSelector((state: RootState) => state.notes.notesList);

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateInputValue(e.target.value));
    }
    const input = useSelector((state: RootState) => state.userInput.value);

    useEffect(() => {
        localStorage.setItem("NOTESLIST", JSON.stringify(noteList));
    },[noteList])

    return (
        <div className="m-8">
            <div className="flex justify-between items-center">
                <input
                    className="input-box"
                    type="input"
                    placeholder="Search"
                    value={input}
                    onChange={handleChange}
                />
                <NavLink to="create-note">
                    <button className="btn-primary">Create</button>
                </NavLink>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-16 text-4xl">
                {
                    noteList.map(item => {
                        return <NoteItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                        />
                    })
                }
            </div>

        </div>
    )
}

export { Home };