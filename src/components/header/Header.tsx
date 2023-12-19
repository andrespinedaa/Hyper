import Navbar from "./Navbar";
import Lang from "./Lang";
import "./css/header.css";
import { useSelector } from "react-redux";
import { RootState } from "../../context/store";

function Header() {
  const lang = useSelector((state: RootState) => state.LANG.current);
  const { header } = lang;

  return (
    <header className="header">
      <figure className="header__logo">
        <figcaption className="header__logo--name">Hiper</figcaption>
      </figure>
      <Navbar links={header.menu} section="header" />
      <Lang />
    </header>
  );
}

export default Header;
