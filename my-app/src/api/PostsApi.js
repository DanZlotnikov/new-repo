import axios from 'axios';
import { apiBaseUrl } from '../config';

const PostsApi = {
  getPost: (id) => {
    return axios.get(`${apiBaseUrl}/Posts/GetPost?id=${id}`)
      .then(response => response.data);
  }
}

export default PostsApi;