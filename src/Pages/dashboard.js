import React from 'react'
import { Card, Row, Col, Container, Figure, Form, ButtonGroup, Button, Navbar, NavDropdown, FormControl, Nav, Offcanvas } from 'react-bootstrap';
//import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
//import 'react-circular-progressbar/dist/styles.css';
import logo from '../assests/zonzo logo new.svg';
import room from '../assests/rooms.svg';
import eye from '../assests/eye.svg';
import world from '../assests/world.svg';
import tick from '../assests/tick.svg';
import phone from '../assests/phone.svg';
import calendar from '../assests/calendar.svg';
import noimg from '../assests/vector no.svg';
import plus from '../assests/plus circle.svg';
import info from '../assests/info circle.svg';
import info1 from '../assests/info circle1.svg';
import rarrow from '../assests/right arrow.svg';
import arrow from '../assests/arrow.svg';
import uparrow from '../assests/uparrow.svg';
import rightarr from '../assests/rightarr.svg';
import uparrowgreen from '../assests/uparrowgreen.svg';
import menu from '../assests/menu.svg';
import bell from '../assests/bell.svg';
import profile from '../assests/profile.svg';
import './CSS/dashboard.css';


const dashboard = () => {
    const percentage = 13.33;
    const percentage1 = 75;
    const percentage2 = 45;
    const percentage3 = 40;
    return (
        <div style={{ background: "#F5F6FD", width: "100%", height: "100%",overflow: "hidden" }}>
            <Navbar expand={false} style={{ background: "linear-gradient(180deg, #7038A8 0%, #C094EA 100%)" }} className="fixed-left">
                    <Navbar.Toggle aria-controls="offcanvasNavbar" >
                        <Navbar.Brand href="#"><Figure.Image className="menu"
                            width={25}
                            height={25}
                            alt="phone"
                            src={menu}
                        /></Navbar.Brand></Navbar.Toggle>
                    <Navbar.Brand href="#"><Figure.Image className="phone"
                        width={25}
                        height={25}
                        alt="phone"
                        src={phone}
                    /></Navbar.Brand>
                    <Navbar.Brand href="#"><Figure.Image className="tick"
                        width={25}
                        height={25}
                        alt="phone"
                        src={tick}
                    /></Navbar.Brand>
                    <Navbar.Brand href="#"><Figure.Image className="world"
                        width={25}
                        height={25}
                        alt="phone"
                        src={world}
                    /></Navbar.Brand>
                    <Navbar.Brand href="#"><Figure.Image className="eye"
                        width={25}
                        height={25}
                        alt="phone"
                        src={eye}
                    /></Navbar.Brand>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="left end"
                        style={{ height: "100vh" }}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex" style={{borderRadius:"30px"}}>
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
            </Navbar>
            <div style={{ marginTop: "-670px" }}>
                <Row>
                    <Col xs={1} md={2} style={{marginLeft:"6%",marginTop:"15px"}}>
                        <Figure.Image className="logo"
                            width={80}
                            height={80}
                            alt="logo"
                            src={logo}
                        />
                    </Col>
                    <Col style={{ marginTop: "25px" }}>
                        <h4 style={{fontWeight:"600"}}>SHARMA HOME STAY</h4>
                        <p style={{fontWeight:"600"}}>Welcome</p>
                    </Col>
                    <Col style={{ marginTop: "25px" }}>
                        <Form className="d-flex" style={{ borderRadius: "15px"}}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                    </Col>
                    <Col style={{ marginTop: "25px", marginRight: "-550px" }}><Figure.Image width={25} height={25} alt="bell" src={bell} /></Col>
                    <Col style={{ lineHeight: "7px", marginTop: "25px", marginLeft: "350px" }}>
                        <p>Saurabh Sharma</p>
                        <p style={{ marginLeft: "29px" }}>Owner</p>
                    </Col>
                    <Col style={{ marginTop: "25px", marginLeft: "-70px" ,marginRight:"-170px" }}><Figure.Image className="cursor" width={30} height={30} alt="profile" src={profile} /></Col>
                    <hr />
                </Row>
                <Row>
                    <Col><Card style={{ background: "linear-gradient(180deg, #7038A8 0%, #C094EA 100%)", padding: "10px", color: "white", fontSize: "12px", borderRadius: "15px",width:"80%",marginLeft:"25%" }}>
                        <Row>
                            <Col><Card.Text>Today's Check in</Card.Text></Col>
                            <Col xs lg="2"><Figure.Image width={13} height={13} alt="info1" src={info1} /></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col><h2>10</h2></Col>
                            <Col style={{ marginRight: "-60px" }}><Card.Text className='cover1' style={{ background: "#FFFFFF21"}}>+ 13.33% &nbsp; <Figure.Image width={13} height={13} alt="uparrow" src={uparrow} /></Card.Text></Col>

                            {/* <Col><div style={{ width: "40px", height: "40px", marginLeft: "190px" }}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`}
                                styles={buildStyles({
                                    rotation: 0.75,
                                    textSize: '20px',
                                    pathColor: '#FFE517',
                                    textColor: 'white',
                                    trailColor: 'none',
                                    backgroundColor: 'none',
                                })} /></div></Col>*/}</Row>
                        <br />
                        <Row>
                            <Col><Card.Text>For Next Seven Days</Card.Text></Col>
                            <Col style={{ marginRight: "-170px" }}><Card.Text> 06</Card.Text></Col>
                        </Row>
                    </Card></Col>
                    <Col><Card style={{ padding: "10px", fontSize: "12px", borderRadius: "15px",width:"83%",marginLeft:"15%" }}>
                        <Row>
                            <Col><Card.Text>Today's Average room rate</Card.Text></Col><Col xs lg="2"><Figure.Image width={13} height={13} alt="info" src={info} /></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col><h2 style={{color:"#733CAB" , fontWeight:"600"}}>12.5%</h2></Col>
                            <Col  style={{ marginRight: "-85px" }}><Card.Text className='cover'>+ 75% &nbsp; <Figure.Image width={13} height={13} alt="uparrow" src={uparrowgreen} /></Card.Text></Col>
                      {/*  <Col><div style={{ width: "40px", height: "40px", marginLeft: "190px" }}>
                            <CircularProgressbar value={percentage1} text={`${percentage1}%`}
                                styles={buildStyles({
                                    rotation: 0.25,
                                    textSize: '20px',
                                    pathColor: '#F21919',
                                    textColor: 'black',
                                    trailColor: 'none',
                                    backgroundColor: 'none',
                                })} /></div></Col>*/}</Row>
                                <br/>
                                <Row>
                            <Col><Card.Text>For Next Seven Days</Card.Text></Col>
                            <Col style={{ marginRight: "-170px" }}><Card.Text> 25%</Card.Text></Col>
                                </Row>
                    </Card></Col>
                    <Col><Card style={{ padding: "10px", fontSize: "12px", borderRadius: "15px",width:"83%",marginLeft:"12%" }}>
                        <Row>
                            <Col><Card.Text>Go-MMT Occupancy Share</Card.Text></Col><Col xs lg="2"><Figure.Image width={13} height={13} alt="info" src={info} /></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col><h2 style={{color:"#733CAB" , fontWeight:"600"}}>8.65K</h2></Col>
                            <Col  style={{ marginRight: "-60px" }}><Card.Text className='cover1' style={{ background: "#3DAD3B1F"}}>+ 45.01% &nbsp; <Figure.Image width={13} height={13} alt="uparrow" src={uparrowgreen} /></Card.Text></Col>
                      {/*  <Col><div style={{ width: "40px", height: "40px", marginLeft: "190px" }}>
                            <CircularProgressbar value={percentage2} text={`${percentage2}%`}
                                styles={buildStyles({
                                    rotation: 0.5,
                                    textSize: '20px',
                                    pathColor: '#6E73EA',
                                    textColor: 'black',
                                    trailColor: 'none',
                                    backgroundColor: 'none',
                                })} /></div></Col>*/}</Row>
                                <br/>
                                <Row>
                            <Col><Card.Text>For Next Seven Days</Card.Text></Col>
                            <Col style={{ marginRight: "-170px" }}><Card.Text> 62.7K</Card.Text></Col>
                                </Row>
                    </Card></Col>
                    <Col><Card style={{ padding: "10px", fontSize: "12px", borderRadius: "15px",width:"83%",marginLeft:"10%" }}>
                        <Row>
                            <Col><Card.Text>Today's Revenue</Card.Text></Col><Col xs lg="2"><Figure.Image width={13} height={13} alt="info" src={info} /></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col><h2 style={{color:"#733CAB" , fontWeight:"600"}}>7.0K</h2></Col>
                            <Col  style={{ marginRight: "-85px" }}><Card.Text className='cover'>+ 40% &nbsp; <Figure.Image width={13} height={13} alt="uparrow" src={uparrowgreen} /></Card.Text></Col>
                       {/* <Col><div style={{ width: "40px", height: "40px", marginLeft: "190px" }}>
                            <CircularProgressbar value={percentage3} text={`${percentage3}%`}
                                styles={buildStyles({
                                    rotation: 0.5,
                                    textSize: '20px',
                                    pathColor: '#3DAD3B',
                                    textColor: 'black',
                                    trailColor: 'none',
                                    backgroundColor: 'none',
                                })} /></div></Col>*/}</Row>
                                <br/>
                                <Row>
                            <Col><Card.Text>For Next Seven Days</Card.Text></Col>
                            <Col style={{ marginRight: "-170px" }}><Card.Text> 5.72K</Card.Text></Col>
                                </Row>
                    </Card></Col>
                </Row>
                <Card className="mt-5" style={{ borderRadius: "15px",width:"92%",marginLeft:"6%",height:"60vh" }}>
                    <Card.Body>
                        <Row>
                            <Col md={4}>
                                <Card.Title>Manage Inventory & Rates</Card.Title>
                                <Card.Text className="sm-8 text-muted" className="ms-auto">Rate in:INR</Card.Text>
                            </Col>
                            <Col md={{ span: 3, offset: 3 }} style={{ marginRight: "-120px", marginLeft: "450px" }}>
                                <div className='update'>Bulk Update <Figure.Image width={15} height={17} alt="info" src={rarrow} /></div>
                            </Col>
                            <Col>
                                <ButtonGroup aria-label="Basic example" style={{ marginLeft: "0.5rem" }}>
                                    <Button variant="outline-secondary"><Figure.Image className="arrow"
                                        width={5}
                                        height={5}
                                        alt="arrow"
                                        src={arrow}
                                    /></Button>
                                    <Button variant="outline-secondary"> <Figure.Image className="calendar"
                                        width={15}
                                        height={10}
                                        alt="calendar"
                                        src={calendar}
                                    /></Button>
                                    <Button variant="outline-secondary"><Figure.Image className="arrow"
                                        width={5}
                                        height={5}
                                        alt="arrow"
                                        src={rightarr}
                                       // styles={buildStyles({ rotation: 0.5 })}
                                    /></Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                        <Row className="mt-2" style={{ background: "#EAECFF", marginTop: "10px" }}>
                            <Col style={{ marginTop: "15px", padding: "15px" }}>
                                <Figure.Image className="room"
                                    width={45}
                                    height={45}
                                    alt="room"
                                    src={room}
                                />
                            </Col>
                            <Col>
                                <Card.Text style={{ margin: "30px 0 0 -50px", padding: "15px" ,fontWeight:"600" }}>Rooms and Rates</Card.Text>
                            </Col>
                            <Col className='align'><Card.Text style={{ marginTop: "10px", marginLeft: "35px", padding: "5px",fontWeight:"600"  }}>SUN <h2>31</h2> OCT</Card.Text></Col>
                            <Col style={{ borderLeft: "1px solid grey", padding: "3px" }}><Card.Text style={{ marginTop: "10px", marginLeft: "35px",fontWeight:"600"  }}>MON<h3>01</h3>NOV</Card.Text></Col>
                            <Col style={{ borderLeft: "1px solid grey", padding: "3px" }}><Card.Text style={{ marginTop: "10px", marginLeft: "35px",fontWeight:"600"  }}>TUE<h3>02</h3>NOV</Card.Text></Col>
                            <Col style={{ borderLeft: "1px solid grey", padding: "3px" }}><Card.Text style={{ marginTop: "10px", marginLeft: "35px",fontWeight:"600"  }}>WED<h3>03</h3>NOV</Card.Text></Col>
                            <Col style={{ borderLeft: "1px solid grey", padding: "3px" }}><Card.Text style={{ marginTop: "10px", marginLeft: "35px",fontWeight:"600"  }}>THU<h3>04</h3>NOV</Card.Text></Col>
                            <Col style={{ borderLeft: "1px solid grey", padding: "3px" }}><Card.Text style={{ marginTop: "10px", marginLeft: "35px",fontWeight:"600"  }}>FRI<h3>05</h3>NOV</Card.Text></Col>
                            <Col style={{ borderLeft: "1px solid grey", padding: "3px" }}><Card.Text style={{ marginTop: "10px", marginLeft: "35px",fontWeight:"600"  }}>SAT<h3>06</h3>NOV</Card.Text></Col>
                            <hr />
                        </Row>
                    </Card.Body>
                    <Card.Body style={{marginTop:'-15px'}}>
                        <Row>
                            <Col sm={10}><Card.Text>Data</Card.Text></Col>
                            <Col><Card.Text className="cursor">Expand all <Figure.Image width={20} height={20} alt="plus" src={plus} /></Card.Text></Col>
                        </Row>
                        <hr />
                        <Row style={{ marginTop: "20px" }}>
                            <Col><Card.Text className="text-center own" style={{ width: '15rem' }}><Figure.Image width={20} height={20} alt="info" src={plus} /> Ramsay Couple Suite &nbsp; <Figure.Image className="arrow" width={8} height={20} alt="arrow" src={rightarr} /></Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "53px" }}><Card.Text className="text-center ramsay">1</Card.Text></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "50px" }}><Card.Text className="text-center ramsay">2</Card.Text></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "50px" }}><Figure.Image className="noimg ramsay" width={20} height={20} alt="noimg" src={noimg} /></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "50px" }}><Card.Text className="text-center ramsay">2</Card.Text></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "50px" }}><Figure.Image className="noimg ramsay" width={20} height={20} alt="noimg" src={noimg} /></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "50px" }}><Figure.Image className="noimg ramsay" width={20} height={20} alt="noimg" src={noimg} /></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "50px" }}><Figure.Image className="noimg ramsay" width={20} height={20} alt="noimg" src={noimg} /></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                        </Row>
                    </Card.Body>
                    <Card.Body>
                        <Row style={{ marginBottom: "20px" }}>
                            <Col><Card.Text className="text-center own" style={{ width: '15rem' }}><Figure.Image width={20} height={20} alt="plus" src={plus} /> Magnoila Villa Room A &nbsp;  <Figure.Image className="arrow" width={8} height={20} alt="arrow" src={rightarr} /></Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "53px" }}><Figure.Image className="noimg magnoila" width={20} height={20} alt="noimg" src={noimg} /></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "50px" }}><Figure.Image className="noimg magnoila" width={20} height={20} alt="noimg" src={noimg} /></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "50px" }}><Figure.Image className="noimg magnoila" width={20} height={20} alt="noimg" src={noimg} /></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "50px" }}><Figure.Image className="noimg magnoila" width={20} height={20} alt="noimg" src={noimg} /></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "50px" }}><Figure.Image className="noimg magnoila" width={20} height={20} alt="noimg" src={noimg} /></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "50px" }}><Figure.Image className="noimg magnoila" width={20} height={20} alt="noimg" src={noimg} /></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                            <Col><Card style={{ width: '6rem', height: "4rem", borderRadius: "15px", marginLeft: "50px" }}><Figure.Image className="noimg magnoila" width={20} height={20} alt="noimg" src={noimg} /></Card><Card.Text className="text-muted sold">0 Sold</Card.Text></Col>
                        </Row>
                        <hr/>
                    </Card.Body>
                </Card>
            </div>
        </div >
    )
}

export default dashboard
