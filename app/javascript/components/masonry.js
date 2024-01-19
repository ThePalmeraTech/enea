document.addEventListener('DOMContentLoaded', function() {
  let brakePoints = [350, 500, 750];
  let images = [];
  const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643];
  for (let i = 0; i < imgId.length; i++) {
    const ih = 200 + Math.floor(Math.random() * 10) * 15;
    images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
  }

  function createTile(src) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    const img = document.createElement('img');
    img.src = src;
    tile.appendChild(img);
    return tile;
  }

  function mapChildrenToColumns(children, columns) {
    let col = [];
    for (let i = 0; i < columns; i++) {
      col.push([]);
    }
    children.forEach((child, i) => {
      col[i % columns].push(child);
    });
    return col;
  }

  function getColumns(containerWidth, brakePoints) {
    return brakePoints.reduceRight((p, c, i) => {
      return c < containerWidth ? p : i;
    }, brakePoints.length) + 1;
  }

  const masonryContainer = document.createElement('div');
  masonryContainer.className = 'masonry';

  function renderMasonry() {
    const columns = getColumns(masonryContainer.offsetWidth, brakePoints);
    const columnElements = mapChildrenToColumns(images.map(createTile), columns);
    masonryContainer.innerHTML = ''; // Clear the container

    columnElements.forEach((col) => {
      const columnDiv = document.createElement('div');
      columnDiv.className = 'column';
      col.forEach((child) => {
        columnDiv.appendChild(child);
      });
      masonryContainer.appendChild(columnDiv);
    });
  }

  // Call the render function on window resize
  window.addEventListener('resize', renderMasonry);

  // Initial render
  renderMasonry();

// Instead of document.body.appendChild(masonryContainer);
document.getElementById('app').appendChild(masonryContainer);

});
