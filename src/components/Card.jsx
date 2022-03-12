import { useState, useEffect } from "react";
import axios from "axios";
const APIKEY = process.env.React_APP_OPENWEATHERMAP_API_KEY;
export const Card = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://us.api.blizzard.com/hearthstone/cardbacks/155-pizza-stone?locale=ja_JP&access_token=${APIKEY}`
      )
      .then((res) => {
        setCards(res.data);
      });
  }, []);
  console.log(cards);
  return (
    <div className="res_card grid grid-cols-4 m-10">
      <div className="grid grid-cols-1 p-5">
        <p className="py-5 text-center">{cards.name}</p>
        <p className="py-3">{cards.text}</p>
        <img src={cards.image} alt="" />
      </div>
    </div>
  );
};
