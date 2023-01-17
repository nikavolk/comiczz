import { CardListProps } from "../../common/types";
import Card from "../Card";
import InfiniteScroll from "react-infinite-scroll-component";
import "./CardList.style.scss";

const CardList = ({
  data,
  loadMore,
  setSelectedComic,
}: CardListProps): JSX.Element => {
  return (
    <InfiniteScroll
      dataLength={data.length} //This is important field to render the next data
      next={loadMore}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>No more entries</b>
        </p>
      }
    >
      <div className="main-wrapper__list">
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
      </div>
    </InfiniteScroll>
  );
};

export default CardList;
