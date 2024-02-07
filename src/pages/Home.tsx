import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="m-8">
            <div>
                <div className="flex justify-between items-center">
                    <input
                        className="input-box"
                        type="input"
                        placeholder="Search"
                    />
                    <NavLink to="create-note">
                        <button className="btn-primary">Create</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export { Home };