import { HeaderProps } from "../../common/types";
import { Button } from "../Button";
import "./header.style.scss";

const Header = ({ setFilter, setOffset }: HeaderProps): JSX.Element => {
  const handleClick = (target: string) => {
    setOffset(0);
    if (target === "all") {
      setFilter("");
    } else {
      setFilter(target);
    }
  };

  return (
    <header>
      <Button onClick={() => handleClick("all")}>All</Button>
      <Button onClick={() => handleClick("format=comic&")}>Comic</Button>
      <Button onClick={() => handleClick("format=magazine&")}>Magazine</Button>
      <Button onClick={() => handleClick("format=digital%20comic&")}>
        Digital Comic
      </Button>
    </header>
  );
};

export default Header;
