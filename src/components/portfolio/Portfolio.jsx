import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {useEffect, useState} from "react";
import {service1, service2, service3, service4} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("service1")
    const [data, setData] = useState([]);
    const list = [
        {
            id: "service1",
            title: "VẬN CHUYỂN HÀNG HÓA"

        }, {
            id: "service2",
            title: "DI DỜI KHO XƯỞNG"
        }, {
            id: "service3",
            title: "CHO THUÊ XE TẢI"
        }, {
            id: "service4",
            title: "DỊCH VỤ CẨU HÀNG"
        }
    ];

    useEffect(() => {

        switch (selected) {
            case "service1":
                setData(service1);
                break;
            case "service2":
                setData(service2);
                break;
            case "service3":
                setData(service3);
                break;
            case "service4":
                setData(service4);
                break;
            default:
                setData(service1)
        }

    }, [selected])
    return (

        <div className="portfolio" id="portfolio">
            <h1>DỊCH VỤ</h1>
            <ul>{
                    list.map((item) => (
                        <PortfolioList
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}/>
                    ))
                }
            </ul>
            <div className="center">
                <div className="left">
                    {
                        data.map((d) => (
                            <div className="item">
                                <img src={d.img} alt=""/>
                            </div>
                        ))
                    }
                </div>

                <div className="right">
                    <div className="hamburger">
                        <div>{data.map((d) => (<b className="tieude">{d.title}</b>))}</div>
                        {data.map((d) => (<div className="content">{d.content}</div>))}
                    </div>
                        <li>Chi tiết liên hệ <b>Hotline: +84 858 51 99 51</b></li>
                </div>

            </div>

        </div>
    );
}
