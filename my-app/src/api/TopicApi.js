import axios from 'axios';
import { config } from '../config';
import formData from 'form-data';
import dateFormat from 'dateformat';

const TopicApi = {
  GetTopicsForUser: (userId) => {
    return axios.get(`${config.apiBaseUrl}/Topics/GetTopicsForUser`, {
      params: {userId: userId}
    })
    .then(response => response.data);
  },
  CreateNewTopic: (authorId, message, knowledgeItem, knowledgeFile, popularItem) => {
    const form = new formData();
    form.append('authorId', authorId);
    form.append('message', message);
    form.append('knowledgeItemTitle', knowledgeItem.info.title);
    form.append('knowledgeItemOriginalAuthors', knowledgeItem.info.originalAuthors);
    form.append('knowledgeItemPublishDate', dateFormat(knowledgeItem.info.publishDate, 'mm/dd/yyyy'));
    form.append('knowledgeFile', knowledgeFile);
    form.append('popularItemUrl', popularItem.info.url);
    form.append('popularItemPlatformType', popularItem.info.platformType);
    return axios.post(`${config.apiBaseUrl}/Topics/CreateNewTopic`, form, {'Content-Type': 'multipart/form-data'}).then(response => response.data);
  },
}

export default TopicApi;