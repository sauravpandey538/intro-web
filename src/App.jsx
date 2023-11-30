import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Heading from "../Website/Heading";
import Hobbies from "../Website/Body/Hobbies";
import Drawerr from "../Website/Body/Drawer";
import Gallery from "../Website/Body/Gallery";
import Info from "../Website/Body/Info";
import Projects from "../Website/Body/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Heading />
        <Drawerr />
      </>
    ),
  },
  {
    path: "/hobbies",
    element: (
      <>
        <Heading />
        <Hobbies />
      </>
    ),
  },
  {
    path: "/gallery",
    element: (
      <>
        <Heading />
        <Gallery />
      </>
    ),
  },
  {
    path: "/circle",
    element: (
      <>
        <Heading />
        <Projects />
      </>
    ),
  },
  {
    path: "/information",
    element: (
      <>
        <Heading />
        <Info />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
