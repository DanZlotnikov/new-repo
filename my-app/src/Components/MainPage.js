import { useState, useRef, useEffect } from 'react';
import Topic  from './Topic/Topic.js';
import TopicsApi from '../api/TopicApi.js';
import { InfinitySpin  } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import NewTopic from './NewTopic/NewTopic.js';

function MainPage() {
    const didMount = useRef(false);
    const [topics, setTopics] = useState(null);
    const currentUser = useSelector((state) => state.authReducer.currentUser);
   
    /* eslint-disable */
    useEffect(() => {
        if (!didMount.current) { // this will only run on first render
            TopicsApi.GetTopicsForUser(currentUser.id).then((topicsData) => {
                setTopics(topicsData);
            });
            return;
        }
    }, []);
    /* eslint-enable */

    return (
        <div className='mainDiv'>
            {!topics &&
                <div className='loaderDiv'>
                    <InfinitySpin className='loaderSpinner' />
                </div>
            }
            {topics && 
                <div className='mainPage'>
                    <NewTopic />
                    <div className='topicsDiv'>
                        {topics.map((topic) => (
                            <div key={topic.id}>
                                <Topic topic={topic} />
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default MainPage;