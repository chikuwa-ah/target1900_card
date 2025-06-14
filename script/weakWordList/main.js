const createTable = (data) => {
    const container = document.getElementById('wordList');

    container.innerHTML = `
        <div class="row header">
            <div class="cell number">No.</div>
            <div class="cell word">単語</div>
        </div>`;

    for (const word of data) {
        const row = document.createElement('div');
        row.className = 'row';
        if (JSON.parse(localStorage.getItem(`${word.number}`))) {
            row.style.backgroundColor = '#b3f5ff';
        }
        const selector = document.getElementById('section-select');
        if (selector.value === '2') {
            if (JSON.parse(localStorage.getItem(`type-${word.number}`))) {
                row.style.backgroundColor = '#cbffb3';
            }
        }

        const numberCell = document.createElement('div');
        numberCell.className = 'cell number';
        numberCell.textContent = word.number;

        const wordCell = document.createElement('div');
        wordCell.className = 'cell word';
        wordCell.textContent = word.word;

        row.appendChild(numberCell);
        row.appendChild(wordCell);
        container.appendChild(row);
    }
}

const loadWords = (selection) => {
    const weakWords = [];
    for (let index = 1; index < 1901; index++) {
        const key = selection === "1" ? `${index}` : `type-${index}`;
        if (JSON.parse(localStorage.getItem(key))) {
            weakWords.push(WORDS[index]);
        }
    }

    createTable(weakWords);
}

const showPopUp = (number) => {
    const wordBox = document.getElementById('pop-word');
    const meanBox = document.getElementById('pop-mean');
    wordBox.textContent = WORDS[number].word;
    meanBox.textContent = WORDS[number].mean;
    document.querySelector('.pop-overlay').style.display = 'block';
    document.querySelector('.pop-up').style.display = 'block';
}

const closePopUp = () => {
    document.querySelector('.pop-overlay').style.display = 'none';
    document.querySelector('.pop-up').style.display = 'none';
}

const touchEventListener = () => {
    let startY = 0;
    let moved = false;
    const threshold = 10;

    const container = document.getElementById('wordList');

    container.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        moved = false;
    });

    container.addEventListener('touchmove', (e) => {
        const currentY = e.touches[0].clientY;
        if (Math.abs(currentY - startY) > threshold) {
            moved = true;
        }
    });

    container.addEventListener('touchend', (e) => {
        if (moved) return;
        e.preventDefault();

        const target = e.target;
        const parent = target.parentNode;
        const style = getComputedStyle(parent);

        if (target.classList[1] === 'word' && target.textContent !== '単語') {
            const number = Number(parent.children[0].textContent);
            showPopUp(number);
        }

        if (target.classList[1] === 'number' && target.textContent !== 'No.') {
            const number = Number(target.textContent);
            const selector = document.getElementById('section-select');
            if (selector.value === '1') {
                if (style.backgroundColor === 'rgb(255, 255, 255)') {
                    parent.style.backgroundColor = '#b3f5ff';
                    localStorage.setItem(`${number}`, true);
                } else {
                    parent.style.backgroundColor = '#fff';
                    localStorage.setItem(`${number}`, false);
                }
            } else {
                if (style.backgroundColor === 'rgb(255, 255, 255)' || style.backgroundColor === 'rgb(179, 245, 255)') {
                    parent.style.backgroundColor = '#cbffb3';
                    localStorage.setItem(`type-${number}`, true);
                } else {
                    localStorage.setItem(`type-${number}`, false);
                    if (JSON.parse(localStorage.getItem(`${number}`))) {
                        parent.style.backgroundColor = '#b3f5ff';
                    } else {
                        parent.style.backgroundColor = '#fff';
                    }
                }
            }
        }
    });
}


window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('1') === null) {
        for (let index = 1; index < 1901; index++) {
            localStorage.setItem(`${index}`, false);
        }
        console.log('new');
    }

    const selector = document.getElementById('section-select');
    selector.addEventListener('change', () => {
        if (selector.value !== '0') {
            loadWords(selector.value);
        }
    })
    touchEventListener();
})