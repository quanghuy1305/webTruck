import "./topbar.scss"
import {Phone,Mail} from "@material-ui/icons"

import Menu from "../Menu/Menu"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
           
            <div className="wrapper" >
                <div className="left">
                    <a href="#intro" className="logo">
                    <img 
                            className="topImg" 
                            src="assets/lg.png"
                            alt="" 
                        />
                     </a>
                </div>
                <div className="right">
                <li> <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/></li>
                <div className="itemContainer">
                       <Phone className="icon"/>
                       <span>Hotline: </span> 
                       <b> +84 858 51 99 51</b>
                    </div>
                    <div className="itemContainer">
                       <Mail className="icon"/>
                       <span>Email: </span>
                       <b> quanghuy@gmail.com </b>
                    {/* {/* <button type="button" className="nav-btn">
                        <FaAlignRight className="nav-icon"/> 
                    </button> */}
                    </div>
                </div>
                </div>
        </div>
    )
}