import createLike from './createLike';
import displayLikeCount from './displayLikeCount';
import popUpFunction from './popUpFunction';

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
              alt="${pokemon.name}"
              class="card-img"
            />
          </div>
            <div class="card-body flex">
            <p>${pokemon.name}</p>
            <div class="likes-container">
              <button type=" button" class="btn flex like-btn" id="${
  pokemon.name
}">
                <i class="fa-regular fa-heart"></i>
              </button>
              <h5 class="likes" data-id="${pokemon.name}"></h5>
            </div>
          </div>
          <div class="card-footer flex">
            <button type=" button" id="${
  index + 1
}" class="btn-comment btn flex">comments</button>
          </div>
        </article>`,
    )
    .join('');
  pokemonContainer.innerHTML = pokemonlist;
  const commentButton = document.querySelectorAll('.btn-comment');
  const likeButton = document.querySelectorAll('.like-btn');
  const likeCount = document.querySelectorAll('.likes');
  popUpFunction(commentButton);
  createLike(likeButton, likeCount);
  displayLikeCount(likeCount);
};
export default displayPokemon;
