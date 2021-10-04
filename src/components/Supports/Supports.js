import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Support from '../Support/Support';

const Supports = () => {
    const [supports, setSupports] = useState([])

    useEffect(() => {
        fetch('./howWeHelp.JSON')
            .then(res => res.json())
            .then(data => setSupports(data))
    }, [])
    return (
        <div className="mt-3 py-2">
            <h1 className="text-white ">OUR SUPPORTS</h1>
            <h3>We work individually with each family to
                understand their specific needs</h3>

            <Row xs={1} md={4} className="g-4 m-3">
                {
                    supports.map(support => <Support support={support}></Support>)
                }
            </Row>
        </div>
    );
};

export default Supports;