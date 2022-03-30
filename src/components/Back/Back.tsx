import React, { useState, useEffect } from "react";
import axios from "axios";
import { JsonBack } from "../../data/back";

const APIKEY = process.env.React_APP_CARD_API_KEY;
interface JsonBackType {
  id: number;
  text: string;
  name: string;
  image: any;
}
const initial = {
  id: 0,
  text: "initial text",
  name: "initial name",
  image: "a",
};
export const Back = () => {
  const [backs, setBacks] = useState<JsonBackType>(initial);
  useEffect(() => {
    const isActiveAPI: boolean = false;
    if (isActiveAPI) {
      axios
        .get(
          `https://us.api.blizzard.com/hearthstone/cardbacks/153-pizza-stone?locale=ja_JP&access_token=${APIKEY}`
        )
        .then((res: any) => {
          setBacks(res.data);
        });
    } else {
      setBacks(JsonBack);
    }
  }, []);

  return (
    <div className="">
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
