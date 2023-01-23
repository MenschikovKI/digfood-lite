// рекламный блок
import React from "react";
import {Row, Col} from "react-bootstrap";


const Block = ({pic, bg, caption, text}) => { // сокрашение записи props
    let style = {
        backgroundImage: "url(https://abrakadabra.fun/uploads/posts/2022-01/thumbs/1643130833_19-abrakadabra-fun-p-pattern-lapki-41.png)",
        backgroundSize: "auto 200%",
        backgroundColor: bg
    };
    return <Row style={style}>
        <Col xs = {8}>
            <h3>{caption}</h3>
            <p>{text}</p>
        </Col>
        <Col xs = {4}>
            <img src={pic} alt={caption}  className="w-75"/>
        </Col>
    </Row>
}

export default Block;

