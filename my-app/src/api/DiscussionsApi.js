import axios from 'axios';
import { config } from '../config';

const DiscussionsApi = {
  CreateNewComment: (topicId, authorUserId, message) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/CreateNewComment`, {
      topicId: topicId,
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
  AddBrainToComment: (topicId, commentId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/AddBrainToComment`, {
      topicId: topicId,
      commentId: commentId,
      userId: userId
    })
    .then(response => response.data);
  },
  RemoveBrainFromComment: (topicId, commentId, userId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/RemoveBrainFromComment`, {
      topicId: topicId,
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