function pkmCardTemplate(pokemon) {
    return `<div class="pkm-detailview-container">
                    <div class="pkm-detailview-header">
                        <span>#${pokemon.id}</span>
                        <h3>${pokemon.name}</h3>
                    </div>
                    <img src="${pokemon.sprites.front_default}" alt="">
                  
                    <div class="pkm-detail-footer">
                        <span class="type-${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</span>
                        ${pokemon.types[1] ? `<span class="type-${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</span>` : ''}
                    </div>
                </div>
            </div>`
}