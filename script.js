function generateGrid() {
  const rows = document.getElementById('rows').value;
  const columns = document.getElementById('columns').value;
  const gridGap = document.getElementById('grid-gap').value;
  const padding = document.getElementById('padding').value;
  const margin = document.getElementById('margin').value;

  const gridContainer = document.getElementById('grid-container');
  const cssCodeContainer = document.getElementById('css-code-container');

  gridContainer.innerHTML = '';
  cssCodeContainer.textContent = '';

  gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  gridContainer.style.gridGap = `${gridGap}px`;
  gridContainer.style.margin = `${margin}px`;
  gridContainer.style.padding = `${padding}px`;

  for (let i = 0; i < rows * columns; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = i + 1;
    gridContainer.appendChild(gridItem);
  }

  // Generate and display CSS code
  const cssCode = `
    #grid-container {
      display: grid;
      grid-template-rows: repeat(${rows}, 1fr);
      grid-template-columns: repeat(${columns}, 1fr);
      grid-gap: ${gridGap}px;
      margin: ${margin}px;
      padding: ${padding}px;
      background-color: #fff;
    }

    .grid-item {
      background-color: #ddd;
      padding: 20px;
      text-align: center;
    }
  `;

  cssCodeContainer.textContent = cssCode;
  Prism.highlightElement(cssCodeContainer);
}


    function copyToClipboard() {
  const cssCodeContainer = document.getElementById('css-code-container');
  const textToCopy = cssCodeContainer.textContent;

  const textArea = document.createElement('textarea');
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  console.log('Copied to clipboard: ', textToCopy);
}


copyToClipboard("Copied");

    generateGrid();




    
