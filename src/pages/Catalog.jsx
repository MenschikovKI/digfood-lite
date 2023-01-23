import React from "react";
import {Row, Col} from "react-bootstrap";

// импортируем наши компоненты
import MyCard from "../components/Card";

// страница с каталогом
const Catalog = ({goods}) => {
    return  <Row className="gy-4">
                    <Col xs = {12} ><h1>Каталог товаров</h1></Col>

                    {/* выводим карточки*/}
                    {goods.map(el => <Col xs = {6} sm={4} lg={3} key={el._id}>
                        <MyCard {...el}/>
                    </Col>)}

                    {/*
                    <Col xs = {6} sm={4} md={3}><MyCard name = "1" txt = "1111"/></Col>
                    <Col xs = {6} sm={4} md={3}><MyCard name = "2" txt = "2222"/></Col>
                    <Col xs = {6} sm={4} md={3}><MyCard name = "3" txt = "olololo"/></Col>
                    <Col xs = {6} sm={4} md={3}><MyCard name = "^_^" txt = "@@@@@"/></Col>
                    */}
            </Row>
}

export default Catalog;