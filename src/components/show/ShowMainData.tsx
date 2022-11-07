import React from "react";
// import IMG_PLACEHOLDER from "../../images/not-found.png";
import { Star } from "../styled";

interface IShowMainDataProps {
  image: {
    original: string;
  };
  name: string;
  rating: { 
    average: number 
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
    <div>
      <img src={image ? image.original : ""} alt="show-cover" />
      <div>
        <div>
          <h1>{name}</h1>
          <div>
            <Star />
            <span>{rating.average || "N/A"}</span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />

        <div>
          Tags:{" "}
          <div>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMainData;
