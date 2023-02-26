import { useState, useRef, useEffect } from 'react';
import Topic  from './Topic/Topic.js';
import TopicsApi from '../api/TopicApi.js';
import { InfinitySpin  } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import NewTopic from './NewTopic/NewTopic.js';
import texts from '../texts.js';
import { IoMdHelp } from 'react-icons/io';
import { TutorialStages } from '../consts';
import { endTutorial } from '../redux/authReducer';

function MainPage() {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const dispatch = useDispatch();
    const [topics, setTopics] = useState(null);
    const didMount = useRef(false);
    const [tutorialStage, setTutorialStage] = useState(currentUser.isFirstLogin ? TutorialStages.Welcome : TutorialStages.Done);
    const [tutorialHint, setTutorialHint] = useState('');
    
    /* eslint-disable */
    useEffect(() => {
        if (tutorialStage === TutorialStages.Done) {
            dispatch(endTutorial());
        }
        setTutorialHint(texts().tutorial[tutorialStage]);
    }, [tutorialStage]);
    useEffect(() => {
        if (!didMount.current) { // this will only run on first render
            TopicsApi.GetTopicsForUser(currentUser.id).then((topicsData) => {
                setTopics(topicsData);
            });
        }
        if (currentUser.isFirstLogin) {
            setTutorialHint(texts().tutorial[TutorialStages.Welcome]);
        }
    }, []);
    /* eslint-enable */
        
    const handleCreateNewTopic = (newTopic) => {
        setTopics([newTopic, ...topics]);
    }

    return (
        <div className='mainDiv'>
            {tutorialStage !== TutorialStages.Done &&
                <div className='tutorialDiv'>
                    <IoMdHelp className='helpIcon'/>
                    <span class='tutorialTxt'>
                        {tutorialHint}
                    </span>
                    <span className='continueTutorialBtn' onClick={() => setTutorialStage((stage) => stage + 1)}>{texts().general.continue.toUpperCase()}</span>
                </div>
            }
            {!topics &&
                <div className='loaderDiv'>
                    <InfinitySpin className='loaderSpinner' />
                </div>
            }
            {topics && 
                <div className='mainPage'>
                    <NewTopic handleCreateNewTopic={handleCreateNewTopic} tutorialStage={tutorialStage} />
                    <div className={`topicsDiv ${tutorialStage === TutorialStages.ExploreTopics ? 'tutorial' : ''}`}>
                        {topics.map((topic) => (
                            <div key={topic.id}>
                                <Topic topic={topic} tutorialStage={tutorialStage} />
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default MainPage;