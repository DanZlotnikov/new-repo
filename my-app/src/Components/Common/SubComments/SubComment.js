import { FaCheckCircle } from 'react-icons/fa';
import { colors } from '../../../consts';

function SubComment({subcommentData}) {
    return (
        <div className='subcomment-div'>
            <img className='user-profile-pic subcomment-profile-pic' src={subcommentData.author.profilePic} title={subcommentData.author.firstName + ' ' + subcommentData.author.lastName}/>
            <span className='subcomment'>
                <span className='subcomment-author-name'>
                    {subcommentData.author.firstName + ' ' + subcommentData.author.lastName}
                    {subcommentData.author.hasCheckmark &&  
                        <span className='checkmark-icon'>
                            <FaCheckCircle color={colors.checkmarkBlue} size={13}/>
                        </span>
                    }
                </span>
                <span className='subcomment-text'>
                    {subcommentData.text}
                </span>
               
            </span>
        </div>
    )
}

export default SubComment;