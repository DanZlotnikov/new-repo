import axios from 'axios';
import { config } from '../config';

const TopicApi = {
  GetTopicsForUser: (userId) => {
    return axios.get(`${config.apiBaseUrl}/Topics/GetTopicsForUser`, {
      params: {userId: userId}
    })
    .then(response => response.data);
  },
  CreateNewTopic: (userId, message, knowledgeItemInfo, popularItemInfo) => {
    return axios.get(`${config.apiBaseUrl}/Topics/CreateNewTopic`, {
      userId: userId,
      message: message,
      knowledgeItemInfo: knowledgeItemInfo,
      popularItemInfo: popularItemInfo
    })
    .then(response => response.data);
  },
}

export default TopicApi;