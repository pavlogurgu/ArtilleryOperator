import { cells } from "./fieldSquares";

export const Grid = () => {
  return (
    <>
      <ul>
        {cells.map((data, id) => (
          <li key={id}>
            {data.xValue}
            {data.yValue}
          </li>
        ))}
      </ul>
    </>
  );
};
