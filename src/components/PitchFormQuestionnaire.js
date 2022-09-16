import React, { Component } from 'react'
import PitchFormFace from './PitchFormFace'
import PitchFormDetails from './PitchFormDetails'
import PitchFormCompanyDetails from './PitchFormCompanyDetails'
import PitchForm from './PitchForm'
import Questionnaire from './questionnaire'
import Feed from './feed'

import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'


class PitchFormQuestionnaire extends Component {


  state = {
    step: 1,
    email: '',
    username: '', 
    password: '',
    firstName: '',
    lastName: '',
    country: '',
    levelOfEducation: '',
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { email, username, password, firstName, lastName, country, levelOfEducation } = this.state;
    const values = { email, username, password, firstName, lastName, country, levelOfEducation }

    switch(step) {

      case 1:
        return(
            <Questionnaire  
            
            nextStep = {this.nextStep}
            handleChange= {this.handleChange}
            values={ values }

            />

        )
      case 2: 
        return (

          <PitchForm
          prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 3: 
        return (
          <PitchFormCompanyDetails 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 4: 
          return (
            <PitchFormDetails 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )


          // case 5: 
          // return (
          //   <PitchForm 
          //     prevStep={ this.prevStep }
          //     nextStep={ this.nextStep }
          //     values={ values }
          //   />
          // )


        // case 5: 
        //   return (
        //     <Success />
        //   )
      default: 
          // do nothing
    }
  }
}

export default PitchFormQuestionnaire
