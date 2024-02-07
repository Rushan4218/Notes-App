import { NavLink } from "react-router-dom";

const NoteForm = () => {
    return (
        <div className="m-8">
            <div className="flex flex-col gap-4">
                <input
                    placeholder="Title"
                    className="w-56 input-box"
                />
                <textarea
                    placeholder="Description"
                    className="input-box min-h-96"
                />
            </div>
            <div className="flex justify-end gap-4 mt-4">
                <NavLink to="..">
                    <button className="btn-secondary">Cancel</button>
                </NavLink>
                <NavLink to="..">
                    <button className="btn-primary">Save</button>
                </NavLink>
            </div>
        </div>
    )
}

export { NoteForm };