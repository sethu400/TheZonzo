import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import rectangle from "./images/Rectangle_446.png"
import rectangle2 from "./images/Rectangle_445.jpg"
import homedes from "./images/homedes.png"
import logo from "./images/zonzo-logo.png";
import bbs from "./images/942.png"
import './CSS/zonzoall.css'
import './CSS/master-v32.css'


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
 <div class="sub-header p-fixed site-white-bk w-100-p z-index-500 border-box border-0 border-btm-1 brk-700-border-top-1 border-solid" > <div class="site-width site-margin mglr-auto"> <div class="flex row brk-700-justify-center"> <div class="flex col justify-center"> <h1 class="font-w-700 font-14 brk-700-font-12">CHANNEL MANAGER</h1> </div> <div class="flex col justify-center"> <div class="ht-50 wd-1 mgl-20 mgr-20 brk-700-mgl-10 brk-700-mgr-10" ></div> </div> <div class="hd-overview header-select flex col justify-center" value="pos-overview"> <span class="font-14 brk-700-font-13 mgr-10 brk-700-mgr-5 header-select-current">Overview</span> </div> <div class="hd-channels header-select flex col justify-center" value="pos-channels"> <span class="font-14 brk-700-font-13 mgl-10 mgr-10 brk-700-mgl-5 brk-700-mgr-5">Channels</span> </div> <div class="hd-features header-select flex col justify-center" value="pos-features"> <span class="font-14 brk-700-font-13 mgl-10 brk-700-mgl-5 brk-700-mgr-20">Features</span> </div> </div> </div> </div>
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
