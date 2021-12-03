import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import SkillCard from "./Components/SkillCard";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <SkillCard />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
