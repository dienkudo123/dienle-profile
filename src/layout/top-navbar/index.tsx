import "./index.scss"

const TopNavbar = () => {
  return (
    <nav className="top-navbar">
      <div className="navbar-left">
      </div>
      <ul className="navbar-right">
        <li><a href="#about">Giới thiệu</a></li>
        <li><a href="#skills">Kỹ năng</a></li>
        <li><a href="#projects">Dự án</a></li>
        <li><a href="#contact">Liên hệ</a></li>
      </ul>
    </nav>
  );
};

export default TopNavbar;