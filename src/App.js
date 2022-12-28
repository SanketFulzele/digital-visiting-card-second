import DigitalCard from "./DigitalCard/DigitalCard";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SecondCard from "./SecondCard/SecondCard";
import ThirdCard from "./ThirdCard/ThirdCard";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DigitalCard />} />
        <Route path="/ruby/:id" element={<SecondCard />} />
        <Route path="/sapphire/:id" element={<ThirdCard />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
