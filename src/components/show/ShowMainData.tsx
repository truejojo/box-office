import React from "react";
// import IMG_PLACEHOLDER from "../../images/not-found.png";
import { Star } from "../styled";
import { Headline, MainDataWrapper, TagList } from "./ShowMainData.styled";

interface IShowMainDataProps {
  image: {
    original: string;
  };
  name: string;
  rating: {
    average: number;
  };
  summary: string;
  tags: string[];
}

const ShowMainData = ({
  image,
  name,
  rating,
  summary,
  tags,
}: IShowMainDataProps) => {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : ""} alt="show-cover" />
      <div className="text-side">
        <Headline>
          <h1>{name}</h1>
          <div>
            <Star isActive />
            <span>{rating.average || "N/A"}</span>
          </div>
        </Headline>
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <div>
          Tags:{" "}
          <TagList>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </TagList>
        </div>
      </div>
    </MainDataWrapper>
  );
};

export default ShowMainData;
