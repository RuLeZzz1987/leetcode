var floodFill = function(image, sr, sc, newColor) {
  const queue = [];
  const sourceColor = image[sr][sc];
  queue.push({x: sr, y: sc});

  while (queue.length) {
    const {x, y} = queue.shift();
    if (image[x][y] === sourceColor) {
      image[x][y] = newColor;

      if (image[x - 1] !== undefined && image[x - 1][y] === sourceColor) {
        queue.push({x: x - 1, y});
      }
      if (image[x + 1] !== undefined && image[x + 1][y] === sourceColor) {
        queue.push({x: x + 1, y});
      }
      if (image[x][y + 1] !== undefined && image[x][y + 1] === sourceColor) {
        queue.push({x, y: y + 1});
      }
      if (image[x][y - 1] !== undefined && image[x][y - 1] === sourceColor) {
        queue.push({x, y: y - 1});
      }

    }
  }

  return image;
};

console.log(floodFill([[0,0,0],[0,1,1]],
1,
1,
1));