import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
import { FcHome, FcAbout, FcDocument, FcIdea } from "react-icons/fc";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        {/* <img src={Logo} alt="" /> */}
      </a>
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li>
              <a href="#home" className="nav__link">
                <FcHome />
              </a>
            </li>
            <li>
              <a href="#about" className="nav__link">
                <FcAbout />
              </a>
            </li>
            <li>
              <a href="#services" className="nav__link">
                <FcIdea />
              </a>
            </li>
            <li>
              <a href="#career" className="nav__link">
                <FcDocument />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav__footer"></div>
    </aside>
  );
};

export default Sidebar;
