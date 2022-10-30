import { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { apiGet } from "../misc/config";

interface IShowProps {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: { time: string; days: string[] };
  rating: { average: number };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  webChannel: null;
  dvdCountry: null;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
    };
  };
}

interface IApiProps {
  score: number;
  show: IShowProps;
}

const Home = () => {
  const [input, setInput] = useState<string>("");
  const [results, setResults] = useState<IApiProps[]>([]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then((newResult) =>
      setResults(newResult)
    );

    setInput("");
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        value={input}
        onChange={handleOnChange}
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={onSearch}>
        Search...
      </button>
      {results.length === 0 && <div>Sorry, no response!!!</div>}
      <div>
        {results.length > 0 &&
          results.map((item) => <div key={item.show.id}>{item.show.name}</div>)}
      </div>
    </MainPageLayout>
  );
};

export default Home;
