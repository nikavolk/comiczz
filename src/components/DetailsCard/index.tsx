import { useEffect, useState } from "react";
import { ComicData, DetailsCardProps } from "../../common/types";
import { Button } from "../Button";

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

  console.log("details card ", comicData);

  return (
    <div>
      <div>
        <img
          src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
          alt={`${comicData.title} cover art`}
        />
      </div>
      <div>{comicData.title}</div>
      <ul>
        <li>Year of release: {year ? year : "N/A"}</li>
        <li>Format: {comicData.format}</li>
        <li>
          Pages: {comicData.pageCount === 0 ? "N/A" : comicData.pageCount}
        </li>
        <li>
          Characters:{" "}
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
        <li>
          Creators:{" "}
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
        <li>
          DiamondCode:{" "}
          {comicData.diamondCode.length > 0 ? comicData.diamondCode : "N/A"}
        </li>
        <div>{comicData.prices[0].price} €</div>
      </ul>
      <Button onClick={() => setSelectedComic(0)}>Close</Button>
    </div>
  );
};

export default DetailsCard;
