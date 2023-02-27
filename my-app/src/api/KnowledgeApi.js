import axios from 'axios';
import { config } from '../config';
import formData from 'form-data';
import dateFormat from 'dateformat';

const KnowledgeApi = {
  AddBrainToKnowledgeItem: (topicId, itemId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Knowledge/AddBrainToKnowledgeItem`, {
      topicId: topicId,
      itemId: itemId,
      userId: userId
    })
    .then(response => response.data);
  },
  RemoveBrainFromKnowledgeItem: (topicId, itemId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Knowledge/RemoveBrainFromKnowledgeItem`, {
      topicId: topicId,
      itemId: itemId,
      userId: userId
    })
    .then(response => response.data);
  },
  UploadKnowledgeItem: (topicId, uploaderId, title, originalAuthors, publishDate, file) => {
    const form = new formData();
    form.append('topicId', topicId);
    form.append('uploaderId', uploaderId);
    form.append('title', title);
    form.append('originalAuthors', originalAuthors);
    form.append('publishDate', dateFormat(publishDate, 'mm/dd/yyyy'));
    form.append('file', file);
    return axios.post(`${config.apiBaseUrl}/Knowledge/UploadKnowledgeItem`, form, {'Content-Type': 'multipart/form-data'}).then(response => response.data);
  },
}

export default KnowledgeApi;