import "./App.css";
import { Back } from "./components/Back";
import { Cards } from "./components/Cards";

function App() {
  return (
    <div className="App bg-indigo-600">
      <div className="header w-full bg-indigo-800 shadow-2xl text-white">
        <h1 className=" py-10 text-center text-4xl">
          HEARTH STONE CARD SEARCHER
        </h1>
      </div>
      <div className="my-20 text-white">
        <Cards />
      </div>

      <Back />
    </div>
  );
}

export default App;
