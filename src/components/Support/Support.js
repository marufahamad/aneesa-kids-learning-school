import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Support = (props) => {
    const { image, topic, shortNote } = props.support;
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

export default Support;