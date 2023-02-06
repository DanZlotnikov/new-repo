import axios from 'axios';
import { config } from '../config';

const DiscussionsApi = {
  CreateNewComment: (postId, authorUserId, message) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/CreateNewComment`, {
      postId: postId,
      authorUserId: authorUserId,
      message: message,
    })
    .then(response => response.data);
  },
  EditComment: (commentId, message, editingUserId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/EditComment`, {
      commentId: commentId,
      message: message,
      editingUserId: editingUserId
    })
    .then(response => response.data);
  },
  AddBrainToComment: (postId, commentId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/AddBrainToComment`, {
      postId: postId,
      commentId: commentId,
      userId: userId
    })
    .then(response => response.data);
  },
  RemoveBrainFromComment: (postId, commentId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/RemoveBrainFromComment`, {
      postId: postId,
      commentId: commentId,
      userId: userId
    })
    .then(response => response.data);
  },
  AddSubcomment: (mainCommentId, authorId, message) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/AddSubcomment`, {
      mainCommentId: mainCommentId,
      authorId: authorId,
      message: message,
    })
    .then(response => response.data);
  },
  DeleteSubcomment: (subCommentId, removingUserId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/DeleteSubcomment`, {
      subCommentId: subCommentId,
      removingUserId: removingUserId
    })
    .then(response => response.data);
  },
  EditSubcomment: (subCommentId, message, editingUserId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/EditSubcomment`, {
      subCommentId: subCommentId,
      message: message,
      editingUserId: editingUserId
    })
    .then(response => response.data);
  },
}

export default DiscussionsApi;