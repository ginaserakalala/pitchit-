import React from "react";

function NewsArticles({ data }) {
  return (
    <div className="news">
    <br />
{/* 
    <a href={item.url} target="_blank" rel="noopener noreferrer">

<Meta title={item.title} />

</a> */}



     <a href={data.url}><h6 className="text-xs-left">{data.title}  </h6> </a> 


      {/* <p className="news__desc">{data.description}</p> */}
      {/* <span style={{marginRight:10, color:'#3786ac'}} className="news__author">{data.author}</span>  */}
      {/* <span  className="news__published">{data.publishedAt}</span> */}
      {/* <span className="news__source">{data.source.name}</span> */}


    </div>
  );
}

export default NewsArticles










// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
  
//   body {
//     font-family: inter;
//     width: 80%;
//     margin: 0 auto;
//     background: rgb(251, 254, 255);
//   }
  
//   .all__news {
//     margin: 50px auto;
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     grid-gap: 20px;
//   }
  
//   .news {
//     max-width: 500px;
//     padding: 30px;
//     border: 1px solid lightgray;
//     border-radius: 5px;
//   }
  
//   .news__title {
//     padding-bottom: 10px;
//     border-bottom: 1px solid lightgray;
//   }
  
//   .head__text {
//     margin-top: 30px;
//   }
  
//   .news__desc {
//     padding-top: 10px;
//     line-height: 25px;
//     font-size: 14px;
//     padding-bottom: 10px;
//   }
  
//   .news__author {
//     margin-right: 10px;
//     color: purple;
//   }
  
//   .news__published {
//     margin-right: 10px;
//   }
  
//   .news__source,
//   .news__published {
//     display: inline-block;
//     margin-top: 10px;
//     color: rgb(122, 122, 122);
//   }