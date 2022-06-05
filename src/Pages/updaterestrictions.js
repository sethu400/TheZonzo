import React from 'react';
import { useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import "./CSS/react-datepicker.css";
import './CSS/updaterestrictions.css'



function App() {
    const [DateRange, setDateRange] = useState([null, null]);
    const [StartDate, EndDate] = DateRange;
    return (
        <div class="st-input">
            <div class="my-top-nav-bar">
                <div style={{ marginLeft: '2.7%' }}>
                    <div style={{ float: 'right', padding: '8px 27px' }}>
                        <CloseButton variant="white" />
                    </div>
                    <br /><br />
                    <h1 style={{ fontWeight: '800' }}>Update inventory - Chauhan Homestay By Akshay</h1>
                    <br />
                    <div className='topcont'>
                        <div class="mydatepicker">
                            <label>Select dates to update inventory for *</label><br />
                            <DatePicker
                                todayButton={"View Today"}
                                placeholderText="Select a range"
                                selectsRange={true}
                                startDate={StartDate}
                                endDate={EndDate}
                                onChange={(update) => {
                                    setDateRange(update);
                                }}
                                isClearable={true}
                            />
                        </div>
                        <div class="weeks">
                            <p>Selected days ( 7 ) </p>
                            <button class="week"><strong>M</strong></button>
                            <button class="week"><b>T</b></button>
                            <button class="week"><b>W</b></button>
                            <button class="week"><b>T</b></button>
                            <button class="week"><b>F</b></button>
                            <button class="week"><b>S</b></button>
                            <button class="week" style={{ color: 'gray' }}><b>S</b></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mycontent">
                <label>Select number of rooms to sell</label><br />
                <input class="roomssell" type="text" placeholder='Enter' /><br />

                <h6 style={{ color: 'purple' }}>
                    <b>-UPDATE INVENTORY RESTRICTIONS</b>
                </h6><br />
                <div class="radiobox">
                    <label>
                        <input type="radio" name='radio' value="BInven" />
                        <h5>Block Inventory</h5>
                    </label>
                    <label>
                        <input type="radio" name='radio' value="UBInven" />
                        <h5>Unblock Inventory</h5>
                    </label>

                </div>

                <br />
                <label>Select min length of stay</label><br />
                <input class="roomssell" type="text" placeholder='Enter' /><br /><br />
                <button style={{ float: 'right', width: '150px', color: 'white', borderRadius: 10, padding: 10, marginRight: '10%' }} ><b>Save</b></button>
            </div>


        </div>
    );
}

export default App