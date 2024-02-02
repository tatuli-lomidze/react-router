import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import router from "./router";
import { RouterProvider } from "react-router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(router)} />
    </div>
  );
}

export default App;
