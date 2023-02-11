import { useState, useRef, useEffect } from 'react';
import Post  from './Post/Post.js';
import PostsApi from '../api/PostApi.js';
import { InfinitySpin  } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import NewPost from './NewPost/NewPost.js';

function MainPage() {
    const didMount = useRef(false);
    const [posts, setPosts] = useState(null);
    const currentUser = useSelector((state) => state.authReducer.currentUser);
   
    /* eslint-disable */
    useEffect(() => {
        if (!didMount.current) { // this will only run on first render
            PostsApi.GetPostsForUser(currentUser.id).then((postsData) => {
                setPosts(postsData);
            });
            return;
        }
    }, []);
    /* eslint-enable */

    return (
        <div className='mainDiv'>
            {!posts &&
                <div className='loaderDiv'>
                    <InfinitySpin className='loaderSpinner' />
                </div>
            }
            {posts && 
                <div className='mainPage'>
                    <NewPost />
                    <div className='postsDiv'>
                        {posts.map((post) => (
                            <span key={post.id}>
                                <Post post={post} />
                            </span>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default MainPage;