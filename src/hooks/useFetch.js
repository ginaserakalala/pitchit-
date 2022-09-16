import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'

import useLocalStorage from '../hooks/useLocalStorage'

export default url => {
  const baseUrl = 'https://conduit.productionready.io/api'

  const baseUrl2 = ''




  // curl -X POST localhost:8080/api/v1/company/pitch -H "Content-Type:application/json" -d 
  // "{\"title\":\"Test Title\", \"companyRegistrationNumber\":\"abcdefg\", \"body\":\"test body\"}"



//   fetch("localhost:8080/api/v1/company/pitch", {
//   body: "{\"title\":\"Test Title\", \"companyRegistrationNumber\":\"abcdefg\", \"body\":\"test body\"}",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   },
//   method: "POST"
// })


  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})
  const [token] = useLocalStorage('token')

  const doFetch = useCallback((options = {}) => {
    setOptions(options)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    let skipGetResponseAfterDestroy = false
    if (!isLoading) {
      return
    }

    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : ''
        }
      }
    }

    axios(baseUrl + url, requestOptions)
      .then(res => {
        if (!skipGetResponseAfterDestroy) {
          setResponse(res.data)
          setIsLoading(false)
        }
      })
      .catch(error => {
        if (!skipGetResponseAfterDestroy) {
          setError(error.response.data)
          setIsLoading(false)
        }
      })




      // axios(baseUrl2 + url, requestOptions)
      // .then(res => {
      //   if (!skipGetResponseAfterDestroy) {
      //     setResponse(res.data)
      //     setIsLoading(false)
      //   }
      // })
      // .catch(error => {
      //   if (!skipGetResponseAfterDestroy) {
      //     setError(error.response.data)
      //     setIsLoading(false)
      //   }
      // })



      // axios({
      //   method: 'post',
      //   url: 'localhost:8080/api/v1/company/pitch',
      //   data: {


      //     title:"Test Title",
      //     companyRegistrationNumber:"abcdefg",
      //     body:"test body"
      //   }
      // });




      // axios(baseUrl2 + url, requestOptions)
      // .then(res => {
      //   if (!skipGetResponseAfterDestroy) {
      //     setResponse(res.data)
      //     setIsLoading(false)
      //   }
      // })
      // .catch(error => {
      //   if (!skipGetResponseAfterDestroy) {
      //     setError(error.response.data)
      //     setIsLoading(false)
      //   }
      // })


      
    return () => {
      skipGetResponseAfterDestroy = true
    }
  }, [isLoading, url, options, token])

  return [{isLoading, response, error}, doFetch]
}
