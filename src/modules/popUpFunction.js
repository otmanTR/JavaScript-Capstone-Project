import getItems from './getItems';

const popUp = document.querySelector('.popUp');
popUp.innerHTML = '';
const popUpXButton = document.querySelector('.popUpXButton');
const home = document.querySelector('.home');

popUp.classList.add('close');
popUpXButton.classList.add('close');

const popUpFunction = (commentButton) => {
  commentButton.forEach((element) => {
    element.addEventListener('click', (e) => {
      const pokemonId = e.target.id;
      const getName = () => {
        getItems(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
          (data) => {
            const popUpItems = `<div class="popUpImage">
<img
  src="${data.sprites.other['official-artwork'].front_default}"
  name="${data.name}"
  alt="${data.name}"
/>
</div>
<div class="popUpTitle">
<h2>${data.name}</h2>
</div>
<div class="popUpProperties">
<ul>
  <li class="type">Type : ${data.types[0].type.name}</li>
  <li class="weight">Weight:${data.weight}</li>
  <li class="height">Heigth:${data.height}</li>
  <li class="power">baseexperience
:${data.base_experience}</li>
</ul>
</div>`;

            popUp.innerHTML += popUpItems;
          },
        );
      };
      getName();
      home.classList.add('close');
      popUp.classList.remove('close');
      popUpXButton.classList.remove('close');
    });

    popUpXButton.addEventListener('click', () => {
      home.classList.remove('close');
      popUp.classList.add('close');
      popUpXButton.classList.add('close');
    });
  });
};
export default popUpFunction;
