import womanProfilePic from '../../src/New folder/profile-pic-margot.jpg';
import { FaCheckCircle, FaGlobeAmericas  } from 'react-icons/fa';
import { colors } from '../consts.js';

function Post() {
    return (
        <div className='post-div'>
            <div class='post-header-div'>
                <img className='user-profile-pic post-pic' src={womanProfilePic} />
                <span class='name-and-date'>
                    <span className='user-name-span'>
                        <span className='user-name'>
                            Margot Robbie
                        </span>
                        <span className='checkmark-icon'>
                            <FaCheckCircle color={colors.checkmarkBlue}size={13}/>
                        </span>
                    </span>
                    <span className='post-created-time'>
                        March 29, 2018
                    <span className='globe-icon'>
                        <FaGlobeAmericas size={13}/>
                    </span>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Post;