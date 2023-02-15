import popUpFunction from './popUpFunction';
import Comments from './comments';

popUpFunction();

const comments = new Comments();

const commentButton = document.querySelector('.commentButton');

const formFunction = () => {
  commentButton.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('.name');
    const insights = document.querySelector('.insights');
    if (name.value !== '' && insights.value !== '') {
      comments.addNewComment(name.value, insights.value);
    }
    name.value = '';
    insights.value = '';
  });
};

export default { formFunction };