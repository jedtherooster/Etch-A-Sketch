function createBoard(size) {
    const container = document.querySelector('.div-container');
    const gridEnable = document.querySelector('#grid')
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
    
    function updateGridBorders() {
        const borderStyle = gridEnable.checked ? '1px solid grey' : 'none';
        document.querySelectorAll('.vert-box').forEach(box => {
            box.style.border = borderStyle;
        });
    }


    updateGridBorders()

    gridEnable.addEventListener('change', (updateGridBorders()))
    gridEnable.addEventListener('click', () => {
        location.reload();
    })

}
createBoard(64);