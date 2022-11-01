import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
import { MainPage } from "./pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
