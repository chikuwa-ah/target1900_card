const card = (settings) => {
    const firstArray = settings.weakOnly === 0 ? createAllWordArray(settings) : createWeakWordArray(settings);
    if (!firstArray.length) location.reload();
    const secondArray = settings.order === 0 ? firstArray : arrayShuffle(firstArray);


}

const arrayShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const createAllWordArray = (settings) => {
    const array = [];
    for (let i = 0; i < (settings.end - settings.start) + 1; i++) {
        array.push(WORDS[i + settings.start]);
    }
    return array;
}

const createWeakWordArray = (settings) => {
    const array = [];
    for (let i = 0; i < (settings.end - settings.start) + 1; i++) {
        if (JSON.parse(localStorage.getItem(`${i + settings.start}`))) {
            array.push(WORDS[i + settings.start]);
        }
    }
    return array;
}


window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.button-group').forEach(group => {
        group.addEventListener('touchend', (e) => {
            if (e.target.classList.contains('button-item')) {
                group.querySelectorAll('.button-item').forEach(item => item.classList.remove('active'));
                e.target.classList.add('active');
            }
        });
    });

    document.getElementById('startBtn').addEventListener('touchend', () => {
        const start = Number(document.getElementById('startIndex').value);
        const end = Number(document.getElementById('endIndex').value);
        if (start > end) return;

        const direction = document.querySelector('[data-group="direction"] .active').dataset.value;
        const order = document.querySelector('[data-group="order"] .active').dataset.value;
        const weakOnly = document.querySelector('[data-group="weakOnly"] .active').dataset.value;

        const settings = document.querySelector('.origin');
        settings.style.display = 'none';

        const cardContainer = document.getElementById('cardSection');
        cardContainer.style.display = 'flex';

        card({
            start: start,
            end: end,
            direction: Number(direction),
            order: Number(order),
            weakOnly: Number(weakOnly),
        })
    });

    document.getElementById('backBtn').addEventListener('click', () => {
        location.reload();
    })
})