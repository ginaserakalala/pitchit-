import React, { Component } from 'react';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'
import styled from "styled-components"
import {BrowserRouter as Router, Link} from 'react-router-dom';




const StyledWrapper = styled.form`

padding: 5px 20px;


//background: #708090;

button {
      // background: #3786ac;
  background: black;
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
export default class UploadImg extends Component {
    fileObj = [];
    fileArray = [];
    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }
    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }
    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }
    render() {
        return (
            <StyledWrapper>
                <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img src={url} alt="..." />
                    ))}
                </div>
                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>

                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '13vh'}}>

                {/* <Button   onClick={this.uploadFiles}>Upload</Button> */}

                <Button   Link to = "/questionnaire" >Upload</Button>


                </div>
            </StyledWrapper >
        )
    }
}