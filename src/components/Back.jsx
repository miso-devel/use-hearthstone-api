import { useState, useEffect } from "react";
import axios from "axios";
import back from "../json-data/back.json";
import image from "../image/back1.png";
const APIKEY = process.env.React_APP_CARD_API_KEY;
export const Back = () => {
  const [backs, setBacks] = useState([]);
  const other = false;
  useEffect(() => {
    const other = false;
    if (other) {
      axios
        .get(
          `https://us.api.blizzard.com/hearthstone/cardbacks/153-pizza-stone?locale=ja_JP&access_token=${APIKEY}`
        )
        .then((res) => {
          setBacks(res.data);
        });
    } else {
      setBacks(back);
    }
  }, []);

  return (
    <div className="m-10">
      <h1 className="text-center font-bold">CARD BACK</h1>
      <div className="res_card grid grid-cols-4">
        <div className="grid grid-cols-1 p-5">
          <p className="py-5 text-center">{other ? backs.name : back.name}</p>
          <p className="py-3">{other ? backs.text : back.text}</p>
          <img src={other ? backs.image : image} alt="" />
        </div>
      </div>
    </div>
  );
};
