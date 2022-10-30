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

interface IPersonProps {
  id: number;
  name: string;
  birthday: string;
  country: string;
  deathday: string;
  gender: string;
  image: string;
  updated: number;
  url: string;
}

interface IAll {
  score: number;
  show?: IShowProps;
  person?: IPersonProps;
}

const Home = () => {
  const [input, setInput] = useState<string>("");
  const [results, setResults] = useState<IAll[]>([]);
  const [searchOption, setSearchOption] = useState("shows");
  console.log(results);
  const isShowsSearch = searchOption === "shows";

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) =>
      setResults(result)
    );
    setInput("");
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  const onRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchOption(event.target.value);
  };

  const renderResults = () => {
    if (results.length === 0) {
      return <div>Sorry, no response!!!</div>;
    }

    if (results.length > 0) {
      return results[0].show
        ? results.map((item) => (
            <div key={item.show?.id}>{item.show?.name}</div>
          ))
        : results.map((item) => {
            console.log(item.person);
            return <div key={item.person?.id}>{item.person?.name}</div>;
          });
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for something..."
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />

      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            id="shows-search"
            type="radio"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </label>

        <label htmlFor="actors-search">
          Actors
          <input
            id="actors-search"
            type="radio"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>

      <button type="button" onClick={onSearch}>
        Search...
      </button>

      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
