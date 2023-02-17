import displayLikeCount from './displayLikeCount';
import postData from './postItems';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/B4dSeq5fl0y4n8s59SaR/likes/';
const createLike = (likeBtns, likeCount) => {
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const itemID = e.currentTarget.id;

      await postData(url, { item_id: itemID });
      displayLikeCount(likeCount);
    });
  });
};
export default createLike;
