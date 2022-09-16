import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {CurrentUserContext} from '../contexts/currentUser'





const FeedToggler = ({tagName}) => {
  const [currentUserState] = useContext(CurrentUserContext)
  return (
    <div className="feed-toggler">

   <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
     {currentUserState.isLoggedIn && (
 
 <Link to="/questionnaire" className="nav-link">

<Button className='text-lg-center' style={{borderRadius:2, background:"#3786ac", color: "white", border: '1px solid grey', height: 30, marginBottom:10}} >
{/* <NavLink to="/pitches/new" className="nav-link"> */}
Create a new Pitch

</Button>
</Link>







)}
</div>


{/* <Link to="/" >

<Button>
Enquire Now
</Button>
</Link> */}

      <ul className="nav nav-pills outline-active">


         {/* {currentUserState.isLoggedIn && (
          <li className="nav-item">
            <NavLink to="/feed" className="nav-link">
              Your feed
            </NavLink>
          </li>
        )}  */}


        
        <li className="nav-item">
          <NavLink to="/" className="nav-link" exact>
            Trending on PitchIT
          </NavLink>
        </li>
        {tagName && (
          <li className="nav-item">
            <NavLink to={`/tags/${tagName}`} className="nav-link" exact>
              <i className="ion-pound"></i>
              {tagName}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  )
}

export default FeedToggler
