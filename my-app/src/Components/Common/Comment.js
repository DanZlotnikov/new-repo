function Comment({commentData}) {
    return (
        <div className='comment-div'>
            <img className='user-profile-pic' src={commentData.author.profilePic} title={commentData.author.firstName + ' ' + commentData.author.lastName}/>
            <span className=""></span>
        </div>
    )
}

export default Comment;