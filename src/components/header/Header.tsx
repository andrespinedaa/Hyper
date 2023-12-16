import Navbar from "./Navbar";
import Lang from "./Lang";
import "./css/header.css";

function Header() {
  return (
    <header className="header">
      <figure className="header__logo">
        <figcaption className="header__logo--name">Hiper</figcaption>
      </figure>
      <Navbar type="header"/>
      <Lang />
    </header>
  );
}

export default Header;
