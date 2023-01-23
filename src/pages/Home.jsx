import React from "react";
import {Row, Col} from "react-bootstrap";

// импортируем наши компоненты
import AdBlock from "../components/AdBlock";
                    

let ads =[
    {
        caption: "Лакомка",
        text: "Лакомство созданное для снижения образования зубного камня у собак мелких пород",
        bg: "violet",
        pic: "https://files.lavkapitomca.ru/storage/product/00/46/30/photo/page/bar111.png"
    },

    {
        caption: "Органикс",
        text: "Утиное феле на косточке с кальцием",
        bg: "springgreen",
        pic: "https://files.lavkapitomca.ru/storage/product/00/89/80/photo/kpkerk.png"
    },

    {
        caption: "Утконосик",
        text: "Вкуснейшее лакомство для собак, обогащенное кальцием для здоровья зубов и костей в натуральном утином мясе",
        bg: "lightblue",
        pic: "https://files.lavkapitomca.ru/storage/product/00/38/52/photo/page/Mnyams-Kalczinirovannye-Kostochki-s-utinym-myasom.png"
    },
    
    {
        caption: "Мини-колбаски из Ягненка",
        text: "Обладают высокой вкусовой привлекательность, идеально подходят в качестве ежедневного угощения и поощрения во время тренировок",
        bg: "springgreen",
        pic: "https://files.lavkapitomca.ru/storage/product/01/30/44/photo/page/wCt5JbAo.png"
    },
    {
        caption: "Мясные Лакомства",
        text: "Мясные медальоны из утки с тыквой - это натуральное мясное лакомство, богатое витаминами и микроэлементами. Высокое содержание аминокислот в составе мяса утки способствует укреплению иммунитета вашего питомца.",
        bg: "lightblue",
        pic: "https://files.lavkapitomca.ru/storage/product/01/16/93/photo/page/rtjuyguoui.png"
    },
    {
        caption: "Рубец Говяжий",
        text: "Рубец говяжий способствует улучшению пищеварения и устранению дисбактериоза. Ворсинки неочищенного сушёного рубца богаты ферментами и витаминами группы «В»",
        bg: "lightblue",
        pic: "https://files.lavkapitomca.ru/storage/product/00/85/75/photo/page/f0cbc3bf13179bf5cba2ddbc97ff8ec6.png"
    },

]


// домашняя страница
const Home = () => {
    return <>
    {/* выводим рекламный блок*/}
    <h1>Акции</h1>
    <Row className="gx-5 gy-4">
        <Col xs={12}>
            <AdBlock {...ads[0]}/>
        </Col>

        <Col xs={12} md = {6}>
            <AdBlock {...ads[1]}/>
        </Col>

        <Col xs={12} md = {6}>
            <AdBlock {...ads[2]}/>
        </Col>

        <Col xs={12}>
            <AdBlock {...ads[3]}/>
        </Col>

        <Col xs={12} md = {6}>
            <AdBlock {...ads[4]}/>
        </Col>

        <Col xs={12} md = {6}>
            <AdBlock {...ads[5]}/>
        </Col>
    </Row>

    </>
}

export default Home;