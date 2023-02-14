import getItems from './getItems';

const nameUrl = 'https://pokeapi.co/api/v2/pokemon/2';


const getName =  () => {
 getItems(nameUrl)
   .then((data) => console.log('we are here', data));
    
};
getName();
const popUp = document.querySelector('.popUp');
popUp.innerHTML = '';
const popUpXButton = document.querySelector('.popUpXButton');
const home = document.querySelector('.home');
const popUpItems = `<div class="popUpImage">
<img
  src=""
  name=""
  alt=""
/>
</div>
<div class="popUpTitle">
<h2>ulbasaur</h2>
</div>
<div class="popUpProperties">
<ul>
  <li class="type">Type : Plant</li>
  <li class="weight">Weight:100</li>
  <li class="height">${data.height}</li>
  <li class="power">Power:100021</li>
</ul>
</div>`;

popUp.innerHTML += popUpItems;
popUp.classList.add('close');
popUpXButton.classList.add('close');

const popUpFunction = (commentButton) => {
  commentButton.forEach((element) => {
    element.addEventListener('click', (e) => {
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