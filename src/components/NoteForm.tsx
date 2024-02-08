import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { RootState } from "../redux/store";
import { 
    addToList, 
    deleteFromList, 
    setIsNewNote, 
    setViewing, 
    updateNote
} from "../redux/notesSlice";


type NoteFormType = {
    nId: string,
    curTitle: string,
    curDescription: string
}

const NoteForm: React.FC<NoteFormType> = ({ nId, curTitle, curDescription }) => {

    const [title, setTitle] = useState<string>(curTitle);
    const [description, setDescription] = useState<string>(curDescription);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    const notes = useSelector((state: RootState) => state.notes);

    const dispatch = useDispatch();

    const handleSave = () => {

        if (!title) {
            alert("Title cannot be empty!!");
            return;
        }

        let id;
        if (notes.isNewNote) {
            id = nanoid();
            dispatch(addToList({ id, title, description }));
        } else {
            id = nId;
            dispatch(updateNote({ id, title, description }));
        }
        dispatch(setIsNewNote(false));
        dispatch(setViewing(false));
    }

    const [boolValue, setBoolValue] = useState<boolean>(true);

    const handleEditClicked = () => {
        setBoolValue(prevValue => !prevValue);
    }   

    const handleCancelClick = () => {
        dispatch(setIsNewNote(false));
        dispatch(setViewing(false));
    }
    const handleDelete = () => {
        dispatch(deleteFromList(nId));
    }

    

    return (
        <form className="m-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
                <div className="flex">
                    <input
                        placeholder="Title"
                        className="w-56 input-box"
                        onChange={handleTitleChange}
                        value={title}
                        readOnly={notes.isReadOnly! && boolValue}
                    />
                    {
                        notes.viewing && (
                            <div className="flex gap-4 ml-auto">
                                <button className="btn-primary" onClick={handleEditClicked}>{notes.isReadOnly && boolValue ? "Edit" : "Ok"}</button>
                                <NavLink to=".."><button onClick={handleDelete}className="btn-danger">Delete</button></NavLink>
                                <NavLink to=".."><button className="btn-secondary">Back</button></NavLink>
                            </div>
                        )
                    }
                </div>
                <textarea
                    placeholder="Description"
                    className="input-box min-h-96"
                    onChange={handleTextAreaChange}
                    value={description}
                    readOnly={notes.isReadOnly! && boolValue}
                />
            </div>
            <div className="flex justify-end gap-4 mt-4">
                <NavLink to="..">
                    <button type="button" className="btn-secondary" onClick={handleCancelClick}>Cancel</button>
                </NavLink>

                {
                    !title ? (
                        <button
                            type="submit"
                            onClick={handleSave}
                            className="btn-primary"
                        >Save</button>
                    ) : (
                        <NavLink to="..">
                            <button
                                type="submit"
                                onClick={handleSave}
                                className="btn-primary"
                            >Save</button>
                        </NavLink>
                    )
                }

            </div>
        </form>
    )
}

export { NoteForm };