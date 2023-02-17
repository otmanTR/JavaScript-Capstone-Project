import getItems from './getItems';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/B4dSeq5fl0y4n8s59SaR/likes/';
const displayLikeCount = async (likeContainer) => {
  const data = await getItems(baseUrl);
  likeContainer.forEach((container) => {
    container.textContent = `${
      data.find((item) => item.item_id === container.dataset.id)?.likes || '0'
    } likes`;
  });
};

export default displayLikeCount;
