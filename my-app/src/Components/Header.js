import profilePicDan from '../../src/New folder/profile_pic_dan.jpg';

function Header() {
    return (
        <div className='header'>
            <span className='userHeader'>
                <img className='userProfileImg' src={profilePicDan} alt='Dan Zlotnikov'/>
                <span className='userName'>
                    Dan Zlotnikov
                </span>
            </span>
        </div>
    )
}

export default Header;