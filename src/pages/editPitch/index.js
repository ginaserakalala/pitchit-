import React, {useState, useEffect, useContext} from 'react'
import {Redirect} from 'react-router-dom'

import ArticleForm from '../../components/PitchForm'
import useFetch from '../../hooks/useFetch'
import {CurrentUserContext} from '../../contexts/currentUser'

const EditPitch = ({match}) => {
  const slug = match.params.slug
  const apiUrl = `/pitches/${slug}`
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
  const [
    {response: updateArticleResponse, error: updateArticleError},
    doUpdateArticle
  ] = useFetch(apiUrl)
  const [{response: fetchArticleResponse}, doFetchArticle] = useFetch(apiUrl)
  const [currentUserState] = useContext(CurrentUserContext)
  const [initialValues, setInitialValues] = useState(null)

  const onSubmit = pitch => {
    doUpdateArticle({
      method: 'put',
      data: {
        pitch
      }
    })
  }

  useEffect(() => {
    doFetchArticle()
  }, [doFetchArticle])

  useEffect(() => {
    if (!fetchArticleResponse) {
      return
    }

    setInitialValues({
      title: fetchArticleResponse.article.title,
      description: fetchArticleResponse.article.description,
      body: fetchArticleResponse.article.body,
      tagList: fetchArticleResponse.article.tagList.join(' ')
    })
  }, [fetchArticleResponse])

  useEffect(() => {
    if (!updateArticleResponse) {
      return
    }
    setIsSuccessfullSubmit(true)
  }, [updateArticleResponse])

  if (currentUserState.isLoggedIn === null) {
    return null
  }

  if (currentUserState.isLoggedIn === false) {
    return <Redirect to="/" />
  }

  if (isSuccessfullSubmit) {
    return <Redirect to={`/pitches/${slug}`} />
  }

  return (
    <div>
      <ArticleForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        errors={(updateArticleError && updateArticleError.errors) || {}}
      />
    </div>
  )
}

export default EditPitch
