import { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

const Home = () => {
  const [input, setInput] = useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  const onSearch = () => {
    const catchData = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${input}`
      );
      const jsonData = await response.json();
      console.log(jsonData);
    };
    catchData();
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
    </MainPageLayout>
  );
};

export default Home;
