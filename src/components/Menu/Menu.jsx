import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Giới thiệu</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
        <a href="#homepage">Trang chủ</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Dịch vụ</a>
        </li>
         <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Liên hệ</a>
        </li>
      </ul>
    </div>
  );
}