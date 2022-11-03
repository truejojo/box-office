import { StyledActorCard } from "./ActorCard.styled";

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
    <StyledActorCard>
      <div className="img-wrapper">
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : "No country known"}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p className="deathday">{deathday ? `Died ${deathday}` : "Alive"}</p>
    </StyledActorCard>
  );
};

export default ActorCard;
