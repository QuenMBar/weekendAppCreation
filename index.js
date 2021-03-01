const differentStrings = [
    "She finally understood that grief was her love with no place for it to go. I purchased a baby clown from the Russian black market.",
    "The random sentence generator generated a random sentence about a random sentence. Garlic ice-cream was her favorite.",
    "She had some amazing news to share but nobody to share it with. The quick brown fox jumps over the lazy dog.",
    "He watched the dancing piglets with panda bear tummies in the swimming pool. It was obvious she was hot, sweaty, and tired.",
    "It was at that moment that he learned there are certain parts of the body that you should never Nair. Thigh-high in the water, the fisherman's hope for dinner soon turned to despair.",
    "Yeah, I think it's a good environment for learning English. I'm a living furnace.",
];

document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    let startButton = document.getElementById("startButton");
    let challengeStringInit = document.getElementById("challengeStringInit");
    let challengeStringCorrect = document.getElementById("challengeStringCorrect");
    let typingBox = document.getElementById("typingBox");
    let currentStringArray = [];
    let correctStringArray = [];
    let timer;
    let started = false;

    function startTimer() {
        clearInterval(timer);
        counter.innerHTML = 0;
        timer = setInterval(() => {
            counter.innerHTML++;
        }, 1000);
    }

    startButton.addEventListener("click", (e) => {
        startTimer();
        currentStringArray = differentStrings[Math.floor(Math.random() * 6)].split("");
        challengeStringInit.innerHTML = currentStringArray.join("");
        challengeStringCorrect.innerHTML = "";
        correctStringArray = [];
        started = true;
        typingBox.value = "";
    });

    typingBox.addEventListener("input", (e) => {
        if (started) {
            let attempt = e.target.value;
            e.target.value = "";
            if (attempt === currentStringArray[0]) {
                correctStringArray.push(currentStringArray.shift());
                challengeStringInit.innerHTML = currentStringArray.join("");
                challengeStringCorrect.innerHTML = correctStringArray.join("");
                console.log(currentStringArray.length);
                if (currentStringArray.length == 0) {
                    started = false;
                    clearInterval(timer);
                }
            }
        }
    });
});
