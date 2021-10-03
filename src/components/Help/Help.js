import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Help.css'

const Help = (props) => {
    console.log(props.help)
    const { image, topic, shortNote, description } = props.help;
    return (
        <Col>
            <Card className="cards">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{topic}</Card.Title>
                    <Card.Text>
                        {shortNote}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Help;