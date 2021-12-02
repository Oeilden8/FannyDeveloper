import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
