import React from 'react'

interface ITitleProps {
  title: string;
  subtitle: string;
}

const Title = ({title, subtitle}: ITitleProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}

export default Title