import "./App.css";
import { Back } from "./components/Back";
import { Cards } from "./components/Cards";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-indigo-600">
        <div className="header w-full bg-indigo-800 shadow-2xl text-white">
          <h1 className=" py-10 text-center text-4xl">
            HEARTH STONE CARD SEARCHER
          </h1>
          <div className="text-center">
            <Link className="mx-5" to="/">
              Home
            </Link>
            <Link className="mx-5" to="cards">
              cards
            </Link>
            <Link className="mx-5" to="back">
              back
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="cards" element={<Cards />} />

          <Route path="back" element={<Back />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
