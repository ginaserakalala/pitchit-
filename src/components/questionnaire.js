import React, { useState } from 'react';

import styled from "styled-components"

import { Container, Typography, Grid, TextField, Button } from '@material-ui/core'


const StyledForm = styled.form`


/* Just to center the form on the page */
margin: 0 auto;
width: 70%;
height:200%;

/* To see the limits of the form */
padding: 1em;
// border: 1px solid #CCC;
border-radius: 1em;


max-width: 900px;
margin: auto auto auto auto;
  

`;
const StyledWrapper = styled.body`

// padding: 100px 40px;
// margin-bottom: 100px;
// margin-right : 300px;
padding-left: 50px;
padding-right: 320px;
padding-top: 10px;


background-repeat: no-repeat;

background-size: 100%;

background: #F0F0F0		;




	button {
		background: #3786ac;
		color: #fff;
		padding: 10px;
		margin: 5px;
		box-sizing: border-box ;

	

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


const StyledDiv = styled.div`

`;

const StyledInputRadio = styled.input.attrs({
	type:"radio"
})`

padding: 5px;
margin: 10px;



`;

const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 6px;
  margin: 10px;
  width: 150px;
  box-sizing: border-box;
`;

const StyledLeft = styled.div`

// display: inline-block;
// text-align: left;
// width: 48%;
// padding: 6px;
// vertical-align: top;
// margin-right: 10px;


// border: 1px solid grey;
// border-radius: 10px;
// padding: 10px;
// margin: 5px;
// box-sizing: border-box;


display: flex;
flex-flow:row wrap;
float:left
// justify-content: left;
align-items: top;
height: 30px;
border: 3px solid grey	; 
border-radius: 10px;
background:white;
margin-bottom : 10px;
width: 1000px;



`;

const StyledLeftSecond = styled.div`

display: flex;
flex-flow:row wrap;
float:left
// justify-content: left;
align-items: top;
height: 36px;
border: 3px solid grey	; 
border-radius: 10px;
background:white;
margin-bottom : 10px;
width: 1000px;



`;



// constStyledRight = styled.div

//   display: inline-block;
//   text-align: left;
//   width: 48%;
//   vertial-align: middle;


// `;



const StyledSecond = styled.div`

display: inline-block;
text-align: right;
margin-left: 558px;
border-radius: 10px;
background:white;





`;

const StyledThird = styled.div`

display: inline-block;
text-align: right;
margin-left: 545px;


`;

const StyledFourth = styled.div`
display: inline-block;
text-align: right;
margin-left: 545px;

`;






const StyledRight = styled.div`




// .alignleft {
//     float: left;
//     text-align:left;
//     width:33.33333%;
// }



    // float: left;
    // text-align:right;
    // width:33.33333%;


	display: inline-block;
	height:30px;
	text-align: right;
	margin-left: 450px;
	

	// margin-top: 20px;


	// display: 'flex',
	// flexDirection: 'column',
	// alignItems: 'flex-end',
	// justifyContent: 'right',

`;


const multiquest = {

	// display: 'flex',
	justifyContent: 'left',
	// alignItems: 'top',
	height: 300,
	border: '3px solid grey			',
	borderRadius: 10,
	background:'white',
	marginBottom: 10,
	width:1000,
	
	}

	const countrystyle = {
		// display: 'flex',
		 height: 25,
		// float: 'right',
		// clear: 'both',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		justifyContent: 'right',


	}
	
	

// function Questionnaire() {



	const Questionnaire = ({ nextStep, handleChange, values  }) => {
    // for continue event listener
	      const Continue = e => {
		e.preventDefault();
		nextStep();
	  }

	  



	const [answer,setAnswer]=useState('');
 
	// const handleChange=(e)=>{
	// 	setAnswer( e.target.value);
	//  }



	//  const handleSubmit = e => {
	// 			e.preventDefault();
	// 			// const data = {answer, role};
	// 			// const json = JSON.stringify(data, null, 4);
	// 			console.clear();
	// 			// console.log(json);
	// 		};

 
	 return (


	   <StyledWrapper>

		   <div><p style={{display:'flex', float:'right',height:80, width: 450, overflowWrap:'break-word' ,textAlign:'right', justifyContent:'center',paddingTop: 5, paddingBottom:100 }}>
		   <img src='assets/images/quest.png' width="100" height="100"></img>
			   Before you get started on your pitch,
		   you will need to answer some questions to make 
			   sure you are ready to raise investment</p></div>
		 
		  {/* <StyledForm onSubmit={handleSubmit}> */}

		  <StyledForm>






			<StyledLeft>
				
		  <label >Have you already set up the limited company you want to get funded?  </label>


		{/* 
		<div className='form-group'>

		<input class="radio-inline" type="radio" />Yes
          <input class="radio-inline" type="radio" />No
		</div> */}




<StyledRight>
			  <input class="radio-inline" type="radio" value="yes" id="yes"
				// onChange={handleChange} name="answer" /> 
				/>
				Yes
 
			 <input class="radio-inline" type="radio" value="no" id="no"
			//    onChange={handleChange} name="answer"/>
			/>

			 No

			 </StyledRight>




			 </StyledLeft>

			



			 <StyledLeftSecond>

			 <label>In which country is your company based? </label>

<StyledSecond  >
				 
<input placeholder='Country' 
list="countries" name="myCountries"   />
<datalist id="countries">
<option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
<option value="Antartica">Antarctica</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Aruba">Aruba</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bermuda">Bermuda</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
<option value="Botswana">Botswana</option>
<option value="Bouvet Island">Bouvet Island</option>
<option value="Brazil">Brazil</option>
<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
<option value="Brunei Darussalam">Brunei Darussalam</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Cayman Islands">Cayman Islands</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Christmas Island">Christmas Island</option>
<option value="Cocos Islands">Cocos (Keeling) Islands</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Congo">Congo, the Democratic Republic of the</option>
<option value="Cook Islands">Cook Islands</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cota D'Ivoire">Cote d'Ivoire</option>
<option value="Croatia">Croatia (Hrvatska)</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="East Timor">East Timor</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Falkland Islands">Falkland Islands (Malvinas)</option>
<option value="Faroe Islands">Faroe Islands</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="France Metropolitan">France, Metropolitan</option>
<option value="French Guiana">French Guiana</option>
<option value="French Polynesia">French Polynesia</option>
<option value="French Southern Territories">French Southern Territories</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Greece">Greece</option>
<option value="Greenland">Greenland</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guam">Guam</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
<option value="Holy See">Holy See (Vatican City State)</option>
<option value="Honduras">Honduras</option>
<option value="Hong Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran (Islamic Republic of)</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
<option value="Korea">Korea, Republic of</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Lao">Lao People's Democratic Republic</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon" selected>Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macau">Macau</option>
<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Martinique">Martinique</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia, Federated States of</option>
<option value="Moldova">Moldova, Republic of</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montserrat">Montserrat</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="Netherlands Antilles">Netherlands Antilles</option>
<option value="New Caledonia">New Caledonia</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norfolk Island">Norfolk Island</option>
<option value="Northern Mariana Islands">Northern Mariana Islands</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Pitcairn">Pitcairn</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Puerto Rico">Puerto Rico</option>
<option value="Qatar">Qatar</option>
<option value="Reunion">Reunion</option>
<option value="Romania">Romania</option>
<option value="Russia">Russian Federation</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
<option value="Saint LUCIA">Saint LUCIA</option>
<option value="Saint Vincent">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option> 
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia (Slovak Republic)</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Georgia">South Georgia and the South Sandwich Islands</option>
<option value="Span">Spain</option>
<option value="SriLanka">Sri Lanka</option>
<option value="St. Helena">St. Helena</option>
<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Svalbard">Svalbard and Jan Mayen Islands</option>
<option value="Swaziland">Swaziland</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syrian Arab Republic</option>
<option value="Taiwan">Taiwan, Province of China</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania, United Republic of</option>
<option value="Thailand">Thailand</option>
<option value="Togo">Togo</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Turks and Caicos">Turks and Caicos Islands</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Viet Nam</option>
<option value="Virgin Islands (British)">Virgin Islands (British)</option>
<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
<option value="Western Sahara">Western Sahara</option>
<option value="Yemen">Yemen</option>
<option value="Serbia">Serbia</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
</datalist>

</StyledSecond>

</StyledLeftSecond>

<div style={multiquest}>
<label >Does your company meet any of the following criteria? </label>
	

<StyledThird>
			  <input class="radio-inline" type="radio" value="yes" id="yes"
				// onChange={handleChange} name="answer" />
				/>Yes
 
			 <input class="radio-inline" type="radio" value="no" id="no"
			//    onChange={handleChange} name="answer"/> 
			/>No

			 </StyledThird>



	
		<br/>
	

			 <p>a) Has sold one or more of its services/products to customers who are not family/relatives and friends?</p>
		 <br />
         <p>b) Has created a software /hardware prototype which can be presented to investors?</p>
		 <br />
          <p>c) Has received research funding from investors,universities or government</p>
		  <br />

		 
	

			 </div>



			<StyledLeft>

			 <label>Does your business have a clear competitve advantage? </label>

			 <StyledFourth> 

			 <input class="radio-inline" type="radio" value="yes" id="yes"
				// onChange={handleChange} name="answer" />
				/>
				Yes 
			 <input class="radio-inline" type="radio" value="no" id="no"
			//    onChange={handleChange} name="answer"/>
			/>No

			 </StyledFourth> 


			 </StyledLeft>

     		<Button 
            onClick={ Continue }
            type="submit"
            fullWidth
            variant="contained"
			
			
            //color= "magenta"
          >
            Continue
          </Button>
		  

		  </StyledForm>
 
		  {/* <p>You gender is -->{gender}</p> */}

	   </StyledWrapper>

	   
	 )
 }
 export default Questionnaire