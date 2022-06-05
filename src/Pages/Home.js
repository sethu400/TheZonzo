import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import rectangle from "./images/Rectangle_446.png"
import rectangle2 from "./images/Rectangle_445.jpg"
import homedes from "./images/homedes.png"
import logo from "./images/zonzo-logo.png";
import bbs from "./images/942.png"



function Home(){
	const navigate = useNavigate();

	return (
		<div style={{ backgroundImage:`url(${bbs})`,height:"100vh"}}>
		
		<div class="h-backcont" style={{backgroundImage: `url(${rectangle2})`,backgroundRepeat:"no-repeat"}}>
        <div class="h2-backcont" style={{backgroundImage: `url(${rectangle})`,backgroundRepeat:"no-repeat", opacity:"0.1"}}>
        

        </div>
      
        <img src={homedes} style={{position:"absolute",bottom:"0",right:"0",opacity:"0.5"}}/>
        <div class="ic-cont">
       
        
        
        </div>
        </div>

        <div class="navcont">
		<img src={logo} class="img1"/>
		<div class="navcont2">
		<a href="/">Home</a>
		<a href="/">AboutUs</a>
		<a href="/" style={{color:"white"}}>Services</a>
		<a href="/" style={{color:"white"}}>Pricing</a>
		<a href="/contact" style={{color:"white"}}>Contact Us</a>
		<a href="/login" class="button"><b>Login</b></a>
		</div>
		</div>
		  <div class="conhead-cont">
		  <h1>Lorem ipsum dolor</h1>
		  <p>This is an example text<br />Hola</p>
		  <div class="homebtn ">
		  <input class="telinput" type="text" value="+91" style={{position:"absolute",bottom:"0"}}></input>
		  
		  <a class="btn" href="/requestdemo">Free Trial</a>
		  </div>
        </div>
        
		</div>
		
		);
}


export default Home;