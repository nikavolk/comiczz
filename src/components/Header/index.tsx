import { HeaderProps } from "../../common/types";
import { Button } from "../Button";
import "./header.style.scss";

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
    <header>
      <div>logo</div>
      <nav>
        <Button
          onClick={() => {
            handleClick("all");
            setBreadcrumb("");
          }}
        >
          All
        </Button>
        <Button
          onClick={() => {
            handleClick("format=comic&");
            setBreadcrumb("Comics");
          }}
        >
          Comic
        </Button>
        <Button
          onClick={() => {
            handleClick("format=magazine&");
            setBreadcrumb("Magazines");
          }}
        >
          Magazine
        </Button>
        <Button
          onClick={() => {
            handleClick("format=digital%20comic&");
            setBreadcrumb("Digital comics");
          }}
        >
          Digital Comic
        </Button>
      </nav>
    </header>
  );
};

export default Header;
