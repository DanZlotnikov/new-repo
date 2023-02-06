import axios from 'axios';
import { config } from '../config';

const PopularApi = {
  AddBrainToPopularItem: (postId, itemId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Popular/AddBrainToPopularItem`, {
      postId: postId,
      itemId: itemId,
      userId: userId
    })
    .then(response => response.data);
  },
  RemoveBrainFromPopularItem: (postId, itemId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Popular/RemoveBrainFromPopularItem`, {
      postId: postId,
      itemId: itemId,
      userId: userId
    })
    .then(response => response.data);
  },
  UploadPopularItem: (postId, uploaderId, url, platformTypeId) => {
    return axios.post(`${config.apiBaseUrl}/Popular/UploadPopularItem`, {
      postId: postId,
      uploaderId: uploaderId,
      url: url,
      platformTypeId: platformTypeId
    })
    .then(response => response.data);
  },
}

export default PopularApi;