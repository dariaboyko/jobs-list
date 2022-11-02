import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
import { MainPage } from "./pages/MainPage";
import { JobDetailsPage } from "./pages/JobDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  { path: "/:id", element: <JobDetailsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
