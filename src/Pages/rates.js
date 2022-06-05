import './CSS/rates.css'
import './CSS/react-datepicker.css'
import DatePicker from 'react-datepicker'
import {useState} from 'react';


function Modal()
{
	const [dateRange,setDateRange]=useState([null,null]);
	const [startDate,endDate]=dateRange;
	return(
		<div class="modal-content-upinv">
		<div class="cont1-upinv">
		<button class="close-upinv">x</button>
		<h1 class="pos-upinv" style={{top:"15%",color:"white",fontWeight:"bold"}}>Update inventory - Chauhan Homestay By Akshay</h1>
		<p style={{position:"relative",top:"30%",left:"2%",color:"white"}} >Select dates to update inventory for:</p>
		<div class="st-input" style={{position:"relative",top:"30%",left:"2%"}}>
         <DatePicker
         todayButton ={"View Today"}
         placeholderText="Select a range"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      isClearable={true}
    />
		</div>
        </div>
        <div class="cont2-upinv ">
        <div class="upinv-warning">
        <div class="alert--warning  icon-warning-circle">
  </div>
  <p style={{ position:"relative",top:"50%",left:"3%"}}>Please note, if you have not set rates for any occupancy, next higher available occupancy rates would be picked</p>
  </div>
  <h1 class="cont-upinv" >EP</h1>
  <p class="cont-upinv">Sell Rates For:</p>
  <div class="currency-cont1">
  <input class="cont-upinv s-currency-input"></input>
  <div class="cont-upinv2 currency-cont2">
  <p class="cont-upinv inr">INR</p>
  <input placeholder="  0.00" class="currency-input"></input>
  </div>
  <input class="cont-upinv-right s-currency-input"></input>
  <div class="cont-upinv-right2 currency-cont2">
  <p class="cont-upinv inr">INR</p>
  <input placeholder="  0.00" class="currency-input"></input>
  </div>
  </div>
		</div>
    <p class="cont-upinvx">Extra Adult Charge</p>
    <div class="currency-cont1x">
<div class="cont-upinv currency-cont2">
  <p class="cont-upinv inr">INR</p>
  <input placeholder="  0.00" class="currency-input"></input>
  </div>
    </div>
    <br />
    <br />
    <p class="cont-upinvx">Extra Child 1 (0-6 yearsv) Charge</p>
    <p class="cont-upinvx" style={{position:"relative",top:"2px",left:"50%"}}>Extra Child 2 (7-12 yearsv) Charge</p>
		<div style={{position:"relative",top:"1%"}} class="currency-cont1x">
  <input class="cont-upinv s-currency-input"></input>
  <div class="cont-upinv2 currency-cont2">
  <p class="cont-upinv inr">INR</p>
  <input placeholder="  0.00" class="currency-input"></input>
  </div>
  <input class="cont-upinv-right s-currency-input"></input>
  <div class="cont-upinv-right2 currency-cont2">
  <p class="cont-upinv inr">INR</p>
  <input placeholder="  0.00" class="currency-input"></input>
  </div>
  
    </div>
    <button style={{ position:"relative",top:"5%",float: 'right', width: '150px', color: 'white', borderRadius: 10, padding: 10, marginRight: '10%' }} ><b>Save</b></button>
    </div>
		);
}

export default Modal;