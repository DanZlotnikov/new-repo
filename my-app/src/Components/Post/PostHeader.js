import womanProfilePic from '../../../src/New folder/profile_pic_margot.jpg';
import { FaCheckCircle, FaGlobeAmericas  } from 'react-icons/fa';
import { Colors } from '../../consts.js';
import dateFormat from 'dateformat';

function PostHeader({post}) {
    return (
        <div>
            <div className='post-header-div'>
                <img className='user-profile-img post-img' src={womanProfilePic} />
                <span className='name-and-date'>
                    <span className='user-name-span'>
                        <span className='user-name'>
                            {post.author.firstName} {post.author.lastName}
                        </span>
                        <span className='checkmark-icon'>
                            <FaCheckCircle color={Colors.checkmarkBlue} size={13}/>
                        </span>
                    </span>
                    <span className='post-created-time'>
                    {dateFormat(post.createdDate)} 
                        <span className='globe-icon'>
                            <FaGlobeAmericas size={13}/>
                        </span>
                    </span>
                </span>
            </div>
            <div className='post-text'>
                {post.message}            
            </div>
        </div>
    )
}

export default PostHeader;