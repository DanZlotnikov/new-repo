import axios from 'axios';
import { config } from '../config';
import formData from 'form-data';

const KnowledgeApi = {
  AddBrainToKnowledgeItem: (postId, itemId, userId) => {
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
  UploadKnowledgeItem: (postId, uploaderId, title, originalAuthors, publishDate, file) => {
    const form = new formData();
    form.append('postId', postId);
    form.append('uploaderId', uploaderId);
    form.append('title', title);
    form.append('originalAuthors', originalAuthors);
    form.append('publishDate', publishDate);
    form.append('file', file);
    return axios.post(`${config.apiBaseUrl}/Knowledge/UploadKnowledgeItem`, form, {'Content-Type': 'multipart/form-data'}).then(response => response.data);
  },
}

export default KnowledgeApi;