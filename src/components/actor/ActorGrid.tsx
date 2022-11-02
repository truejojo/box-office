import React from 'react'
import { IPerson } from '../../pages/Home';

interface IActorGridProps {
  data: IPerson[];
}
const ActorGrid = ({data}: IActorGridProps) => {
  return (
    <div>ActorGrid</div>
  )
}

export default ActorGrid