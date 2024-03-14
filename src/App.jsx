import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about" className="bg-red-900">
          About Us
        </Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
