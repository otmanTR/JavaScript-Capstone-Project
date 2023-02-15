import popUpFunction from './popUpFunction';

popUpFunction();

class Comments {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BAapi/comments';
  }

  apiFetch = async () => {
    const request = new Request(this.url);
    const result = await fetch(request);
    const fResult = await result.json();
    const allComments = fResult.result.map(({ user: name, insights }) => ({
      name,
      insights,
    }));
    return allComments;
  }

  addNewComment= async (name, insights) => {
    await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({ user: name, insights }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  }
}

export default Comments;