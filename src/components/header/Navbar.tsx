import { Link } from "react-router-dom";
import "./css/navbar.css";

interface props {
  type: string;
}

function Navbar({ type }: props) {
  return (
    <nav className="navbar">
      <ul className={"navbar__menu--" + type}>
        <li className="navbar__menu--item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="navbar__menu--item">
          <Link to={"/panels"}>Panels</Link>
        </li>
        <li className="navbar__menu--item">
          <Link to={"/"}>CutList</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
