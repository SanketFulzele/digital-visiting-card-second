import DigitalCard from "./DigitalCard/DigitalCard";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DigitalCard />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
