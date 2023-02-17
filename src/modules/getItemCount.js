const getItemCount = (arr) => arr.length;
export default getItemCount;

export const displayItemCount = (container, arr) => {
  container.textContent = ` Pokemons (${getItemCount(arr)})`;
};
