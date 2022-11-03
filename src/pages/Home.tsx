import { useState } from "react";
import ActorGrid from "../components/actor/ActorGrid";
import MainPageLayout from "../components/MainPageLayout";
import ShowGrid from "../components/show/ShowGrid";
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
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
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
  url: string;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  };
  birthday: string;
  deathday: string;
  gender: string;
  image: {
    medium: string;
    original: string;
  };
  updated: number;
  _links: {
    self: {
      href: string;
    };
  };
}

export interface IShow {
  score: number;
  show: IShowProps;
}
export interface IPerson {
  score: number;
  person: IPersonProps;
}

const Home = () => {
  const [input, setInput] = useState<string>("");
  const [results, setResults] = useState<IShow[] | IPerson[]>([]);
  const [searchOption, setSearchOption] = useState("shows");
  const isShowsSearch = searchOption === "shows";

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      setResults(result);
    });
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

      {results.length === 0 && <div>Sorry, no response!!!</div>}

      {results.length > 0 && isShowsSearch && (
        <ShowGrid data={results as IShow[]} />
      )}

      {results.length > 0 && !isShowsSearch && (
        <ActorGrid data={results as IPerson[]} />
      )}
    </MainPageLayout>
  );
};

export default Home;
