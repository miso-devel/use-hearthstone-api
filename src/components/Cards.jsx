import { useState, useEffect } from "react";
import axios from "axios";
const APIKEY = process.env.React_APP_CARD2_BACK_API_KEY;
export const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://us.api.blizzard.com/hearthstone/cards?locale=en_US&set=rise-of-shadows&class=mage&manaCost=10&attack=4&health=10&collectible=1&rarity=legendary&type=minion&minionType=dragon&keyword=battlecry&textFilter=kalecgos&gameMode=constructed&page=1&pageSize=5&sort=name%3Aasc&order (deprecated)=asc&access_token=${APIKEY}`
      )
      .then((res) => {
        setCards(res.data);
      });
  }, []);
  console.log(cards);
  return (
    <div className="m-10">
      <h1 className="text-center font-bold">CARD</h1>
      <div className="res_card grid grid-cols-4">
        <div className="grid grid-cols-1 p-5">
          <p className="py-5 text-center"></p>
          <p className="py-3"></p>
        </div>
      </div>
    </div>
  );
};
