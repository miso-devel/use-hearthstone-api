import "./App.css";
import { Back } from "./components/Back/Back";
import { Cards } from "./components/Card/Cards";
import { Header } from "./components/Layouts/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="App bg-indigo-600">
        <Routes>
          <Route index element={<Cards />} />
          <Route path="cards" element={<Cards />} />
          <Route path="back" element={<Back />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
