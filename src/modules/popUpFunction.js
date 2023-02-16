import getItems from './getItems';
import Comments from './comments';

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
</div> 
<h3 class="commentsCount">Comments(4)</h3>
<ul class="commentsList"></ul>
<form class="commentForm">
<h2 class="formTitle">Add a comment</h2>
<ul class="formContainer">
  <li>
    <input minlength="1" maxlength="30" class="name" type="text" name="name" placeholder="Your name" required/>
  </li>
  <li>
    <input minlength="1" maxlength="150" class="insights" type="text" name="insights" placeholder="Your insights" required/>
  </li>
  <li>
    <button class="submitButton button" type="submit">Comment</button>
  </li>
</ul>
</form>`;
            popUp.innerHTML = popUpItems;
            const itemId = data.name;

            const comments = new Comments();
            const submitButton = document.querySelector('.commentForm');

            submitButton.addEventListener('submit', (e) => {
              e.preventDefault();
              const name = document.querySelector('.name');
              const insights = document.querySelector('.insights');
              if (name.value !== '' && insights.value !== '') {
                comments.addNewComment(itemId, name.value, insights.value);
              }
              name.value = '';
              insights.value = '';
            });
            comments.displayComments();
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
