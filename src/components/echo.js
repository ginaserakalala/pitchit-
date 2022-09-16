import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { stringify } from "query-string";

var test = axios.create({
  baseURL: "http://waxes27.com:8080/registration",
  method: "post",
  headers: { "Content-Type": "application/json" },
});

const Registration = () => {
  // const [posts, setPosts] = useState([]);
  const [registration, setRegistration] = useState([]);
  useEffect(() => {
    test
      .post(
        "",
        JSON.stringify({
          userName: "27",
          email: "waxes27.gaming@gmail.com",
          password: "password",
          userRole: "Business",
        })
      )
      .then((res) => {
        setRegistration(res.data);
      });
  }, []);

  return (
    <div>
      {
        <div className="item-container">
          <p> {registration.message} </p>
          <p> {registration.body} </p>
          <p> {registration.status} </p>
        </div>
      }
    </div>
  );
};

const userData = axios({
  method: "post",
  url: "http://waxes27.com:8080/registration",
  data: JSON.stringify({
    userName: "27",
    email: "waxes27.gaming@gmail.com",
    password: "password",
    userRole: "Business",
  }),
  headers: { "Content-Type": "application/json" },
}).then(function(response) {
  console.log(response);

  let token = response.data["body"];
  axios({
    method: "get",
    url: "http://waxes27.com:8080/confirm?token=" + token,
    // data: bodyFormData,
    // headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function(response) {
      //handle success
      console.log(response.data);
      axios({
        method: "post",
        url: "http://waxes27.com:8080/login",
        data: JSON.stringify({
          email: "waxes27.gaming@gmail.com",
          password: "password",
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then(function(response) {
          //handle success
          console.log(response.data);
        })
        .catch(function(response) {
          //handle error
          console.log(response);
        });
    })
    .catch(function(response) {
      //handle error
      console.log(response);
    });
});

axios({
  method: "get",
  url: "http://waxes27.com:8080/api/v1/company",
  // data: bodyFormData,
  // headers: { "Content-Type": "multipart/form-data" },
})
  .then(function(response) {
    //handle success
    console.log(response.asJson());
  })
  .catch(function(response) {
    //handle error
    console.log(response);
  });

axios({
  method: "get",
  url: "http://waxes27.com:8080/api/v1/user/waxes27.gaming@gmail.com",
  // data: bodyFormData,
  // headers: { "Content-Type": "multipart/form-data" },
})
  .then(function(response) {
    //handle success
    console.log(response.asJson());
  })
  .catch(function(response) {
    //handle error
    console.log(response);
  });


export default Registration;
