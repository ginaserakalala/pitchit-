import React , {Fragment,Component} from 'react'
import {NavLink, Link} from 'react-router-dom'
import Topbar from './topbar'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Membership = () => {

  //render()

  return (

    <div >
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: ''}}>Get Started On Your Elevator Pitch</h1>
        

        
        <p style={{display: 'flex', wordWrap:'break-word', justifyContent:'center', alignItems:'center', height: '', marginBottom:40}}>
        Become a PitchIT member to enjoy unlimited access and
directly get access to a trusted community of investors </p>
        

            
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '', borderRadius:'10px', marginBottom:60}}><button className="btn btn-lg btn-primary pull-xs-right">Get Unlimited Access</button></div>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: ''}}>Why become a member?</h1>

 
{/* 
        <ul type="2">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul> */}

<p style={{ wordWrap: 'break-word', paddingLeft: 61, paddingRight: 60}}> When you as member you'll have access to a high profile community of trusted investors & gain exclusive access to all paid features such as: </p>
  
<p style={{wordWrap: 'break-word', paddingLeft: 61, paddingRight: 60}} >✔ Access to full contents of the pitches </p>

<p style={{wordWrap: 'break-word', paddingLeft: 61, paddingRight: 60}} >✔ Allow the algorithm to learn from you and show investment opportunities in line with your interests etc </p>

<p style={{wordWrap: 'break-word', paddingLeft: 61, paddingRight: 60}}>✔ Access to pitchit weekly online magazine, Meaning you can have a look at all opportunities you may have missed or dip your toe into a new sector </p>

<p style={{wordWrap: 'break-word', paddingLeft: 61, paddingRight: 60}}>✔ Access to enter chats with businesses that are protected by an NDA</p>


      

      <section className='text-xs-center'></section>
    

        
</div>


);
}


export default Membership
