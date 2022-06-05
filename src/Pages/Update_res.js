import React from 'react';
import DatePicker from 'react-datepicker';
import { CloseButton } from 'react-bootstrap';
import exclamationcir from '../assests/exclamationcir.svg';
import { Col, Form, Card, Row, Container, Button, InputGroup, Figure } from "react-bootstrap";
import { useState } from 'react';

const Update_res = () => {
    const [DateRange, setDateRange] = useState([null, null]);
    const [StartDate, EndDate] = DateRange;
    return (
        <div style={{ overflow: "hidden" }}>
            <div class="st-input">
                <div class="my-top-nav-bar">
                    <div style={{ marginLeft: '2.7%' }}>
                        <div style={{ float: 'right', padding: '8px 27px' }}>
                            <CloseButton variant="white" />
                        </div>
                        <br /><br />
                        <br />
                        <div className='topcont'>
                            <div class="mydatepicker">
                                <h4>Select dates to update inventory for *</h4><br />
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
                            <div class="weeks" style={{ marginTop: "-1px" }}>
                                <h4>Selected days ( 7 ) </h4><br />
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
                <Card style={{ width: "83%", height: "5vh", padding: "5px", color: "red", marginTop: "15px", marginLeft: "6%", paddingLeft: "10px" }}><Card.Text><Figure.Image width={20} height={20} alt="circle" src={exclamationcir} /> &nbsp; Please note any restrictions you apply from here will be applied on all rooms and rates</Card.Text></Card>
                <div style={{ margin: "2% 3% 0 6%" }}>
                    <h3 style={{ fontWeight: "600" }}>UPDATE RESTRICTIONS FOR ENTIRE HOTEL</h3><br />
                    <Row>
                        <Col>
                            <Card style={{ width: "50vh", height: "18vh", borderRadius: "20px", padding: "18px", paddingLeft: "50px",marginLeft:"4%" , paddingTop: "25px"}}>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                label="Block Inventory"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            /><br />
                                            <Form.Check
                                                label="Unblock Inventory"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: "50vh", height: "18vh", borderRadius: "20px", padding: "18px", paddingLeft: "50px", paddingTop: "25px" }}>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                label="Close to Arrival"
                                                name="group2"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            /><br />
                                            <Form.Check
                                                label="Inactive CTA"
                                                name="group2"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: "50vh", height: "18vh", borderRadius: "20px", padding: "18px", paddingLeft: "50px",marginRight:"22vh", paddingTop: "25px" }}>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                label="Close to Departure(CTD)"
                                                name="group3"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            /><br />
                                            <Form.Check
                                                label="Inactive CTD"
                                                name="group3"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md>
                            <Form style={{ width: "70%" }}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Set minimum length of stay</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md style={{ width: "40vh",marginRight:"25%" }}>
                            <Form.Label style={{ marginBottom: "17px" }}>Set cutoff</Form.Label>
                            <Form.Select size="lg" aria-label="Floating label select example" style={{ width: "50vh",marginRight:"25%" }}>
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <br />
                            <Form.Text id="Floating label select example" muted >
                                By default your cutoff is 12:00AM midnight which means your guest can book until 11:59PM for same day check-in.
                            </Form.Text>
                            <br />
                            <hr />
                            <Row>
                                <Col><Form.Text id="Floating label select example" muted>
                                    Check-in time
                                </Form.Text></Col>
                                <Col style={{marginLeft:"50%"}}><Form.Text id="Floating label select example" muted>
                                    Bookable till midnight
                                </Form.Text></Col>
                            </Row>
                        </Col>
                    </Row>
                </div>  
            </div>
            <button style={{ float: 'right', width: '150px', color: 'white', borderRadius: 10, padding: 10, marginRight: '5%',marginTop:"-2%" }} ><b>Save</b></button>
        </div>
    )
}

export default Update_res
