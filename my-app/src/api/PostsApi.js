import axios from 'axios';
import { config } from '../config';

const PostsApi = {
  getPost: (id) => {
    return axios.get(`${config.apiBaseUrl}/Posts/GetPost`, {
      params: {id: id}
    })
    .then(response => response.data);
  },
  createNewComment: (postId, commentText, authorUserId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/CreateNewComment`, {
      postId: postId,
      commentText: commentText,
      authorUserId: authorUserId
    })
    .then(response => response.data);
  },
  createNewSubComment: (postId, mainCommentId, commentText, authorUserId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/CreateNewSubComment`, {
      postId: postId,
      mainCommentId: mainCommentId,
      commentText: commentText,
      authorUserId: authorUserId
    })
    .then(response => response.data);
  },
  addBrainToComment: (postId, commentId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/AddBrainToComment`, {
      postId: postId,
      commentId: commentId,
      userId: userId
    })
    .then(response => response.data);
  },
  addBrainToKnowledgeItem: (itemId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Knowledge/AddBrainToKnowledgeItem`, {
      itemId: itemId,
      userId: userId
    })
    .then(response => response.data);
  }
}

export default PostsApi;