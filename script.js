function createBoard(size) {
    const container = document.querySelector('.div-container');
    const gridEnable = document.querySelector('#grid');
    const sizeInput = document.querySelector('#sizeInput');
    const sizeValue = document.querySelector('.sizeValue');
    const colorPicker = document.querySelector('.colorPicker')
    sizeValue.textContent = `${sizeInput.value}x${sizeInput.value}`;

    container.innerHTML = '';

    const rowSize = Math.sqrt(size * size);
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < rowSize; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row', 'boardDiv');

        for (let j = 0; j < rowSize; j++) {
            const vertDiv = document.createElement('div');
            vertDiv.classList.add('vert-box', 'boardDiv');

            vertDiv.addEventListener('mouseenter', () => {
                vertDiv.style.backgroundColor = colorPicker.value;
            });

            rowDiv.appendChild(vertDiv);
        }
        fragment.appendChild(rowDiv);
    }

    container.appendChild(fragment);

    function updateGridBorders() {
        const borderStyle = gridEnable.checked ? '1px solid grey' : 'none';
        document.querySelectorAll('.vert-box').forEach(box => {
            box.style.border = borderStyle;
        });
    }

    updateGridBorders();

    gridEnable.addEventListener('change', updateGridBorders);

    sizeInput.addEventListener('input', debounce(() => {
        sizeValue.textContent = `${sizeInput.value}x${sizeInput.value}`;
        createBoard(sizeInput.value);
    }, 200)); 
}

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

function refreshPage() {
    location.reload();
}

createBoard(sizeInput.value);
