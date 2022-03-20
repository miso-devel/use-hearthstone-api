import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { JsonCards } from "../data/cards";
import axios from "axios";
const APIKEY = process.env.React_APP_CARD_API_KEY;
export const Cards = () => {
  const [cards, setCards] = useState([]);
  const [attack, setAttack] = useState(1);
  const [health, setHealth] = useState(2);
  const [types, setTypes] = useState("minion");
  const url = useLocation().search;
  const query = new URLSearchParams(url);
  console.log(query.get("card1"));
  useEffect(() => {
    if (query.get("card") === null) {
      axios
        .get(
          `https://us.api.blizzard.com/hearthstone/cards?locale=ja_JP&attack=${attack}&health=${health}&collectible=1&type=${types}&gameMode=constructed&page=1&pageSize=100&sort=name%3Aasc&order (deprecated)=asc&access_token=${APIKEY}`
        )
        .then((res) => {
          setCards(res.data.cards);
        });
    } else {
      console.log("nullではない");
      setCards(JsonCards.cards);
    }
  }, [attack, health, types]);
  console.log(`攻撃力：${attack}  体力：${health}  種類：${types}`);

  return (
    <div className="grid grid-cols-7">
      <div className="text-center shadow-xl text-xl col-span-2">
        <div className="sticky top-0">
          <p className="py-10 text-2xl">検索フォーム</p>
          <div className="p-3">
            攻撃力：
            <input
              className=" rounded-md text-center text-black"
              value={attack}
              type="number"
              onChange={(e) => setAttack(e.target.value)}
              placeholder="攻撃力"
              required
            />
          </div>
          <div className="p-3">
            体力：
            <input
              className=" rounded-md text-center text-black"
              value={health}
              type="number"
              onChange={(e) => setHealth(e.target.value)}
              placeholder="体力"
              required
            />
          </div>
          <div className="p-3">
            種類：
            <input
              className=" rounded-md text-center text-black"
              value={types}
              type="text"
              onChange={(e) => setTypes(e.target.value)}
              placeholder="種類"
              required
            />
          </div>
        </div>
      </div>

      <div className="res_card grid grid-cols-6 m-5 col-span-5">
        {cards.map((c) => {
          return (
            <div className="grid grid-cols-1 p-5" key={c.id}>
              <p className="py-5 text-center">{c.name}</p>
              <img src={c.image} alt="" />
              <p className="py-3"></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
