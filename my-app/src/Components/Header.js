import profilePicDan from '../../src/New folder/profile_pic_dan.jpg';
import { MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authReducer';
import { useNavigate } from "react-router-dom";

function Header() {
    const currentUser = useSelector((state) => state.authReducer.currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <div className='header'>
            
            {currentUser.isLoggedIn && 
            <>
            <span className='userHeader'>
                <img className='userProfileImg' src={currentUser.profileImgUrl} alt='Dan Zlotnikov'/>
                <span className='userName'>
                    Dan Zlotnikov
                </span>
            </span>
            <span className='logout'><MdLogout size={20} onClick={handleLogout}/></span>
            </>
            }
        </div>
    )
}

export default Header;