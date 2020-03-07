import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck className="m-4">
                        <Card bg="light" border="success" text="primary">
                            <Card.Img 
                                variant="top" 
                                src="https://image.shutterstock.com/image-photo/team-colleagues-brainstorming-together-while-260nw-527845618.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dilir sit amet elit fugaiat dicta popais amofalas geggebon maneska.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                       </Card>
                       <Card>
                            <Card.Img 
                                variant="top" 
                                src="https://image.shutterstock.com/image-photo/successful-company-happy-workers-260nw-722985031.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dilir sit amet elit fugaiat dicta popais amofalas geggebon maneska.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                       </Card>
                       <Card>
                            <Card.Img 
                                variant="top" 
                                src="https://image.shutterstock.com/image-photo/business-colleagues-working-busy-open-260nw-656511280.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dilir sit amet elit fugaiat dicta popais amofalas geggebon maneska.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                       </Card>
                       <Card>
                            <Card.Img 
                                variant="top" 
                                src="https://image.shutterstock.com/image-photo/attractive-office-worker-standing-260nw-674751025.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dilir sit amet elit fugaiat dicta popais amofalas geggebon maneska.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                       </Card>
                    </CardDeck>
                </Container>
            </>
        
        );
    }

}