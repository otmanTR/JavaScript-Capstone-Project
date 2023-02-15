import getItems from './getItems';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kumd2xEuWrRQPQTt2JCG/likes/';
const displayLikeCount = () => {
  getItems(baseUrl).then((data) => data);
};

export default displayLikeCount;
