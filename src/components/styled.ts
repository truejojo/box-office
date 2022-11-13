import styled from "styled-components";

export const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem 2rem;
`;

export const SearchCard = styled.div`
  width: 300px;
  height: 100%;

  .img-wrapper {
    width: 100%;
    border-radius: 40px;
    height: 420px;
    overflow: hidden;
    border: 1px solid #ddd;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  h1 {
    margin: 10px 0;
    font-size: 21px;
  }

  p {
    margin: 0;
  }
`;

interface IStarProps {
  isActive?: boolean;
}

export const Star = styled.div<IStarProps>`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: ${(props) => (props.isActive ? "#ffc806" : "#ddd")};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    98% 35%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;
