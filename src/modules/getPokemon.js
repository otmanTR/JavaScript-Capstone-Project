import displayPokemon from './displayPokemon';
import getItems from './getItems';

// hello
const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0';

const getPokemon = async () => {
  await getItems(baseUrl)
    .then((data) => displayPokemon(data.results))
    .catch((err) => new Error(err));
};

export default getPokemon;
