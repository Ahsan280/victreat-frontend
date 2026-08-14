import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Providers from "./providers/Providers";
import Books from "./modules/books/Books";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
]);
function App() {
  return (
    <>
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </>
  );
}

export default App;
