function createBoard(size) {
    const container = document.querySelector('.div-container');
    const rowSize = Math.sqrt(size*size);

    for (let i = 0; i < rowSize; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row', 'boardDiv')

        for (let j = 0; j < rowSize; j++) {
            const vertDiv = document.createElement('div');
            vertDiv.classList.add('vert-box', 'boardDiv');

            vertDiv.addEventListener('mouseenter', () => {
                vertDiv.style.backgroundColor = 'rgb(143, 143, 143)';
            });

            rowDiv.appendChild(vertDiv);
        }
        container.appendChild(rowDiv)
      }
}

createBoard(64)
