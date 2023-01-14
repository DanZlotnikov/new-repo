function ExistingComment({commentData}) {
    return (
        <div className='comment-div'>
            <img className='user-profile-pic comment-profile-pic' src={commentData.author.profilePic} title={commentData.author.firstName + ' ' + commentData.author.lastName}/>
            <span className='existing-comment'>
                <span className='comment-author-name'>
                    {commentData.author.firstName + ' ' + commentData.author.lastName}
                </span>
                <span className='comment-text'>
                    {commentData.text}
                </span>
            </span>
        </div>
    )
}

export default ExistingComment;