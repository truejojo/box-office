import React from 'react'
import { IEmbeddedCastProps } from '../../pages/Show'
// import IMG_PLACEHOLDER from "../../images/not-found.png";

interface ICastProps {
  cast: IEmbeddedCastProps[];
}

const Cast = ({cast}: ICastProps) => {
  return (
    <div>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key}>
          <div>
            <img
              src={person.image ? person.image.medium : ""}
              alt="cast-person"
            />
          </div>
          <div>
            <span>
              {person.name} | {character.name} {voice ? '| Voice' : ''}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cast