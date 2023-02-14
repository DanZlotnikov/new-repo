import { FaCheckCircle, FaGlobeAmericas  } from 'react-icons/fa';
import dateFormat from 'dateformat';

function TopicHeader({topic}) {
    return (
        <div className='topicHeaderDiv'>
            <div className='topicUserDiv'>
                <img className='userProfileImg topicImg' src={topic.author.profileImgUrl} alt={topic.author.firstName + ' ' + topic.author.lastName}/>
                <span className='nameAndDate'>
                    <span className='userNameSpan'>
                        <span className='userName'>
                            {topic.author.firstName} {topic.author.lastName}
                        </span>
                        {topic.author.isVerified &&  
                            <span className='checkmarkIcon'>
                                <FaCheckCircle size={13}/>
                            </span>
                        }
                    </span>
                    <span className='topicCreatedTime'>
                    {dateFormat(topic.createdDate, 'dddd, mmmm dS, yyyy')} 
                        <span className='globeIcon'>
                            <FaGlobeAmericas size={13}/>
                        </span>
                    </span>
                </span>
            </div>
            <div className='topicText'>
                {topic.message}            
            </div>
        </div>
    )
}

export default TopicHeader;