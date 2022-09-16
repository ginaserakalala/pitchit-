import React , { useEffect, useState } from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import styled from "styled-components"
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";







const PitchFormDetails = ({ prevStep, nextStep, handleChange, values}) => {


  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty()
);

useEffect(() => {
  console.log(editorState);
}, [editorState]);

  // const { editorState } = this.state;

  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }






  const StyledWrapper = styled.form`

  // padding: 100px 40px;
  // margin-bottom: 100px;
  // margin-right : 300px;
  padding-left: 50px;
  padding-right: 320px;
  padding-top: 80px;
  
  
  background-repeat: no-repeat;
  
  background-size: 100% 100%;
  
  background: #F0F0F0	;
  
  
  
  
    button {
      background: #3786ac;
      color: #fff;
      padding: 10px;
      margin: 5px;
      box-sizing: border-box;
  
    
  
      height: 30px;
      width: 100px;
      border-radius: 5px;
      border: 0px;
      margin-top: 10px;
      }
  
      button:hover{
          background-color: #3786ac;
      }
  
  
  
  `;



const StyledFieldset = styled.fieldset`
margin: 20px 0;


`;



  return(


<div>
    <h1 className='text-ls-center'>Pitch Details</h1>

<br/>
<br/>

<h3>The Idea </h3>
    {/* <form onSubmit={handleSubmit}> */}
    <StyledWrapper>

    <div>
      <h3>Product & Services</h3>
      <div style={{ border: "1px solid black", padding: '2px', minHeight: '200px' }}>
        <Editor
        type="text"
          editorState={editorState}
          onEditorStateChange={setEditorState}
          placeholder="Type here"
        />
      </div>
    </div>

<br />
<br />

    <div>
      <h3>Problem Solved</h3>
      <div style={{ border: "1px solid black", padding: '2px', minHeight: '200px' }}>
        <Editor
        type="text"
          editorState={editorState}
          onEditorStateChange={setEditorState}
          placeholder="Type here"
        />
      </div>
    </div>
     
<br/>
<br/>

    <div>
      <h3>Revenue Model</h3>
      <div style={{ border: "1px solid black", padding: '2px', minHeight: '200px' }}>
        <Editor
                type="text"

          editorState={editorState}
          onEditorStateChange={setEditorState}
          placeholder="Type here"
        />
      </div>
    </div>
     
     
    
{/* <Grid> */}
<div class="btn-group">
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
{/* </Grid> */}


   </StyledWrapper>

   </div>

  )
}

export default PitchFormDetails