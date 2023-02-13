const takingId = async () => {
  const apiUrl = 'https://pokeapi.co/api/v2/';

  // fetch('https://example.com', {
  //   credentials: 'same-origin'
  // });
  const takeId = await fetch(apiUrl);
  const result = await takeId.json();

  console.log(result);
  return result;
};

module.exports = takingId;
