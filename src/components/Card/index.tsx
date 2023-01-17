import { CardProps } from "../../common/types";
import { Button } from "../Button";
import "./Card.style.scss";

const Card = ({
  id,
  thumbnail,
  title,
  price,
  extension,
  setSelectedComic,
}: CardProps): JSX.Element => {
  return (
    <article className="card-container">
      <div>
        <img
          src={`${thumbnail}/portrait_fantastic.${extension}`}
          alt={`${title} cover art`}
        />
      </div>
      <h1>{title}</h1>
      <div className="card-container__price">
        {price === 0 ? "N/A" : `${price} €`}
      </div>
      <Button onClick={() => setSelectedComic(id)}>More info</Button>
    </article>
  );
};

export default Card;
