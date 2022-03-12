import { useState, useEffect } from "react";
import axios from "axios";
const APIKEY = process.env.React_APP_CARD_BACK_API_KEY;
export const Back = () => {
  const [backs, setBacks] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://us.api.blizzard.com/hearthstone/cardbacks/155-pizza-stone?locale=ja_JP&access_token=${APIKEY}`
      )
      .then((res) => {
        setBacks(res.data);
      });
  }, []);
  console.log(backs);
  return (
    <div className="m-10">
      <h1 className="text-center font-bold">CARD BACK</h1>
      <div className="res_card grid grid-cols-4">
        <div className="grid grid-cols-1 p-5">
          <p className="py-5 text-center">{backs.name}</p>
          <p className="py-3">{backs.text}</p>
          <img src={backs.image} alt="" />
        </div>
      </div>
    </div>
  );
};
