// рекламный блок
import React from "react";
import {Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const Block = ({pic, bg, caption, text}) => { // сокрашение записи props
    let style = {
        backgroundSize: "auto 200%",
        backgroundColor: bg,
        borderTop: "10px solid",
        borderColor: bg,
        borderRadius: "30px",
        boxShadow: "0px 30px 40px -20px hsl(0, 0%, 98%)",
        padding: "30px",
        margin: "20px" ,
    };
    return <Row style={style} className="h-200">
        <Col xs = {9}>
            <h2>{caption}</h2>
            <p className="text-dark">{text}</p>
        </Col>
        <Col xs = {3}>
            <img src={pic} alt={caption} className="w-75"/>
        </Col>
    </Row>
}

export default Block;

