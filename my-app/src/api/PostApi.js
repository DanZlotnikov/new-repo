import axios from 'axios';
import { config } from '../config';

const PostsApi = {
  getPostsForUser: (id) => {
    return axios.get(`${config.apiBaseUrl}/Posts/GetPostsForUser`, {
      params: {userId: id}
    })
    .then(response => response.data);
  },
}

export default PostsApi;