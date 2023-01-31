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
  createNewSubcomment: (postId, mainCommentId, commentText, authorUserId) => {
    return axios.post(`${config.apiBaseUrl}/Discussions/CreateNewSubcomment`, {
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

export default PostsApi;