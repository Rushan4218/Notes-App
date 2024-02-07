import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import { Home } from "./pages/Home";
import { RootLayout } from "./layout/RootLayout";
import { CreateNote } from "./pages/CreateNote";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="create-note" element={<CreateNote />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export { App };