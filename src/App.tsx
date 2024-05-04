import { RouterProvider } from "react-router";
import { Router } from "./router/Router";
import { GlobalProvider } from "./global/GlobalProvider";

function App() {
  return (
    <div>
      <GlobalProvider>
        <RouterProvider router={Router} />
      </GlobalProvider>
    </div>
  );
}

export default App;
