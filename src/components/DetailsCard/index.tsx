import { useEffect, useState } from "react";
import { ComicData, DetailsCardProps } from "../../common/types";
import { Button } from "../Button";
import "./DetailsCard.style.scss";

const DetailsCard = ({
  selectedComic,
  setSelectedComic,
}: DetailsCardProps): JSX.Element => {
  const [loading, setIsLoading] = useState(false);
  const [comicData, setComicData] = useState<ComicData>({
    title: "",
    thumbnail: { path: "", extension: "" },
    dates: [{ date: "" }, { date: "" }],
    format: "",
    pageCount: 0,
    characters: {
      items: [{ name: "" }],
    },
    creators: {
      items: [{ name: "" }],
    },
    diamondCode: "",
    prices: [{ price: 0 }],
  });

  useEffect(() => {
    const fetchComicsData = async () => {
      setIsLoading(true);

      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics/${selectedComic}?apikey=${process.env.REACT_APP_API_KEY}`,
      );
      const data = await response.json();

      setComicData(data.data.results[0]);

      setIsLoading(false);
    };

    fetchComicsData();
  }, []);

  let date = new Date(comicData.dates[1].date);
  let year = date.getFullYear();

  if (loading) {
    return (
      <div className="details-card-background">
        <div className="details-card-container">
          <div className=".details-card-container__content">Loading</div>
        </div>
      </div>
    );
  }

  return (
    <div className="details-card-background">
      <div className="details-card-container">
        <div
          onClick={() => setSelectedComic(0)}
          className="details-card-container__btn-close"
        >
          X
        </div>
        <div>
          <img
            src={`${comicData.thumbnail.path}/portrait_fantastic.${comicData.thumbnail.extension}`}
            alt={`${comicData.title} cover art`}
          />
        </div>
        <div className="details-card-container__content">
          <h2>{comicData.title}</h2>
          <ul className="details-card-container__content-ul">
            <li className="details-card-container__content-li">
              <span>Year of release:</span> {year ? year : "N/A"}
            </li>

            <li className="details-card-container__content-li">
              <span>Format:</span> {comicData.format}
            </li>

            <li className="details-card-container__content-li">
              <span>Pages:</span>{" "}
              {comicData.pageCount === 0 ? "N/A" : comicData.pageCount}
            </li>
            <li className="details-card-container__content-li">
              <span>Characters:</span>{" "}
              {comicData.characters.items.length
                ? comicData.characters.items.map((char, index) => {
                    if (index === comicData.characters.items.length - 1) {
                      return char.name;
                    } else {
                      return char.name + ", ";
                    }
                  })
                : "N/A"}
            </li>
            <li className="details-card-container__content-li">
              <span>Creators:</span>{" "}
              {comicData.creators.items.length
                ? comicData.creators.items.map((creator, index) => {
                    if (index === comicData.creators.items.length - 1) {
                      return creator.name;
                    } else {
                      return creator.name + ", ";
                    }
                  })
                : "N/A"}
            </li>
            <li className="details-card-container__content-li">
              <span>DiamondCode:</span>{" "}
              {comicData.diamondCode.length > 0 ? comicData.diamondCode : "N/A"}
            </li>
          </ul>{" "}
          <div className="details-card-container__content__misc">
            <span>{comicData.prices[0].price} €</span>
            <Button onClick={() => setSelectedComic(0)}>Close</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
