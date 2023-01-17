import { CardListProps } from "../../common/types";
import Card from "../Card";
import { Button } from "../Button";

const CardList = ({
  isLoading,
  data,
  loadMore,
  setSelectedComic,
}: CardListProps): JSX.Element => {
  return (
    <div>
      {data.length
        ? data.map((comic) => (
            <Card
              id={comic.id}
              key={comic.id}
              thumbnail={comic.thumbnail.path}
              extension={comic.thumbnail.extension}
              title={comic.title}
              price={comic.prices[0].price}
              setSelectedComic={setSelectedComic}
            />
          ))
        : null}
      <div>
        <Button onClick={loadMore}>Load More</Button>
      </div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default CardList;
