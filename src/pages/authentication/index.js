import React, {useState, useEffect, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
import useLocalStorage from '../../hooks/useLocalStorage'
import {CurrentUserContext} from '../../contexts/currentUser'
import BackendErrorMessages from '../../components/backendErrorMessages'

const Authentication = props => {
  const isLogin = props.match.path === '/login'
  const pageTitle = isLogin ? 'Welcome Back. ' : 'Join PitchIT.'
  const buttonTitle = isLogin ? 'Sign In': 'Sign Up'
  const descriptionLink = isLogin ? '/register' : '/login'
  const descriptionText = isLogin ? 'Create One' : 'Sign In'
  const descriptionTextNon = isLogin ? ' “Sign In” ': ' "Sign Up" '
  const descriptionNda= isLogin ? 'Non Disclosure Agreement':'Non Disclosure Agreement'
  const selectMember = isLogin ? '' : 'Choose type of user'
  const apiUrl = isLogin ? '/users/login' : '/users'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const[userRole, setUserRole]  = useState('')

  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false)
  const [{isLoading, response, error}, doFetch] = useFetch(apiUrl)
  const [, setToken] = useLocalStorage('token')
  const [, dispatch] = useContext(CurrentUserContext)


  const [usertype, setUserType] = React.useState('business');
  
  const handleChange = (event) => {
     setUserType(event.target.value)
   }
 
   const resetRadioState = () => {
     setUserType('');
   }
   

  const handleSubmit = event => {
    event.preventDefault()

    const user = isLogin ? {email, password} : {email, password, username}


    doFetch({
      method: 'post',
      data: {
        user
      }
    })
    console.log('values', email, password)
  }

  useEffect(() => {
    if (!response) {
      return
    }
    console.log('response', response)
    setToken(response.user.token)
    setIsSuccessfulSubmit(true)
    dispatch({type: 'SET_AUTHORIZED', payload: response.user})
  }, [response, setToken, dispatch])

  if (isSuccessfulSubmit) {
    return <Redirect to="/" />
  }





  

  

  

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{pageTitle}</h1>
          
            {error && <BackendErrorMessages backendErrors={error.errors} />}
            <form onSubmit={handleSubmit}>
              <fieldset>
                {!isLogin && (
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </fieldset>
                )}
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </fieldset>

                {/* <p className="text-xs-center">
             No account?<Link to={descriptionLink}>Create one{descriptionText}</Link>
            </p> */}
            <p className="text-xs-center">
             No Account?<Link to={descriptionLink}>{descriptionText}</Link>
            </p>

            <p className="text-xs-center">
            Click <Link to={descriptionLink}>{descriptionTextNon}</Link> to agree to PitchIT's <Link to={descriptionLink}>{descriptionNda}</Link> and acknowledge that PitchIT's Privacy Policy applies to you
            </p>

       

{/*             
          <form>
            <p className='text-xs-center'>Choose the type of user:
        <div className="radio text-xs-center">
          <label className='radio-inline'>
            <input type="radio" value="business" checked={true}  />
            Business
          </label>
          <label className='radio-inline'>
            <input type="radio" value="investor" />
            Investor
          </label>

          </div>
        
        </p>

      </form> */}







{!isLogin && (
      <form>
      <p className='text-xs-center'>Type of user</p>
      <div className='text-xs-center'>
        <label className='radio-inline'>
        <input
          type="radio"
          value="business"
          checked={usertype === 'business'}                   
          
          // onChange={e => setUserRole(e.target.value)}
          onChange={handleChange}
        /> Business
        </label>
      
        <label className='radio-inline'>
        <input
          type="radio"
          value="investor"
          checked={usertype === 'investor'}
          
          onChange={handleChange}
        /> Investor
        </label>
      </div>
      {/* <div>
        <button
          type="reset"
          onClick={resetRadioState}
        />
      </div> */}
      </form>
)}















                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
                <button
                  disabled={isLoading}
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  {buttonTitle}
                </button>
                </div>

              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}



export default Authentication
