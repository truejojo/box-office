import { Link } from 'react-router-dom';
import { StyledShowCard } from './ShowCard.styled';

interface IShowCardProps {
  id: number;
  image: string;
  name:string;
  summary: string;
}

const ShowCard = ({ id, image, name, summary }: IShowCardProps) => {
  
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div className='img-wrapper'>
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className='btns'>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button">Star me</button>
      </div>
    </StyledShowCard>
  );
};


export default ShowCard