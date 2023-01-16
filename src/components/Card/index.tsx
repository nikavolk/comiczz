import { useState } from "react";
import { CardProps } from "../../common/types";
import { Button } from "../Button";

const Card = ({
  id,
  thumbnail,
  title,
  price,
  extension,
  onMoreInfoClick,
}: CardProps): JSX.Element => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <article>
      <div>
        <img src={`${thumbnail}.${extension}`} alt={`${title} cover art`} />
      </div>
      <div>{title}</div>
      <div>{price === 0 ? "N/A" : `${price}€`}</div>
      <Button onClick={() => onMoreInfoClick(id)}>More info</Button>
    </article>
  );
};

export default Card;
