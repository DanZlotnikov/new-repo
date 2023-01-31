import axios from 'axios';
import { config } from '../config';

const PostsApi = {
  getPost: (id) => {
    return axios.get(`${config.apiBaseUrl}/Posts/GetPost`, {
      params: {id: id}
    })
    .then(response => response.data);
  },
}

export default PostsApi;