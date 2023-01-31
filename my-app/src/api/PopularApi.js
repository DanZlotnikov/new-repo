import axios from 'axios';
import { config } from '../config';

const PopularApi = {
  addBrainToPopularItem: (postId, itemId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Popular/AddBrainToPopularItem`, {
      postId: postId,
      itemId: itemId,
      userId: userId
    })
    .then(response => response.data);
  },
  removeBrainFromPopularItem: (postId, itemId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Popular/RemoveBrainFromPopularItem`, {
      postId: postId,
      itemId: itemId,
      userId: userId
    })
    .then(response => response.data);
  },
}

export default PopularApi;