import { HeaderProps } from "../../common/types";
import { Button } from "../Button";
import "./header.style.scss";
import logo from "../../globals/assets/logo2.svg";

const Header = ({
  setFilter,
  setOffset,
  setBreadcrumb,
}: HeaderProps): JSX.Element => {
  const handleClick = (target: string) => {
    setOffset(0);
    if (target === "all") {
      setFilter("");
    } else {
      setFilter(target);
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container__logo">
          <img src={logo} alt="Whoosh logo" className="header__logo-img" />
        </div>
        <ul role="navigation" className="header__container__navigation-ul">
          <li
            className="header__container__navigation-li"
            onClick={() => {
              handleClick("all");
              setBreadcrumb("");
            }}
          >
            All
          </li>
          <li
            className="header__container__navigation-li"
            onClick={() => {
              handleClick("format=comic&");
              setBreadcrumb("Comics");
            }}
          >
            Comic
          </li>
          <li
            className="header__container__navigation-li"
            onClick={() => {
              handleClick("format=magazine&");
              setBreadcrumb("Magazines");
            }}
          >
            Magazine
          </li>
          <li
            className="header__container__navigation-li"
            onClick={() => {
              handleClick("format=digital%20comic&");
              setBreadcrumb("Digital comics");
            }}
          >
            Digital comic
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
