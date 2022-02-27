import { useState } from "react";
import "./intro.scss"

export default function Intro() {
    const [currentSlide, setCurrentSlide] =useState(0);
    const data = [
        {
            id: "1",
            title: "Vận tải hàng hóa",
            desc: "Hãy đến với dịch vụ Vận tải đường bộ hàng đầu của công ty HT Logistics, vận chuyển hàng từ nơi gửi đến nơi nhận hàng, Công ty Vận tải chúng tôi với nhiều năm kinh nghiệm trong lĩnh vực vận chuyển hàng hóa sẽ cung cấp tới Quý khách hàng dịch vụ Vận chuyển hàng hóa vô cùng tiện ích và nhanh gọn.", 
            LH:"Hotline: +84 858 51 99 51",
            background: "assets/bg1.jpg"
            
        },
        {
            id: "2",
            title: "Cho thuê xe tải",
            desc:
              "Tiêu chuẩn chất lượng dịch vụ hàng đầu. Đáp ứng nhanh nhất những yêu cầu của khách hàng. Đội ngũ nhân viên nhiều kinh nghiệm, nhiệt tình, chăm chỉ, có trách nhiệm cao đối với hàng hóa, chi phí cũng như thời gian vận chuyển chính xác.",
            LH:"Hotline: +84 858 51 99 51",
        },
        {
            id: "3",
            title: "Dịch vụ cẩu hàng",
            desc:
              " Cho thuê xe cẩu, vận chuyển, bốc dỡ hàng hóa máy móc, đưa thiết bị lên cao, xuống tầng hầm. Đặt lợi ích khách hàng lên đầu. Phục vụ lắp đặt tại các nhà máy, công trường xây dựng. Xe cẩu có kiểm định, lái xe cẩu có chứng chỉ cẩu. ",
            LH:"Hotline: +84 858 51 99 51",
        },
    ];

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };
    return (
        <div className="intro" id="intro">
            <div className="slider" 
                style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                        <div className="container">
                            <div className="item">
                                <div className="right">
                                    <div className="rightContainer">
                                        <h1>{d.title}</h1>
                                        <p>{d.desc}</p>
                                        <li>{d.LH}</li>
                                    </div>
                                </div>
                            </div>
                        
                         </div>
                    ))}
            </div>
            {data.map((d) => (
            <div className="background"><img src={d.background} alt=""/></div>))}
            <a href="#homepage">
                    <img src="assets/arrow.png" 
                    alt=""/>
                </a>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    )
}
