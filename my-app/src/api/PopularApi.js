import axios from 'axios';
import { config } from '../config';

const PopularApi = {
  AddBrainToPopularItem: (topicId, itemId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Popular/AddBrainToPopularItem`, {
      topicId: topicId,
      itemId: itemId,
      userId: userId
    })
    .then(response => response.data);
  },
  RemoveBrainFromPopularItem: (topicId, itemId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Popular/RemoveBrainFromPopularItem`, {
      topicId: topicId,
      itemId: itemId,
      userId: userId
    })
    .then(response => response.data);
  },
  UploadPopularItem: (topicId, uploaderId, url, platformTypeId) => {
    return axios.post(`${config.apiBaseUrl}/Popular/UploadPopularItem`, {
      topicId: topicId,
      uploaderId: uploaderId,
      url: url,
      platformTypeId: platformTypeId
    })
    .then(response => response.data);
  },
}

export default PopularApi;