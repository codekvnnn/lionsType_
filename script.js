const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const wpm = document.getElementById('wpm');
const accuracy = document.getElementById('accuracy');

let words = ["apple", "banana", "cherry", "date", "fig", "grape"];
let currentWord = "";
let startTime;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function updateDisplayWord() {
    currentWord = getRandomWord();
    wordDisplay.textContent = currentWord;
}

userInput.addEventListener('input', (e) => {
    if (!startTime) {
        startTime = new Date();
    }

    if (e.target.value === currentWord) {
        let endTime = new Date();
        let timeDiff = (endTime - startTime) / 1000; // in seconds
        let wpmValue = (60 / timeDiff).toFixed(2);
        wpm.textContent = wpmValue;

        let correctChars = currentWord.split('').filter((char, index) => char === e.target.value[index]).length;
        let accValue = (correctChars / currentWord.length * 100).toFixed(2);
        accuracy.textContent = `${accValue}%`;

        e.target.value = "";
        updateDisplayWord();
        startTime = null;
    }
});

updateDisplayWord();
