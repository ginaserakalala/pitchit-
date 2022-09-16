import React, {useState, useEffect, useContext} from 'react'
import {Redirect} from 'react-router-dom'

import PitchForm from '../../components/PitchForm'
import useFetch from '../../hooks/useFetch'
import {CurrentUserContext} from '../../contexts/currentUser'

const CreatePitch = () => {
  const apiUrl2 = '/echo'
  const apiUrl = '/pitches'
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
  const [{response, error}, doFetch] = useFetch(apiUrl)
  const [currentUserState] = useContext(CurrentUserContext)

  const onSubmit = pitch => {
    doFetch({
      method: 'post',
      data: {
        pitch
      }
    })
  }
  const initialValues = {
    title: '',
    image:'',
    description: '',
    body: '',
    tagList: ''
  }

  useEffect(() => {
    if (!response) {
      return
    }
    setIsSuccessfullSubmit(true)
  }, [response])

  if (currentUserState.isLoggedIn === null) {
    return null
  }

  if (isSuccessfullSubmit || currentUserState.isLoggedIn === false) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <PitchForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        errors={(error && error.errors) || {}}
      />
    </div>
  )
}

export default CreatePitch
