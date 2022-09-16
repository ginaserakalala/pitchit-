import React, {useContext, useState,Fragment} from 'react'
import {NavLink, Link} from 'react-router-dom'

import List from "./SearchBox";

import {CurrentUserContext} from '../contexts/currentUser'
import Routes from '../routes'
import Membership from './membership'
import SearchBox from './SearchBox'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'
import BellIcon from 'react-bell-icon';
import { Dropdown, Image , Icon, Container} from 'semantic-ui-react'
import { Badge } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import { NotificationsActive, Settings } from '@material-ui/icons';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Button, Collapse } from 'reactstrap';




const styles = {
  avatar: {
    margin: 2,
    height: 24,
    width:24
  }
};

// const trigger = <Image avatar src="ine.jpeg" />

// const avatar = [
//   { key: 'user', text: 'Account', icon: 'user' },
//   { key: 'settings', text: 'Settings', icon: 'settings' },
//   { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
// ]


// const trigger = <Image avatar src={user.photoURL} />;

// const trigger = <Image avatar src={currentUser.image} />;






const Topbar = (props) => {

  const [collapse, setCollapse] = useState(true);
  const toggle = () => setCollapse(!Collapse);
  const { classes } = props;


  const [expanded, setExpanded] = useState(false)

  const setToggle = () => {
      console.log('toggle');
      setExpanded(true)
  }




  const [myOptions, setMyOptions] = useState([])
  

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };


  // const getDataFromAPI = () => {
  //   console.log("Options Fetched from API")
  
  //   fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
  //     return response.json()
  //   }).then((res) => {
  //     console.log(res.data)
  //     for (var i = 0; i < res.data.length; i++) {
  //       myOptions.push(res.data[i].employee_name)
  //     }
  //     setMyOptions(myOptions)
  //   })
  // }


  


  const [currentUserState] = useContext(CurrentUserContext)
  const userImage =
    (currentUserState.isLoggedIn && currentUserState.currentUser.image) ||

    //  'https://static.productionready.io/images/smiley-cyrus.jpg'


    
    'index.jpg'


    
  return (
    // <nav className="navbar navbar-light">
    <Navbar bg="dark" expand="lg">
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          

       <Link to="/" className="navbar-brand">
          PitchIT
        </Link>
      <div className="container">

      <ul className="nav navbar-nav pull-xs-right">
{/* 
      <div className='nav-item' style={{ display:'flex',justifyContent:'center', alignItems:'center' }}>
      <Autocomplete
        style={{ width: 500,height: 5}}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div> */}

       
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              Home
            </NavLink>
          </li>
      

        


        

          {currentUserState.isLoggedIn && (
            
            <Fragment>
{/* 
    <div className="nav-item"  style={{ display:'flex',justifyContent:'center', alignItems:'center',width:500,height:10}}>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div> */}
             
        

             <li className="nav-item">
                <NavLink to="/services" className="nav-link">
                  <i className="" />
                  &nbsp; Our Services
                </NavLink>
              </li>


              <li className="nav-item">
                
              {/* <Dropdown
              trigger={trigger}
              options={options}
              pointing='top left'
              icon={null}
                /> */}







              <NavLink 

                  // to={`/profiles/${currentUserState.currentUser.username}`}
                  to='/'

                  className="nav-link"
                >
                  
                  {/* <img className="user-pic" src={userImage} alt="" /> */}

                  <Grid container justify="right" alignItems="right">
                  <Avatar src="/broken-image.jpg" className={classes.avatar}  /> &nbsp; {currentUserState.currentUser.username}
                  


    <NavDropdown title="" id="basic-nav-dropdown">  
            <NavDropdown.Item href="">Edit Profile</NavDropdown.Item>  
            <NavDropdown.Item href="">Settings</NavDropdown.Item>  
            <NavDropdown.Item href="">View Pitches</NavDropdown.Item>  
            <NavDropdown.Divider />  
            <NavDropdown.Item href="">Logout</NavDropdown.Item>  
          </NavDropdown> 



      {/* {currentUserState.currentUser.username} */}

      {/* &nbsp; */}


    </Grid>




            {/* <textarea id="wmd-input" name="post-text" class="wmd-input s-input bar0 js-post-body-field processed" data-post-type-id="2" cols="92" rows="15" tabindex="101" data-min-length=""></textarea> */}










                  {/* <Image avatar src={userImage} ></Image> */}

                </NavLink> 

              </li>

              <li className="nav-item">
                <NavLink to="/" className="nav-link">

                  {/* <i className="fa fa-envelope-o" />
                  <span className='badge'>7</span> */}
                  <Badge color="warning" badgeContent={50}>
  <MailIcon /></Badge>
                  {/* &nbsp;  */}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/" className="nav-link">


               {/*  <BellIcon width='10' active={true} animate={true} />  */}

               {/* <i className="fa fa-bell" />
                  <span className='badge'>1</span>
                  &nbsp;  */}
                   
                   <Badge color="warning" badgeContent={5}>

                    <NotificationsActive />

                   </Badge>


                </NavLink>
              </li>


{/* 
              <li className="nav-item">
                <NavLink to="/articles/new" className="nav-link">
                  <i className="ion-compose" />
                  &nbsp; Create New Pitch
                </NavLink>
              </li> */}



            <li className="nav-item">
                <NavLink to="/news" className="nav-link">
                  <i className="" />
                  &nbsp; PitchIT Weekly
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/settings" className="nav-link">
                  <Badge>
                  <Settings />
                  </Badge>
                  {/* <i className="fa fa-gear" />
                  &nbsp;  */}
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  to={`/profiles/${currentUserState.currentUser.username}`}
                  className="nav-link"
                >
                  <img className="user-pic" src={userImage} alt="" />
                  &nbsp; {currentUserState.currentUser.username}
                </NavLink>
              </li> */}
            </Fragment>
          )}

          {currentUserState.isLoggedIn === false && (
            <Fragment>
               <li className="nav nav-item justify-content-center">
                <NavLink to="/about" className="nav-link justify-content-center">
                  About
                </NavLink>
              </li>
               <li className="nav nav-item justify-content-center">
                <NavLink to="/membership" className="nav-link">
                  Membership
                </NavLink>
              </li>
              <li className="nav nav-item justify-content-center">
                <NavLink to="/magazine" className="nav-link">
                  PitchIT Weekly
                </NavLink>
              </li>
              <li className="nav nav nav-item ">
                <NavLink to="/login" className="nav-link">
                  Sign in
                </NavLink>
              </li>
              
              {/* <div className="folding-nav">
                <ul className="nav navbar-nav navbar-right">
                    {this.props.isAuth ? <li className="new-post-button"><a className="button" data-behavior="trigger-overlay" href="/editor">Write a story</a></li> : ''}
                    {this.props.isAuth ? '' : <li onClick={this.props.openSignInWith} className="sign-in-button"><a className="button green-border-button" data-behavior="trigger-overlay" href="#">Sign in / Sign up</a></li>}
                </ul>
            </div> */}
              
              
              <li className="nav nav-item" >
                <NavLink to="/register" className="nav-link">
                  Get started
                </NavLink>
              </li>
            </Fragment>
            
          )}





        </ul>
      </div>



    </Navbar>
  )
}

Topbar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Topbar)
