import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import styled from "styled-components"
import { NEWS_API_KEY } from "../../config/config";

import "antd/dist/antd.css";
















const StyledNews = styled.div ` 

text-align: center;
margin-left: 200px;
`;

// .App-logo {
//   height: 40vmin;
//   pointer-events: none;
// }

// @media (prefers-reduced-motion: no-preference) {
//   .App-logo {
//     animation: App-logo-spin infinite 20s linear;
//   }
// }

// .App-header {
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// }

// .App-link {
//   color: #61dafb;
// }

// @keyframes App-logo-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }




// import "./App.css";

const { Meta } = Card;

// npx create-react-app appname
// npm i antd
// npm i axios

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        `http://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${NEWS_API_KEY}`

        // `http://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=${NEWS_API_KEY}`

        //country=gb&category=business&
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log("news", news);

  return (
    <StyledNews>
          
      {news &&
        news.map((item, index) => {



          const dateToTime = date => date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          });
          
          const dateString = item.publishedAt ;
          const userOffset = new Date().getTimezoneOffset()*60*1000;
          const localDate = new Date(dateString);
          const utcDate = new Date(localDate.getTime() + userOffset);
          
          console.log(`${dateToTime(utcDate)} (${dateToTime(localDate)} Your Time)`);






          return (

            <Card 
              key={index}
              hoverable
              style={{ width: "70%", marginBottom : 25}}
              // <img src={article.urlToImage || 'default-path-of-the-image' } class="img-fluid"
              cover={<img alt="image" src={item.urlToImage || './assets/images/news.jpeg'} />}
            >
            <a href={item.url} target="_blank" rel="noopener noreferrer">

              <Meta title={item.title} />

              </a>

              <Meta author={item.author} content = {item.content} />


              <br />
              <div className="text-xs-left"> {dateToTime(utcDate)}</div>
             
              {/* <Meta title={item.title} description={item.content} /> */}


              {/*Revisit this phase 2 */}
              {/* <a href={article.url} class="thumbnail">
            <img src={article.urlToImage || 'default-path-of-the-image' } class="img-fluid" />
              </a> */}




                {/* <Button type="primary" style={{ marginTop: "10px" }}>
                  Read More
                </Button> */}




            </Card>
          );
        })}
    </StyledNews>
  );
}

export default News;




