import React, { useState, useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import leftpicture from '../assests/login.svg';
import logo from '../assests/zonzo logo new.svg';
import background from '../assests/background.svg';
import { Button, Form, Container, Image, Row, Col, Card, Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/login.css'
import { height } from 'dom-helpers';

function login() {
{/*    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('/add')
        }
    }, [])
    async function login() {
        let item = { email, password };
        let result = await fetch("http://localhost:3000/users",
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            localStorage.setItem(JSON.stringify(result))
            history.push("/add")
    } */}
    return (
        <div className="login-background" style={{ backgroundImage: `url(${background}`, height: "100vh",overflow: "hidden"  }}>
              <Row>
                    <Col xs={3} md={3}>
                        <Figure.Image className="login-logo"
                            width={100}
                            height={100}
                            alt="logo"
                            src={logo}
                        />
                    </Col>
                </Row>
            <Container>
                <Row>
                    <Col><Image style={{ width: "430px", height: "430px" }} src={leftpicture} />
                        
                            <div className="know">Know More</div></Col>
                    <Col>
                        <Card style={{ padding: "50px", marginLeft: "130px", height: "75vh", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",width:"75%" }}>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="Userid">
                                        <Card.Title className="text-center">Welcome to THE ZONZO</Card.Title><br />
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="email" /* onChange={(e) => setEmail(e.target.value)} *//>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="Passid" md>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" /* onChange={(e) => setPassword(e.target.value)} *//>
                                    </Form.Group>
                                    <Card.Text className="text-right text-muted " style ={{cursor:"pointer"}}>Forgot Password</Card.Text>
                                    <div className="d-flex justify-content-center default">
                                    <div className="login"><a href="./dashboard"  onClick={login}>Login</a></div></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default login
