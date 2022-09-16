import React, {useEffect, useContext, useState} from 'react'
import {Link, Redirect} from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
import Loading from '../../components/loading'
import ErrorMessage from '../../components/errorMessage'
import TagList from '../../components/tagList'
import {CurrentUserContext} from '../../contexts/currentUser'

const Pitch = props => {
  const slug = props.match.params.slug
  const apiUrl = `/articles/${slug}`
  const [
    {
      response: fetchArticleResponse,
      error: fetchArticleError,
      isLoading: fetchArticleIsLoading
    },
    doFetch
  ] = useFetch(apiUrl)
  const [{response: deleteArticleResponse}, doDeleteArticle] = useFetch(apiUrl)
  const [currentUserState] = useContext(CurrentUserContext)
  const [isSuccessfullDelete, setIsSuccessfullDelete] = useState(false)

  const isAuthor = () => {
    if (currentUserState.isLoggedIn === null || !fetchArticleResponse) {
      return false
    }

    return (
      currentUserState.currentUser.username ===
      fetchArticleResponse.pitch.author.username
    )
  }

  const deleteArticle = () => {
    doDeleteArticle({
      method: 'delete'
    })
  }

  useEffect(() => {
    doFetch()
  }, [doFetch])

  useEffect(() => {
    if (!deleteArticleResponse) {
      return
    }

    setIsSuccessfullDelete(true)
  }, [deleteArticleResponse])

  if (isSuccessfullDelete) {
    return <Redirect to="/" />
  }

  return (
    <div className="article-page">
      <div className="banner">
        {!fetchArticleIsLoading && fetchArticleResponse && (
          <div className="container">
            <h1>{fetchArticleResponse.pitch.title}</h1>
            <div className="article-meta">
              <Link
                to={`/profiles/${fetchArticleResponse.pitch.author.username}`}
              >
                <img src={fetchArticleResponse.pitch.author.image} alt="" />
              </Link>
              <div className="info">
                <Link
                  to={`/profiles/${fetchArticleResponse.pitch.author.username}`}
                >
                  {fetchArticleResponse.pitch.author.username}
                </Link>
                <span className="date">
                  {fetchArticleResponse.pitch.createdAt}
                </span>
              </div>
              {isAuthor() && (
                <span>
                  <Link
                    to={`/articles/${fetchArticleResponse.article.slug}/edit`}
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="ion-edit"></i>
                    Edit Pitch
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={deleteArticle}
                  >
                    <i className="ion-trash-a"></i>
                    Delete Pitch
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="container page">
        {fetchArticleIsLoading && <Loading />}
        {fetchArticleError && <ErrorMessage />}
        {!fetchArticleIsLoading && fetchArticleResponse && (
          <div className="row article-content">
            <div>
              <p>{fetchArticleResponse.pitch.body}</p>
            </div>
            <TagList tags={fetchArticleResponse.pitch.tagList} />
          </div>
        )}
        <hr />
      </div>
    </div>
  )
}

export default Pitch
