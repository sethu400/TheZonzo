import React, { Component } from "react";
import clip from "./images/clip.png";
import './CSS/style.css'

class Login extends Component {
  render() {
  	return (
  	<div class="rform">
  		<div class="rcorners1">
  		<center>
  		
  		<div class="rcorners2 st-input">
  		&nbsp;
  		<h1>
  		Request a Demo
  		</h1>
  		
  		<input type="text" name="name" placeholder="Name" id="name"></input>
  		<select class="select-ph" name="countryCode" id="">
  	<option data-countryCode="IN" value="91" Selected>+91</option>
	<option data-countryCode="GB" value="44" Selected>+44   UK</option>
	<option data-countryCode="US" value="1">+1    USA</option>
	</select> &nbsp; &nbsp; 
	<input class="telinput" style={{width:"79%",height:"10%"}} type="tel" id="phone" name="phone" placeholder="Phone no." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
  	<input type="email" name="email" placeholder='Email address' id="email"></input>
  		<input type="text" name="hotelname" placeholder="Hotel name" id="hname"></input>
  		<input type="text" name="cityname" placeholder="City" id="cname"></input>
  		<br />
<input type="submit" class="b1"></input>


  		</div>
  		<img style={{position:"relative"}} src={clip}  />
          </center>
        </div>
        </div>
  		);
  }
}

export default Login;
