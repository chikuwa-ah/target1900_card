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

        const direction = document.querySelector('[data-group="direction"] .active').dataset.value;
        const order = document.querySelector('[data-group="order"] .active').dataset.value;
        const weakOnly = document.querySelector('[data-group="weakOnly"] .active').dataset.value === "true";

        const settings = document.querySelector('.origin');
        settings.style.display = 'none';

        const cardContainer = document.getElementById('cardSection');
        cardContainer.style.display = 'flex';
    });

    document.getElementById('backBtn').addEventListener('click', () => {
        location.reload();
    })
})