const createTable = (data) => {
    const container = document.getElementById('wordList');

    container.innerHTML = `                <div class="row header">
                    <div class="cell number">Number</div>
                    <div class="cell word">Word</div>
                </div>`;

    for (const word of data) {
        const row = document.createElement('div');
        row.className = 'row';

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

const loadWords = (section) => {
    const first = (section - 1) * 100 + 1;
    const end = section * 100;
    const sectionWords = [];
    for (let i = first; i <= end; i++) {
        const entry = WORDS[i.toString()];
        sectionWords.push(entry);
    }

    createTable(sectionWords)
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
        loadWords(selector.value);
    })
})