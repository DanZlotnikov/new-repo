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
  editComment: (postId, commentId, message) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/EditComment`, {
      postId: postId,
      commentId: commentId,
      message: message,
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
  addSubcomment: (postId, mainCommentId, userId, message) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/AddSubcomment`, {
      postId: postId,
      mainCommentId: mainCommentId,
      userId: userId,
      message: message
    })
    .then(response => response.data);
  },
  deleteSubcomment: (postId, mainCommentId, subCommentId, removingUserId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/DeleteSubcomment`, {
      postId: postId,
      mainCommentId: mainCommentId,
      subCommentId: subCommentId,
      removingUserId: removingUserId
    })
    .then(response => response.data);
  },
  editSubcomment: (postId, mainCommentId, subCommentId, message) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/EditSubcomment`, {
      postId: postId,
      mainCommentId: mainCommentId,
      subCommentId: subCommentId,
      message: message
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