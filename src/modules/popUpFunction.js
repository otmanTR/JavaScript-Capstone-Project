class PopUp {
  constructor() {
    const popUp = document.querySelector('.popUp');
    popUp.innerHTML = '';
    const races = document.querySelector('.races');
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
  <li class="height">Height:135</li>
  <li class="power">Power:100021</li>
</ul>
</div>`;

    popUp.innerHTML += popUpItems;
    popUp.classList.add('close');
    popUpXButton.classList.add('close');

    const popUpFunction = () => {
      races.addEventListener('click', () => {
        home.classList.add('close');
        popUp.classList.remove('close');
        popUpXButton.classList.remove('close');
      });

      popUpXButton.addEventListener('click', () => {
        home.classList.remove('close');
        popUp.classList.add('close');
        popUpXButton.classList.add('close');
      });
      // window.location.reload();
    };

    popUpFunction();
  }
}

export default PopUp;