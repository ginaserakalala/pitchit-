import React from 'react'
import styled from "styled-components"
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import {BrowserRouter as Router, Link} from 'react-router-dom';




const Services = () => {


    const StyledSection = styled.div`


    overflow: hidden;
 
    
    margin-top : 50px;
    border-radius : 10px;
    // margin-left: 6px;


    // margin-top: 5em;
    // padding-top: 1em;
    // border-top: 1px solid rgba(0, 0, 0, 0.2);

    // text-align: center;
    `;

    const StyledLeft = styled.div`

    height:240px;

    float: left;
    width: 300px;
    padding: 80px 40px 80px 70px;

    border-right: 2px solid white;
    color: white;


    
    `;  


       const StyledRight = styled.div`


       float: right;
       width: 328px;
       padding: 80px 40px 80px 70px;
       height:240px;

       

       border-left: 2px solid white;




       button{

        text-decoration: none;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        background-color: #28282B;
        color: white;
        border: 2px solid black;
        padding: 16px 32px;
        margin: 4px 2px;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        cursor: pointer;
       }
       
       `; 


       const StyledMiddle = styled.div`
       text-align : center;
       height:240px;

       float: left;
       width: 652px;
       padding: 80px 40px 80px 70px;

       p{
        color:white;
    }



    // width:200px;
    // height:200px;
    // position: fixed;
    // background-color: blue;
    // top: 50%;
    // left: 50%;
    // margin-top: -100px;
    // margin-left: -100px;

       `;
 



     


    return(



<StyledSection>
<div style={{textAlign:'center'}}>


<h1  className='text-lg-center'>Our Services</h1>

</div>

<StyledSection style={{ background: '#3786ac'}}>

    <StyledLeft >

                <h3 style={{color: "white"}} >Due Diligence</h3>
                     
             

        </StyledLeft>


<StyledMiddle>
                <p>





                    
                Our financial due diligence procedures allow us to
performathorough examination of the target company's
finances through reviewing current,historic and forecast
performance,and its financial position.We perform
detailed tax due diligence to ensure that any hidden
     issues are resolved prior to purchase.
                
            </p>

            </StyledMiddle>


 <StyledRight>
        
     <Link to="/" >

<Button>
Enquire Now
</Button>

</Link>

            </StyledRight>



      

        </StyledSection>


<StyledSection style={{ background: 'black'}}>    
     <StyledLeft>
                <h3 style={{color: "white"}}>Promote Pitch</h3>
           

            </StyledLeft>
                     
       <StyledMiddle>      
<p>
Promote Posts by creating featured pitches meaning your
  pitch will be at the top of your sector being the first
              company investors see,
You can also promote posts through our PitchIT weekly
business magazine with various options on how you'd like
                   it to look
              
            </p>

            </StyledMiddle>
 <StyledRight>




     {/* <a href="https://www.geeksforgeeks.org"
                target="_blank" className="button"> */}
           

     <Link to="/" >

            <Button>
            Enquire Now
            </Button>
            </Link>


            </StyledRight>
        

        </StyledSection>

<StyledSection style={{background : '#3786ac' }}>

<StyledLeft>

                <h3 style={{color: "white"}}>MasterClass : Pitching 101 Individual</h3>
                     
             </StyledLeft>


<StyledMiddle>
<p>
The Masterclass:Pitching 101 will allow you to work witha
business guru to perfect your pitch before going in front of
                   investors
This service will be carried out by our in-house business
  advisors who have combined decades of expertise in
   advising businesses grow and scale,operationally,
            sustainably and financially
            </p>

            </StyledMiddle>
 
 <StyledRight>
         
     <Link to="/" >

<Button>
Enquire Now
</Button>
</Link>

            </StyledRight>



</StyledSection>



                 
<StyledSection style={{background: 'black' }}>
                     
        <StyledLeft>
                <h3 style={{color: "white"}}>MasterClass : Pitching 101 Groups</h3>
                     
             </StyledLeft>



<StyledMiddle>
<p>
The Masterclass:Pitching 101 will allow you to work witha
business guru to perfect your pitch before going in front of
                  investors
This service will be carried out by our in-house business
  advisors who have combined decades of expertise in
   advising businesses grow and scale,operationally,
            sustainably and financially
            </p>
            </StyledMiddle>

<StyledRight>

          
     <Link to="/" >

<Button>
Enquire Now
</Button>
</Link>


            </StyledRight>


            </StyledSection>


</StyledSection>

    );
}

export default Services