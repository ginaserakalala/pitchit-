import React,{useContext} from 'react'

import {NavLink, Link} from 'react-router-dom'

import {CurrentUserContext} from '../contexts/currentUser'

import TagList from '../components/tagList'
import AddToFavorites from '../components/addToFavorites'
import SimpleImageSlider from "react-simple-image-slider";


const images = [
  { url: "assets/images/banner1.jpeg" },
  { url: "assets/images/banner1.jpeg" },
  // { url: "images/3.jpg" },
  // { url: "images/4.jpg" },
  // { url: "images/5.jpg" },
  // { url: "images/6.jpg" },
  // { url: "images/7.jpg" },
];



const Feed = ({articles}) => {
  const [currentUserState] = useContext(CurrentUserContext)

  return (

    <div>
{/*      
     {currentUserState.isLoggedIn && (

      <button className="nav-item">
      <NavLink to="/articles/new" className="nav-link">
      <i className="" />
      &nbsp; Create New Pitch
      </NavLink>
      </button>
     )} */}

      {articles.map((pitch, index) => (

          


        <div className="article-preview" key={index}>
          <div className="article-meta">
            <Link to={`/profiles/${pitch.author.username}`}>
              {/* <img src={article.author.image} alt="" /> */}
            </Link>
            <div className="info">
            <h5>John Doe{}</h5>
            <h5>Ceo{}</h5>
            <h5>XYZ Company{}</h5>


             {/* revisit */} <Link
                 to={`/profiles/${pitch.author.username}`}
                className="author"
              >

              
                {/* {article.author.username} */}
              </Link>
              
              {/* <span className="date pull-xs-right">{article.createdAt}</span> */}
            </div>

            <div className="pull-xs-right">
            <span className="date pull-xs-right">16:00 pm{}</span>
            <br/>
            <span className=" pull-xs-right">Spain{}</span>



              {/* <AddToFavorites
                isFavorited={article.favorited}
                favoritesCount={article.favoritesCount}
                articleSlug={article.slug}
              /> */}
            </div>



          </div>


          <div>
      <SimpleImageSlider
        width={826}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>

    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
    <button>The Idea</button>
    </div> 



    <Link to={`/articles/${pitch.slug}`} className="preview-link">


           {/* revisit */} <h1>{pitch.title}</h1>


            {/* <p>{article.description}</p> */}
          {/* <p>{article.description}</p> */}
          <p>The company details as part of pitch details. Short description, clickable from the back end{}</p>

            {/* <button className='margin:auto'>The Idea</button> */}
            <button >Details</button>
            <button className='pull-xs-right'>Message</button>
            {/* <TagList tags={article.tagList} /> */}
          </Link>

        </div>
      ))}
    </div>
  )
}

export default Feed
