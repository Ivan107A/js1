import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Framework</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://cms-assets.tutsplus.com/uploads/users/30/posts/32053/image/freebiesupply.jpg"/>
                                    <p>
                                       Lorem opsum dilir sit amet. Lorem opsum dilir sit amet. Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://cdn.dribbble.com/users/372375/screenshots/4990112/800.png"/>
                                    <p>
                                       Lorem opsum dilir sit amet. Lorem opsum dilir sit amet. Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                    </p>
                                    <p>
                                       Lorem opsum dilir sit amet. Lorem opsum dilir sit amet. Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://i.ytimg.com/vi/jp4HtueUsFg/maxresdefault.jpg"/>
                                    <p>
                                       Lorem opsum dilir sit amet. Lorem opsum dilir sit amet. Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://i.pinimg.com/originals/e7/7c/56/e77c56375f5d1196c02282259556639d.png"/>
                                    <p>
                                       Lorem opsum dilir sit amet. Lorem opsum dilir sit amet. Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://cdn.freebiesupply.com/images/thumbs/2x/unfold-figma-ama-a83.jpg"/>
                                    <p>
                                       Lorem opsum dilir sit amet. Lorem opsum dilir sit amet. Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                       Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.Lorem opsum dilir sit amet.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }

}