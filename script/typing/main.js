const typing = (settings) => {
    const typingContainer = document.getElementById("typingSection");
    typingContainer.style.display = "flex";

    const firstArray = settings.weakOnly === 0 ? createAllWordArray(settings) : createWeakWordArray(settings);
    if (!firstArray.length) location.reload();
    const secondArray = settings.order === 0 ? firstArray : arrayShuffle(firstArray);

    question(secondArray);
};

const createAllWordArray = (settings) => {
    const array = [];
    for (let i = 0; i < settings.end - settings.start + 1; i++) {
        array.push(WORDS[i + settings.start]);
    }
    return array;
};

const createWeakWordArray = (settings) => {
    const array = [];
    for (let i = 0; i < settings.end - settings.start + 1; i++) {
        if (JSON.parse(localStorage.getItem(`type-${i + settings.start}`))) {
            array.push(WORDS[i + settings.start]);
        }
    }
    return array;
};

const arrayShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const question = (wordList) => {
    let index = 0;
    let next = false;

    const meanSpace = document.getElementById("meanText");
    const typeSpace = document.getElementById("typingSpace");
    const showWeak = document.getElementById("isWeak");
    meanSpace.textContent = wordList[0].mean;
    if (JSON.parse(localStorage.getItem(`type-${wordList[0].number}`))) {
        showWeak.classList.remove("weak-false");
        showWeak.classList.add("weak-true");
    } else {
        showWeak.classList.remove("weak-true");
        showWeak.classList.add("weak-false");
    }

    const keyboard = document.querySelector(".keyboard");
    keyboard.style.display = "block";
    keyboard.addEventListener("touchend", (e) => {
        e.preventDefault();
        const text = e.target.getAttribute("data-value");
        if (text === null) return;
        if (text === "delete") {
            typeSpace.textContent = typeSpace.textContent.slice(0, -1);
        } else if (text === "enter") {
            enter();
        } else if (!next) {
            typeSpace.textContent += text;
        }
        e.target.classList.add("key-active");
        setTimeout(() => {
            e.target.classList.remove("key-active");
        }, 150);
    });

    const cursor = document.querySelector(".cursor");
    const enterKey = document.querySelector(".enter");
    const enter = () => {
        if (next) {
            index++;
            next = false;
            meanSpace.textContent = wordList[index].mean;
            typeSpace.textContent = "";
            if (JSON.parse(localStorage.getItem(`type-${wordList[index].number}`))) {
                showWeak.classList.remove("weak-false");
                showWeak.classList.add("weak-true");
            } else {
                showWeak.classList.remove("weak-true");
                showWeak.classList.add("weak-false");
            }
            enterKey.textContent = "決定";
            typeSpace.style.color = "#333333";
            typeSpace.parentNode.style.backgroundColor = "#ffffff";
            cursor.classList.add("visible");
        } else {
            next = true;

            const utterance = new SpeechSynthesisUtterance(wordList[index].word);
            utterance.lang = "en-US";
            utterance.rate = 1;
            utterance.pitch = 1;
            speechSynthesis.speak(utterance);

            cursor.classList.remove("visible");

            enterKey.textContent = "次へ";

            if (typeSpace.textContent === wordList[index].word) {
                typeSpace.parentElement.style.backgroundColor = "#75cad5";
                typeSpace.style.color = "#ffffff";
            } else {
                typeSpace.parentNode.style.backgroundColor = "#f67171";
                setTimeout(() => {
                    if (next) {
                        typeSpace.style.color = "#ffffff";
                        console.log(typeSpace.parentElement);
                        typeSpace.textContent = wordList[index].word;
                    }
                }, 1000);
            }

            setTimeout(() => {
                if (next) enter();
            }, 2500);
        }
    };

    showWeak.addEventListener("touchend", (e) => {
        e.preventDefault();

        if (showWeak.classList.contains("weak-false")) {
            showWeak.classList.remove("weak-false");
            showWeak.classList.add("weak-true");
            localStorage.setItem(`type-${wordList[index].number}`, true);
        } else {
            localStorage.setItem(`type-${wordList[index].number}`, false);
            showWeak.classList.remove("weak-true");
            showWeak.classList.add("weak-false");
        }
    });
};

window.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById("range-select");
    selector.addEventListener("change", () => {
        const start = document.getElementById("startIndex");
        const end = document.getElementById("endIndex");
        const section = selector.value;
        if (section !== "0") {
            start.value = (section - 1) * 100 + 1;
            end.value = section * 100;
        } else {
            start.value = 1;
            end.value = 1900;
        }
    });

    const startIndex = document.getElementById("startIndex");
    startIndex.addEventListener("focus", function () {
        this.select();
    });
    const endIndex = document.getElementById("endIndex");
    endIndex.addEventListener("focus", function () {
        this.select();
    });

    document.querySelectorAll(".button-group").forEach((group) => {
        group.addEventListener("touchend", (e) => {
            if (e.target.classList.contains("button-item")) {
                group.querySelectorAll(".button-item").forEach((item) => item.classList.remove("active"));
                e.target.classList.add("active");
            }
        });
    });

    document.getElementById("startBtn").addEventListener("touchend", () => {
        const start = Number(document.getElementById("startIndex").value);
        const end = Number(document.getElementById("endIndex").value);
        if (start > end) return;

        const order = document.querySelector('[data-group="order"] .active').dataset.value;
        const weakOnly = document.querySelector('[data-group="weakOnly"] .active').dataset.value;

        const settings = document.querySelector(".origin");
        settings.style.display = "none";

        typing({
            start: start,
            end: end,
            order: Number(order),
            weakOnly: Number(weakOnly),
        });
    });

    document.getElementById("backBtn").addEventListener("click", () => {
        location.reload();
    });

    for (let i = 1; i < 1901; i++) {
        if (JSON.parse(localStorage.getItem(`${i}`))) {
            const current = JSON.parse(localStorage.getItem(`${i}`));
            localStorage.setItem(`type-${i}`, current);
        } else {
            if (localStorage.getItem(`type-${i}`) === null) {
                if (localStorage.getItem(`${i}`) === null) {
                    localStorage.setItem(`type-${i}`, false);
                } else {
                    const current = JSON.parse(localStorage.getItem(`${i}`));
                    localStorage.setItem(`type-${i}`, current);
                }
            }
        }
    }
});
