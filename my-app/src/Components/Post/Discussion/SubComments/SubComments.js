import NewSubcomment from './NewSubcomment';
import ExistingSubcomment from './ExistingSubcomment';
import { useSelector } from 'react-redux';
import DiscussionsApi from '../../../../api/DiscussionsApi';
import { useState } from 'react';

function Subcomments({mainCommentData, addSubcomment, deleteSubcomment}) {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const [subcommentEditCount, setSubcommentEditCount] = useState(0);

    const handleAddSubcomment = (message) => {
        DiscussionsApi.addSubcomment(mainCommentData.postId, mainCommentData.id, currentUser.id, message).then(newSubcomment => {
            if (newSubcomment && newSubcomment.id > 0) {
                mainCommentData.subcomments.push(newSubcomment);
                addSubcomment();
            }
        });
    }

    const handleDeleteSubcomment = (subcommentId) => {
        DiscussionsApi.deleteSubcomment(mainCommentData.postId, mainCommentData.id, subcommentId, currentUser.id).then(success => {
            if (success) {
                mainCommentData.subcomments = mainCommentData.subcomments.filter(c => c.id !== subcommentId);
                deleteSubcomment();
            }
        });
    }

    const handleEditSubcomment = (subcommentId, message) => {
        if (!message) {
            handleDeleteSubcomment(subcommentId);
        }
        else {
            DiscussionsApi.editSubcomment(mainCommentData.postId, mainCommentData.id, subcommentId, message).then(success => {
                if (success) {
                    mainCommentData.subcomments.find(s => s.id === subcommentId).message = message;
                    setSubcommentEditCount(subcommentEditCount + 1);
                }
            })
        }
    }

    return (
        <div className='subcommentsDiv'>
            <NewSubcomment handleAddSubcomment={handleAddSubcomment}/>
            {mainCommentData.subcomments.map((subcomment) => (
                <span key={subcomment.id}>
                    <ExistingSubcomment subcommentData={subcomment} handleDeleteSubcomment={handleDeleteSubcomment} handleEditSubcomment={handleEditSubcomment}/>
                </span>
            ))}
        </div>
    )
}

export default Subcomments;