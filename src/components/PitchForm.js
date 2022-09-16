import React, {useState, useEffect,Component} from 'react'

import BackendErrorMessages from './backendErrorMessages'

import Avatar from 'react-avatar'

import ReactDOM from 'react-dom'

import SimpleImageSlider from "react-simple-image-slider"
import ImageUploader from "react-images-upload";
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import styled from "styled-components"
import {BrowserRouter as Router, Link} from 'react-router-dom';



const PitchForm = ({ prevStep, nextStep }) => {


  const changeHandler = (e) => {
    const { files } = e.target
    for (let i = 0; i < files.length; i++) {
      const file = files[i]; // OR const file = files.item(i);
    }
  }
  


  const Previous = e => {
    e.preventDefault();
    prevStep();
  }


  const Continue = e => {
    e.preventDefault();
    nextStep();
  }




  const StyledForm = styled.form`


/* Just to center the form on the page */
margin: 0 auto;
width: 90%;
height:200%;

/* To see the limits of the form */
padding: 2em;
// border: 1px solid #CCC;
border-radius: 1em;


max-width: 900px;
margin: auto auto auto auto;
  

`;


  const StyledWrapper = styled.body`

  padding: 5px 20px;

  background: #F0F0F0		;

//background: #708090;
  
  button {
		// background: #3786ac;
    background: #3786ac;
		color: #fff;
		padding: 10px;
		margin: 5px;
		width: 150px;
		border: none;
		border-radius: 10px;
		box-sizing: border-box;
	  }

    button:hover{
      background-color: #3786ac;
  }





`;


const StyledCard = styled.div`


padding: 5px 20px;
  background: white;
border-radius: 10px;
  box-shadow: 0 7px 10px 0 grey;
  max-width: 850px;
  height: 450px;
  margin: auto;
  text-align: center;


// .title {
//   color: grey;
//   font-size: 18px;
// }

button {
  background: #3786ac;
		color: #fff;
		padding: 10px;
		margin: 5px;
		width: 150px;
		border: none;
		border-radius: 10px;
		box-sizing: border-box;
}

button:hover{
  background-color: #3786ac;
}
// a {
//   text-decoration: none;
//   font-size: 22px;
//   color: black;
// }








 `;


const StyledFieldset = styled.fieldset`

border: 1px solid black;

margin: 20px 0;
background: green;


`;

const StyledInputLeft = styled.input`


float: left;

color: white;


`;  


   const StyledInputRight = styled.input`


   float: right;


`;




  // useEffect(() => {
  //   if (!initialValues) {
  //     return
  //   }

  //   setTitle(initialValues.title)
  //   setDescription(initialValues.description)
  //   setBody(initialValues.body)
  //   setTagList(initialValues.tagList)
  //   setImage(initialValues.image)
  // }, [initialValues])

  // console.log('fields', title, body, description, tagList,image)


  
  return (


    <StyledWrapper>
      <h1 className='text-lg-center'>Pitch Face </h1>

      <StyledForm>


<StyledCard>
  <input style={{ height: 30,borderRadius: 10, flex: '0 0 200',marginRight: 220, borderColor: 'transparent' }} type='text' placeholder='Name and Surname' ></input>

  <input style={{ height: 30,borderRadius: 10, flex: '0 0 200',marginLeft: 220 , borderColor: 'transparent'}}  type='text' placeholder='Position' ></input>
<br />
<br />
  <input type='text' style= {{ borderRadius: 10 , borderColor: 'transparent', textAlign:'center' }} placeholder='Add Pitch Title' ></input>




  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '13vh'}}>
{/* 
                <Link to="/uploadimg" >  
              <Button 
              
              >
              Upload images

              </Button>

              </Link>  */}

<input
      type="file"
      id="file"
      onChange={changeHandler}
      accept="image/*"
      multiple
    />

                </div>

  <textarea style={{ width:   '70%' , height: 180, borderColor: 'black'}} placeholder='Write your pitch idea here...' ></textarea>

  {/* <div style="margin: 24px 0;"> */}

  {/* </div> */}

  <div className="btn-group">
              <Button 
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                //color="primary"
              >
                Previous
              </Button>
            {/* </Grid> */}

            {/* <Grid item xs={12} sm={6}> */}
              <Button 
                onClick={ Continue }
                type="submit"
                fullWidth
                variant="contained"
                //color="primary"
              >
                Continue
              </Button>
              </div>
</StyledCard>




{/* </Grid> */}


            </StyledForm>

     
    </StyledWrapper>
  )
}

export default PitchForm

