class Comments {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kumd2xEuWrRQPQTt2JCG/comments';
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
    // console.log('comments here', allComments);
  }

  addNewComment= async (item_id, username, comment) => {
    await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({ item_id, username, comment }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  }

  displayComments = async () => {
    const commentsList = document.querySelector('.commentList');
    // commentsList = '';
    const data = await this.apiFetch();
    // console.log("data here", data);
    if (this.url > 0) {
      commentsList.classList.add('show');
    }
    data.forEach((element) => {
      const content = `
        <li class="scoreItem">${element.name} <span>: <span>${element.insights}</li>
      `;
      commentsList.innerHTML += content;
    });
  }
}

export default Comments;