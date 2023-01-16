import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardList from "./components/CardList";
import { Data, FilterState } from "./common/types";

function App() {
  const [comicsData, setComicsData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [filter, setFilter] = useState("");

  // fetches list of comics
  useEffect(() => {
    const fetchComicsData = async () => {
      setIsLoading(true);

      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?${
          filter && filter
        }limit=20&apikey=${process.env.REACT_APP_API_KEY}`,
      );
      const data = await response.json();

      //setComicsData([...comicsData, ...data.data.results]);
      setComicsData(data.data.results);

      setIsLoading(false);
    };

    fetchComicsData();
  }, [filter]);

  useEffect(() => {
    const fetchComicsData = async () => {
      setIsLoading(true);

      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?${
          filter && filter
        }limit=20&offset=${offset}&apikey=${process.env.REACT_APP_API_KEY}`,
      );
      const data = await response.json();

      setComicsData([...comicsData, ...data.data.results]);

      setIsLoading(false);
    };

    fetchComicsData();
  }, [offset]);

  const loadMore = async () => {
    setIsLoading(true);
    setOffset(offset + 20);
    setIsLoading(false);
  };

  console.log(comicsData);

  return (
    <div>
      <header>
        <Header setFilter={setFilter} setOffset={setOffset} />
      </header>
      <CardList isLoading={isLoading} data={comicsData} loadMore={loadMore} />
    </div>
  );
}

export default App;
