import { useState, useEffect } from "react";
import axios from "axios";
import jsonCard from "../json-data/cards.json";
const APIKEY = process.env.React_APP_CARD_API_KEY;
export const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://us.api.blizzard.com/hearthstone/cards?locale=ja_JP&manaCost=3&collectible=1&gameMode=constructed&order (deprecated)=desc&access_token=${APIKEY}`
      )
      .then((res) => {
        console.log(res.data.cards);
        setCards(res.data.cards);
      });
  }, []);
  console.log(cards[0]);
  return (
    <div className="m-10">
      <h1 className="text-center font-bold">CARD</h1>
      <div className="res_card grid grid-cols-4">
        {cards.map((c) => {
          return (
            <div className="grid grid-cols-1 p-5">
              <p className="py-5 text-center">{c.id}</p>
              <p className="py-3"></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
