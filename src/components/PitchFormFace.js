import React from 'react'
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import styled from "styled-components"


const PitchFormFace = ({ prevStep, nextStep, handleChange, values }) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const StyledWrapper = styled.div`

  padding: 5px 20px;

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





`;
const StyledFieldset = styled.fieldset`
margin: 20px 0;
background: green;


`;

  return(

<form>


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



</form>

  )
}

export default PitchFormFace