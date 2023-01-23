import React from "react";
import {Card, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// создаем карточку
const MyCard = (props) => {
    const navigate = useNavigate();
    const handler = () => {
        navigate(`/product/${props._id}`);
    }

    
    return <Card onClick={handler} className="h-100">
    <Card.Img src={props.pictures} className="w-auto"></Card.Img>
    <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text> {props.description.slice(0,11)}...</Card.Text>
        <Button>В корзину</Button>
    </Card.Body>
</Card>
}

// экспортируем компонент
export default MyCard;