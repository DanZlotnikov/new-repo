import axios from 'axios';
import { config } from '../config';

const KnowledgeApi = {
  addBrainToKnowledgeItem: (postId, itemId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Knowledge/AddBrainToKnowledgeItem`, {
      postId: postId,
      itemId: itemId,
      userId: userId
    })
    .then(response => response.data);
  },
  RemoveBrainFromKnowledgeItem: (postId, itemId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Knowledge/RemoveBrainFromKnowledgeItem`, {
      postId: postId,
      itemId: itemId,
      userId: userId
    })
    .then(response => response.data);
  },
}

export default KnowledgeApi;