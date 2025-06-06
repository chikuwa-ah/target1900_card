
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('1') === null) {
        for (let index = 1; index < 1901; index++) {
            localStorage.setItem(`${index}`, false);
        }
    }
})