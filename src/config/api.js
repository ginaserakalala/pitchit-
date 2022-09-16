// export const API_DOMAIN = "https://newsapi.org/v2/top-headlines?country="
// export const API_KEY = ""
// export const endpointPath = (country, category, page, pageSize) => `${API_DOMAIN}${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;


import { NEWS_API_KEY } from "./config";

// export const getPitchArticles = async () => {
  
//     const response = await fetch(`https://newsapi.org/v2/top-headlines?category=business?sources=bloomberg?country=gb&apiKey=${NEWS_API_KEY}`

//     //  `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
//     );
//     const json = await response.json();
//     console.log(json);
//     return json;
  
// };


export const getPitchArticles = async topic => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();
    return json;
  };








// export const getBitcoinArticles = async () => {
//     const response = await fetch(
//       `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
//     );
//     const json = await response.json();
//     return json;
//   };