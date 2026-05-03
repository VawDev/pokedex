const annoyingMelody2 = new Audio('./assets/pokedexloop3.mp3');
const annoyingMelody = new Audio('./assets/pokedexloop.mp3');

function init() {

}

function playMelody() {
    annoyingMelody.play();
    annoyingMelody.loop = true;
    annoyingMelody.volume = 0.75;
    // annoyingMelody2.play();
    // annoyingMelody2.loop = true;
    // annoyingMelody2.volume = 0.9;
}

function stopMelody() {
    annoyingMelody.pause();
    annoyingMelody.currentTime = 0;
}

function toggleMelody() {
    if (annoyingMelody.paused) {
        playMelody();
    } else {
        stopMelody();
    }
}