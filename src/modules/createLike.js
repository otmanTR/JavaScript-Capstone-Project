import postData from './postItems';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kumd2xEuWrRQPQTt2JCG/likes/';
const createLike = (likeBtns) => {
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const itemID = e.currentTarget.id;

      await postData(url, { item_id: itemID });
    });
  });
};
export default createLike;
