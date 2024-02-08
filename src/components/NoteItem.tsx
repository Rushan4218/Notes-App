import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../redux/store";


type NoteItemProps = {
    id: string,
    title: string,
}


const NoteItem: React.FC<NoteItemProps> = ({ id, title }) => {


    const value: string = useSelector((state: RootState) => state.userInput.value);
    return (
        <>
            {
                title.toLowerCase().includes(value.toLowerCase()) && (
                    <NavLink to={`/notes/${id}`}
                        className="bg-green-200 min-h-24 p-4 flex items-center justify-center text-green-950 rounded hover:cursor-pointer hover:bg-green-300 active:scale-90 duration-300"
                    >
                        <h1>{title}</h1>
                    </NavLink>
                )
            }
        </>
    )
}

export { NoteItem };