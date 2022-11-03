import React from "react";

interface IActorCardProps {
  name: string;
  country: string | null;
  birthday: string;
  deathday: string;
  gender: string;
  image: string;
}

const ActorCard = ({
  name,
  country,
  birthday,
  deathday,
  gender,
  image,
}: IActorCardProps) => {
  return (
    <div>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : "No country known"}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p>{deathday ? `Died ${deathday}` : "Alive"}</p>
    </div>
  );
};

export default ActorCard;
