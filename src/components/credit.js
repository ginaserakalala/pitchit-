import React from "react";
import Card from "react-credit-cards";

import styles from 'styled-components'

// import SupportedCards from "./SupportedCards";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "./utility";

import "react-credit-cards/es/styles-compiled.css";



// body {
//   font-family: Helvetica, sans-serif;
//   font-size: 16px;
//   margin: 0;
//   padding: 0;
//   min-height: 100vh;
// }

// a {
//   color: #666;
// }

// h1 {
//   font-weight: bold;
//   margin: 0 0 10px;
// }

// h4 {
//   margin-bottom: 30px;
// }

// h1,
// h2,
// h4 {
//   text-align: center;
// }

// .App-payment {
//   padding: 30px;
// }

// form {
//   margin: 30px auto 0;
//   max-width: 400px;
// }

// .form-actions {
//   margin-top: 15px;
// }

// .App-cards {
//   margin: 0 auto;
//   max-width: 1280px;
//   text-align: center;
// }

// .App-cards-list {
//   display: flex;
//   margin-top: 30px;
//   flex-wrap: wrap;
//   justify-content: space-between;
// }

// .App-cards-list > * {
//   transform: scale(0.8);
//   margin-bottom: 30px !important;
// }

// .App-highlight {
//   font-family: serif;
//   margin: 15px auto 0;
//   max-width: 300px;
// }

// .App-highlight > div {
//   padding-left: 40px;
// }

// .App-badges {
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// }

// .App-badges a {
//   display: block;
// }

// .App-badges a + a {
//   margin-top: 18px;
// }

// .github__btn {
//   align-items: center;
//   background-color: #ccc;
//   border-radius: 4px;
//   color: #444;
//   display: flex;
//   line-height: 1;
//   padding: 8px 12px;
// }

// .github__btn:hover {
//   color: #444;
//   text-decoration: none;
// }

// .github__btn img {
//   display: inline-block;
//   height: 28px;
//   margin-right: 8px;
// }

// .App-credits {
//   background-color: #000;
//   color: #fff;
//   line-height: 50px;
//   text-align: center;
// }

// .App-credits a {
//   color: #fff;
//   font-weight: bold;
// }

// @media screen and (min-width: 600px) {
//   .App-badges {
//     flex-direction: row;
//   }

//   .App-badges a + a {
//     margin-top: 0;
//     margin-left: 18px;
//   }
// }
































const StyledForm = styles.form ` 
margin: 30px auto 0;
max-width: 600px;

`;

const StyledBody = styles.div ` 
background-color: #F0F0F0	;  
`;

export default class Credit extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (



      <StyledBody key="Payment">



<div><h4 className="text-lg-center">Billing address</h4>
              <StyledForm class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="username">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" id="username" placeholder="Username" required />
                    <div class="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="email">Email <span class="text-muted">(Optional)</span></label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="address">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                  <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                </div>

                <div class="row">
                  <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select class="custom-select d-block w-100" id="country" required>
                      <option value="">Choose...</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Spain</option>


                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select class="custom-select d-block w-100" id="state" required>
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  {/* <div class="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required />

                    <div class="invalid-feedback">
                      Zip code required.
                    </div>

                  </div> */}

                </div>
                <hr class="mb-4" />

                {/* <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="same-address" />
                  <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="save-info" />
                  <label class="custom-control-label" for="save-info">Save this information for next time</label>
                </div> */}

                </StyledForm>
</div>

        <div className="App-payment">
          {/* <h1>React Credit Cards</h1>
          <h4>Beautiful credit cards for your payment forms</h4> */}
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <StyledForm ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <small>E.g.: 49..., 51..., 36..., 37...</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row">
              <div  style={{marginRight: 60, marginLeft:15, marginBottom:10}} className="col-2">
                <input 
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button className="btn btn-primary btn-block">PAY</button>
            </div>
          </StyledForm>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
          <hr style={{ margin: "60px 0 30px" }} />
          {/* <div className="App-badges">
            <a
              href="https://github.com/amarofashion/react-credit-cards"
              className="github__btn"
            >
              <img
                alt="View on GitHub"
                src="https://cdn.jsdelivr.net/gh/gilbarbara/logos@2017.12/logos/github-icon.svg"
              />
              <span>View on GitHub</span>
            </a>

            <a href="https://codesandbox.io/s/ovvwzkzry9">
              <img
                alt="Edit ovvwzkzry9"
                src="https://codesandbox.io/static/img/play-codesandbox.svg"
              />
            </a>
          </div> */}


          <hr style={{ margin: "30px 0" }} />
          {/* <SupportedCards /> */}
        </div>

        {/* <div className="App-credits">
          Made with ❤️ at <a href="https://amaro.com/">AMARO</a>.
        </div> */}

      </StyledBody>
    );
  }
}
