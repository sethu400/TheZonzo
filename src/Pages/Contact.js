import React, { Component } from "react";
import logo from "./images/zonzo-logo.png";
import bbs from "./images/942.png"
import conimg from "./images/conimg.png"


class contact extends Component {
  render() {
	return (
		<div style={{ backgroundImage:`url(${bbs})`,height:"100vh"}}>
		<div class="navcont">
		<img src={logo} class="img1"/>
		<div class="navcont2">
		<a href="/">Home</a>
		<a href="/">AboutUs</a>
		<a href="/">Services</a>
		<a href="/">Pricing</a>
		<a href="/contact" style={{textDecoration:"underline"}}>Contact Us</a>
		<a href="/login" class="button"><b>Login</b></a>
		</div>
		</div>
		<div style={{backgroundImage:`url(${conimg})`,backgroundPosition:"right top",backgroundRepeat:"no-repeat",position:"absolute",bottom:"0",right:"0",height:"65%",width:"80%"}}>
		</div>
		<div class="contact-cont st-input">
		<h1>Contact Us</h1>
		<label for="emailx">Email</label>
		<input type="email" id="emailx" placeholder="Your email" required></input>
		<label>Subject</label>
		<input type="text" placeholder="Subject"></input>
		<label>message</label>
		<textarea class="textarea"  ></textarea>
		<input type="submit" class="b1"></input>
		</div>
		</div>
		);
}
}

export default contact;