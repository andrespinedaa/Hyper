import { Link } from "react-router-dom";
import "./css/navbar.css";

interface props {
  links: string[];
  section: string;
}

function Navbar({ links, section }: props) {
  return (
    <nav className="navbar">
      <ul className={"navbar__menu--" + section}>
        {links.map((link) => {
          return (
            <li className="navbar__menu--item">
              <Link to={`/${link}`}>{link}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
