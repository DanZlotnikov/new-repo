import { FaCheckCircle, FaGlobeAmericas  } from 'react-icons/fa';
import { Colors } from '../../consts.js';
import dateFormat from 'dateformat';

function PostHeader({post}) {
    return (
        <div>
            <div className='postHeaderDiv'>
                <img className='userProfileImg postImg' src={post.author.profileImgUrl} alt={post.author.firstName + ' ' + post.author.lastName}/>
                <span className='nameAndDate'>
                    <span className='userNameSpan'>
                        <span className='userName'>
                            {post.author.firstName} {post.author.lastName}
                        </span>
                        {post.author.verified &&  
                            <span className='checkmarkIcon'>
                                <FaCheckCircle color={Colors.checkmarkBlue} size={13}/>
                            </span>
                        }
                    </span>
                    <span className='postCreatedTime'>
                    {dateFormat(post.createdDate, 'dddd, mmmm dS, yyyy')} 
                        <span className='globeIcon'>
                            <FaGlobeAmericas size={13}/>
                        </span>
                    </span>
                </span>
            </div>
            <div className='postText'>
                {post.message}            
            </div>
        </div>
    )
}

export default PostHeader;