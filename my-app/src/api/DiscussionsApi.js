import axios from 'axios';
import { config } from '../config';

const DiscussionsApi = {
  createNewComment: (postId, authorUserId, message) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/CreateNewComment`, {
      postId: postId,
      authorUserId: authorUserId,
      message: message,
    })
    .then(response => response.data);
  },
  editComment: (commentId, message, editingUserId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/EditComment`, {
      commentId: commentId,
      message: message,
      editingUserId: editingUserId
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
  removeBrainFromComment: (postId, commentId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/RemoveBrainFromComment`, {
      postId: postId,
      commentId: commentId,
      userId: userId
    })
    .then(response => response.data);
  },
  addSubcomment: (mainCommentId, authorId, message) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/AddSubcomment`, {
      mainCommentId: mainCommentId,
      authorId: authorId,
      message: message,
    })
    .then(response => response.data);
  },
  deleteSubcomment: (subCommentId, removingUserId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/DeleteSubcomment`, {
      subCommentId: subCommentId,
      removingUserId: removingUserId
    })
    .then(response => response.data);
  },
  editSubcomment: (subCommentId, message, editingUserId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/EditSubcomment`, {
      subCommentId: subCommentId,
      message: message,
      editingUserId: editingUserId
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

export default DiscussionsApi;