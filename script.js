async function init() {
    showLoading();

    await loadPkmBatch();

    renderPkm(allPokemon);

    hideLoading();
}

async function loadPkmBatch() {

    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    let response = await fetch(url);

    let data = await response.json();

    for (let pokemon of data.results) {

        let response = await fetch(pokemon.url);

        let pokemonData = await response.json();

        allPokemon.push(pokemonData);
    }

    console.log(allPokemon);
}

async function loadMore() {

    disableButton();

    showLoading();

    offset += limit;

    await loadPkmBatch();

    renderPkm(allPokemon);

    hideLoading();

   enableButton();
}

function renderPkm(pokemonArray) {

    let content = document.getElementById('pokemon-list');

    content.innerHTML = '';

    for (let pokemon of pokemonArray) {
        content.innerHTML += pkmCardTemplate(pokemon);
    }
}


function searchPkm(value) {

    let filteredPokemon = allPokemon.filter(pokemon =>
        pokemon.name.includes(value.toLowerCase())
    );



    renderPkm(filteredPokemon);
}

function clearSearch() {
    let input = document.getElementById('pokemonSearch');
    input.value = '';
    searchPkm(input.value);
}


function disableButton() {
    document.getElementById('loadMore').disabled = true;
}

function enableButton() {
    document.getElementById('loadMore').disabled = false;
}

function playMelody() {
    twistedPokeAudio.play();
    twistedPokeAudio.loop = true;
    twistedPokeAudio.volume = 0.75;
}

function stopMelody() {
    twistedPokeAudio.pause();
    twistedPokeAudio.currentTime = 0;
}

function toggleMelody() {
    if (twistedPokeAudio.paused) {
        playMelody();
    } else {
        stopMelody();
    }
}


function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loading').classList.add('hidden');
}

function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }