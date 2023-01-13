import profilePicDan from '../../src/New folder/profile-pic-dan.jpg';

function Header() {
    return (
        <div className='header'>
            <span className='user-header'>
                <img className='user-profile-pic' src={profilePicDan} />
                <span className='user-name'>
                    Dan Zlotnikov
                </span>
            </span>
        </div>
    )
}

export default Header;