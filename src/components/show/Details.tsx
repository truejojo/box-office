import React from "react";
import { DetailsWrapper } from "./Details.styled";

interface IDetailsProps {
  status: string;
  network: {
    name: string;
  };
  premiered: string;
}
const Details = ({ status, network, premiered }: IDetailsProps) => {
  return (
    <DetailsWrapper>
      <p>
        Status: <span>{status}</span>
      </p>
      <p>
        Premiered {premiered} {network ? `on ${network.name}` : null}
      </p>
    </DetailsWrapper>
  );
};

export default Details;
