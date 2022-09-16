import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NEWS_API_KEY } from "../config/config";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  // const apiKey = "";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${NEWS_API_KEY}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};