// import React, {useEffect, useState} from 'react'

import React, { createContext, useEffect, useState } from "react"
import axios from "axios"
import {Link} from 'react-router-dom'

import useFetch from '../hooks/useFetch'
import ErrorMessage from '../components/errorMessage'
import Loading from '../components/loading'
import { NewsContextProvider } from "../contexts/NewsContext"
import SideNews from "./SideNews"



const PopularTags = () => {


  const [{response, isLoading, error}, doFetch] = useFetch('/tags')

  useEffect(() => {
    doFetch()
  }, [doFetch])

  if (isLoading || !response) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage />
  }

  return (
    <div className="sidebar" style={{width:350}}>
      {/* <p>Popular tags</p> */}

      <h2>Latest News</h2>

        {/* {response.tags.map(tag => (
          // <Link to={`/tags/${tag}`} className="tag-default tag-pill" key={tag}>
          //   {tag}
          // </Link>

                ))} */}



{/* <iframe src="https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=f0fed9307d354cc484c2d30b7717e79e" scrolling="no" frameborder="0" load="lazy" ></iframe> */}

{/* <iframe src='https://www.bloomberg.com/businessweek/embed'></iframe> */}


     <NewsContextProvider>
      <SideNews />
    </NewsContextProvider>
    </div>


  )
}

export default PopularTags
