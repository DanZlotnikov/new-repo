import womanProfilePic from '../../../src/New folder/profile-pic-margot.jpg';
import { FaCheckCircle, FaGlobeAmericas  } from 'react-icons/fa';
import { colors } from '../../consts.js';

function PostHeader({headerData}) {
    return (
        <div>
            <div className='post-header-div'>
                <img className='user-profile-pic post-pic' src={womanProfilePic} />
                <span className='name-and-date'>
                    <span className='user-name-span'>
                        <span className='user-name'>
                            {headerData.author.firstName} {headerData.author.lastName}
                        </span>
                        <span className='checkmark-icon'>
                            <FaCheckCircle color={colors.checkmarkBlue}size={13}/>
                        </span>
                    </span>
                    <span className='post-created-time'>
                    {headerData.date} 
                        <span className='globe-icon'>
                            <FaGlobeAmericas size={13}/>
                        </span>
                    </span>
                </span>
            </div>
            <div className='post-text'>
                {headerData.message}            
            </div>
        </div>
    )
}

export default PostHeader;