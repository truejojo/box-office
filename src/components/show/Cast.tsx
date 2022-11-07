import React from "react";
import { IEmbeddedCastProps } from "../../pages/Show";
// import IMG_PLACEHOLDER from "../../images/not-found.png";
import { CastList } from "./Cast.styled";

interface ICastProps {
  cast: IEmbeddedCastProps[];
}

const Cast = ({ cast }: ICastProps) => {
  return (
    <CastList>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key} className="cast-item">
          <div className="pic-wrapper">
            <img
              src={person.image ? person.image.medium : ""}
              alt="cast-person"
            />
          </div>
          <div className="actor">
            <span>
              <span className="bold">{person.name}</span> | {character.name}{" "}
              {voice ? "| Voice" : ""}
            </span>
          </div>
        </div>
      ))}
    </CastList>
  );
};

export default Cast;
