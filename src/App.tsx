import { useEffect, useState } from "react";
import Header from "./components/Header";
import CardList from "./components/CardList";
import { ComicsData } from "./common/types";
import DetailsCard from "./components/DetailsCard";
import Breadcrumbs from "./components/Breadcrumbs";
import "./App.style.scss";

function App() {
  const [comicsData, setComicsData] = useState<ComicsData[]>([]);
  const [offset, setOffset] = useState(0);
  const [filter, setFilter] = useState("");
  const [selectedComic, setSelectedComic] = useState(0);
  const [breadcrumb, setBreadcrumb] = useState("");

  // fetches list of comics and reloads when filter changes
  useEffect(() => {
    const fetchComicsData = async () => {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/comics?${
          filter && filter
        }limit=20&apikey=${process.env.REACT_APP_API_KEY}`,
      );
      const data = await response.json();

      setComicsData(data.data.results);
    };

    fetchComicsData();
  }, [filter]);

  // fetches a list of comics with an optional filter, loads data
  // on every offset state update and updates comics data with new data

  useEffect(() => {
    if (filter) {
      const fetchComicsData = async () => {
        const response = await fetch(
          `https://gateway.marvel.com:443/v1/public/comics?${
            filter && filter
          }limit=20&offset=${offset}&apikey=${process.env.REACT_APP_API_KEY}`,
        );
        const data = await response.json();

        setComicsData((comicsData) => [...comicsData, ...data.data.results]);
      };
      fetchComicsData();
    }
  }, [offset]);

  // load more function increments offset parameter for API call
  const loadMore = async () => {
    setOffset(offset + 20);
  };

  return (
    <>
      <Header
        setFilter={setFilter}
        setOffset={setOffset}
        setBreadcrumb={setBreadcrumb}
      />
      <main className="main-wrapper">
        <Breadcrumbs breadcrumb={breadcrumb} />
        <CardList
          data={comicsData}
          loadMore={loadMore}
          setSelectedComic={setSelectedComic}
        />
        {selectedComic > 0 && (
          <DetailsCard
            selectedComic={selectedComic}
            setSelectedComic={setSelectedComic}
          />
        )}
      </main>
    </>
  );
}

export default App;
