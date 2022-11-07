import React from "react";

interface IDetailsProps {
  status: string;
  network: {
    name: string
  };
  premiered: string;
}
const Details = ({ status, network, premiered }: IDetailsProps) => {
  return (
    <div>
      <p>
        Status: <span>{status}</span>
      </p>
      <p>
        Premiered {premiered} {network ? `on ${network.name}` : null}
      </p>
    </div>
  );
};

export default Details;
