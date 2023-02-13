const takingId = async () => {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

  const action = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'game of Pokemon',
    }),
  };
  const takeId = await fetch(apiUrl, action);
  const result = await takeId.json();
  const answer = await result.result;
  console.log(answer);
  return answer;
  return apiUrl;
};

export default takingId;