import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header w-full bg-indigo-800 shadow-2xl text-white">
      <h1 className=" py-10 text-center text-4xl">
        HEARTH STONE CARD SEARCHER
      </h1>
      <div className="text-center">
        <Link className="mx-5 to_card" to="cards">
          cards
        </Link>
        <Link className="mx-5 to_back" to="back">
          back
        </Link>
      </div>
    </div>
  );
};
