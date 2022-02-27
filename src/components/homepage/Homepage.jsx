import "./homepage.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Homepage() {
    const textRef = useRef();


    useEffect(() =>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1000,
            backSpeed:60,
            strings: ["vận chuyển hàng hóa", "cho thuê xa tải", "chuyển nhà trọn gói"]
        })
    }, [])
    return (
        <div className="homepage" id="homepage">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/hinh1.png"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Xin chào, Chúng tôi là</h2>
                    <h1>Vận tải HT Logistics</h1>
                    <h3>Công ty vận tải <span ref={textRef}></span></h3>
                    <h4>Liên hệ: +84 858 51 99 51</h4>
                    <h4>Địa chỉ: DX007, tổ 7, Kp Tây A, P. Đông Hòa, TX. Dĩ An, T. Bình Dương, TP.HCM</h4>
                </div>  

                <a href="#portfolio">
                    <img src="assets/down.png" 
                    alt=""/>
                </a>
            </div>
        </div>
    )
}
