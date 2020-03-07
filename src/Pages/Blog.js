import React, { Component } from 'react';
import { Media, Container, Col, Row, Card, ListGroup } from "react-bootstrap";


export default class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://image.shutterstock.com/image-vector/js-j-s-letter-logo-260nw-1630593262.jpg"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://image.shutterstock.com/image-vector/js-j-s-letter-logo-260nw-1630593262.jpg"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://image.shutterstock.com/image-vector/js-j-s-letter-logo-260nw-1630593262.jpg"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://image.shutterstock.com/image-vector/js-j-s-letter-logo-260nw-1630593262.jpg"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                    lorem ipsun dolor dilir amet meta elitta tapotta wafming lotetto
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }

}