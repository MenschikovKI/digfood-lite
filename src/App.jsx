import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";

import {Routes, Route, Link} from "react-router-dom";


// импортируем страницы
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
// импортируем части страницы
import Header from "./components/Header"


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNjU5Yjk4YjAzOGY3NzlkMDYiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NDcsImV4cCI6MTY5OTQ0Nzk0N30.Spi_jwCabu9qbgWngRXkKp3-Pin66en2TW9A7dejHSE";


export default () => {
    const [goods, setGoods] = useState([]); // [] - аргумент по умолчанию
    useEffect(()=>{
        fetch("https://api.react-learning.ru/products", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setGoods(data.products);
        })
    }, []); // забираем данные с сервера, срабатывает один раз при загрузке станицы, второй аргумент создает зависимость
    return <>

        <Header/>
        <main>
            {/*
                Col:
                    xs - сколько столбцов от 1 до 12 занимает элемент по  ширине для мобильного устройства
                    sm - большой телефон или маленький планшет
                    md - планшет
                    xl - компьтер
                    xxl - большой монитор
            */}
            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalog" element={<Catalog goods={goods}/>}/>
                    <Route path="/product/:id" element={<Product token={token}/>}/>
                </Routes>
            </Container>

        </main>
        <footer className="container-fluid d-flex align-items-center">
            <Container>
            © 2023 Изучение React by Leksa
            </Container>
        </footer>
    </>
}
