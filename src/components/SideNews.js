import React, { useContext } from "react"
import { NewsContext } from "../contexts/NewsContext"
import NewsArticles from "./NewsArticles"

function SideNews(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (

    <div className="all__news">
    {data
      ? data.articles.map((news) => (
          <NewsArticles data={news} key={news.url} />
        ))
      : "Loading"}
  </div>


  );
}

export default SideNews;