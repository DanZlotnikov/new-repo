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

    if (!currentUser) {
        return;
    }
    return (
        <div className='header'>
            {!currentUser.isLoggedIn && 
                <span className='chambersHeader'>
                    Chambers
                </span>
            }
            {currentUser.isLoggedIn && 
            <>
            <span className='userHeader'>
                <img className='userProfileImg' src={currentUser.profileImgUrl} alt={`${currentUser.firstName} ${currentUser.lastName}`}/>
                <span className='userName'>
                    {`${currentUser.firstName} ${currentUser.lastName}`}
                </span>
            </span>
            <span className='logout'><MdLogout size={20} onClick={handleLogout}/></span>
            </>
            }
        </div>
    )
}

export default Header;