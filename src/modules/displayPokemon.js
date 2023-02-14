const pokemonContainer = document.querySelector('.pokemon-container');
const displayPokemon = (list) => {
  const pokemonlist = list
    .map(
      (pokemon, index) => ` <article class="card">
          <div class="card-header">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
  index + 1
}.png"
              alt="pitto"
              class="card-img"
            />
          </div>
            <div class="card-body flex">
            <p>${pokemon.name}</p>
            <div class="likes-container">
              <button type=" button" class="btn flex">
                <i class="fa-regular fa-heart"></i>
              </button>
              <h5 class="likes">0 likes</h5>
            </div>
          </div>
          <div class="card-footer flex">
            <button type=" button" class="btn-comment btn flex">comments</button>
          </div>
        </article>`,
    )
    .join('');
  pokemonContainer.innerHTML = pokemonlist;
};
export default displayPokemon;
