import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { JsonCards } from "../data/cards";
import axios from "axios";
const APIKEY = process.env.React_APP_CARD_API_KEY;
export const Cards = () => {
    interface JsonCardType {
    cards: {
        name: string;
        attack: number;
        cardSetId: number;
        flavorText: string;
        health: number;
        id: number;
        text: string;
        image: any;
    }[];
    card_count: number;
    page: number;
}
    const initial = {
    cards: [{
        name:"a",
        attack: 0,
        cardSetId:0,
        flavorText: "a",
        health: 0,
        id:0,
        text:"a",
        image:"a"
    },{
        name:"a",
        attack: 0,
        cardSetId:0,
        flavorText: "a",
        health: 0,
        id:1,
        text:"a",
        image:"a"
    }],
    card_count:0,
    page:0
  }
  // setStateされるのは<>の型でのみ？？
  const [cards, setCards] = useState<JsonCardType>(initial);
  const [attack, setAttack] = useState<number>(1);
  const [health, setHealth] = useState<number>(2);
  const [types, setTypes] = useState<string>("minion");
  const url = useLocation().search;
  const query = new URLSearchParams(url);
  

  useEffect(() => {
    if (query.get("mockdata") === null) {
      axios
        .get(
          `https://us.api.blizzard.com/hearthstone/cards?locale=ja_JP&attack=${attack}&health=${health}&collectible=1&type=${types}&gameMode=constructed&page=1&pageSize=100&sort=name%3Aasc&order=asc&access_token=${APIKEY}`
        )
        .then((res) => {
          setCards(res.data);
        });
    } else {
      setCards(JsonCards);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attack, health, types]);

  const secCard = (paramsName:string, type:string, param:number|string, setParams:any) => {
    return (
      <div className="p-3">
        {paramsName}:
        <input
          className=" rounded-md text-center text-black"
          value={param}
          type={type}
          onChange={setParams}
          placeholder={paramsName}
          required
        />
      </div>
    );
  };

  return (
    <div className="grid grid-cols-7">
      <div className="text-center shadow-xl text-xl col-span-2">
        <div className="sticky top-0">
          <p className="py-10 text-2xl">検索フォーム</p>
          {secCard("攻撃力", "number", attack, (e:any) =>
            setAttack(e.target.value)
          )}
          {secCard("体力", "number", health, (e:any) => setHealth(e.target.value))}
          {secCard("種類", "text", types, (e:any) => setTypes(e.target.value))}
        </div>
      </div>

      <div className="res_card grid grid-cols-6 m-5 col-span-5">
        {(cards.cards).map((c:any) => {
          return (
            <div className="grid grid-cols-1 p-5" key={c.id}>
              <p className="py-5 text-center">{c.name}</p>
              <img src={c.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
