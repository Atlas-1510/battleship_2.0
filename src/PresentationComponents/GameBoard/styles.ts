import styled from "styled-components";

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat (10, 1fr);
  background-color: black;
  border: 1px solid black;
  gap: 1px;
`;

export const TileContainer = styled.div`
  aspect-ratio: 1/1;
  background-color: white;
`;

export const OccupiedTileContainer = styled(TileContainer)`
  background-color: red;
`;