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
      <div className="card-container__img-title">
        <img
          src={`${thumbnail}/portrait_fantastic.${extension}`}
          alt={`${title} cover art`}
        />
        <h1>{title}</h1>
      </div>
      <div className="card-container__price-btn">
        <div className="card-container__price-btn__price">
          {price === 0 ? "N/A" : `${price} €`}
        </div>
        <Button onClick={() => setSelectedComic(id)}>More info</Button>
      </div>
    </article>
  );
};

export default Card;
