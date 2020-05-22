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
  console.log(currentGridWidth, width, type);
  return {
    width,
    height: gridSize === 12 ? width : width * 1.5,
  };
};
