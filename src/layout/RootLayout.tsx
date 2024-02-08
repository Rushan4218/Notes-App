import { Outlet } from "react-router-dom";
import logo from "../images/NotesAppLogo.png";

const RootLayout = () => {
    return (
        <div className="my-8 mx-auto max-w-2xl">
            <header className="flex items-center justify-center gap-2">
                <img
                    src={logo}
                    alt="LOGO"
                    className="h-16"
                />
                <h1 className="text-4xl font-bold text-green-500 text-shadow-white">Notes App</h1>
            </header>
            <Outlet />
        </div>
    )
}

export { RootLayout };