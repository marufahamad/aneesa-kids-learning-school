import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Help from '../Help/Help';
import './HowWeHelp.css'


const HowWeHelp = () => {
    const [helps, setHelps] = useState([])

    useEffect(() => {
        fetch('./howWeHelp.JSON')
            .then(res => res.json())
            .then(data => setHelps(data))
    }, [])
    return (
        <div className="new-background mt-3 py-2">
            <h1 className="text-white ">HOW WE HELP</h1>
            <h3>We work individually with each family to
                understand their specific needs</h3>

            <Row xs={1} md={2} className="g-4 m-3">
                {
                    helps.map(help => <Help
                        key={help.id}
                        help={help}></Help>)
                }
            </Row>
        </div>
    );
};

export default HowWeHelp;