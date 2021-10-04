import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Help.css'

const Help = (props) => {
    const { image, topic, description } = props.help;
    return (
        <Col>
            <Card className="cards">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{topic}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Help;