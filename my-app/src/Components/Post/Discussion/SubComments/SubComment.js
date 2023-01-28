import { FaCheckCircle } from 'react-icons/fa';
import { Colors } from '../../../../consts';

function SubComment({subcommentData}) {
    let authorFullName = subcommentData.author.firstName + ' ' + subcommentData.author.lastName;
    return (
        <div className='subcommentDiv'>
            <img className='userProfileImg subcommentProfileImg' src={subcommentData.author.profilePic} title={authorFullName} alt={authorFullName} />
            <span className='subcomment'>
                <span className='subcommentAuthorName'>
                    {subcommentData.author.firstName + ' ' + subcommentData.author.lastName}
                    {subcommentData.author.hasCheckmark &&  
                        <span className='checkmarkIcon'>
                            <FaCheckCircle color={Colors.checkmarkBlue} size={13}/>
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