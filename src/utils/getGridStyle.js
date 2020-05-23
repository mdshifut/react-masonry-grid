export const getGridStyle = ({
  gridSize,
  containerWidth = 1000,
  gutterSize = 10,
  type,
}) => {
  const currentGridWidth = containerWidth / gridSize;

  const width =
    type === "double"
      ? currentGridWidth * 2 - gutterSize
      : currentGridWidth - gutterSize;
  return {
    width,
    height: gridSize === 12 ? width : width * 1.5,
  };
};
