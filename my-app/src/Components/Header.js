import { MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { logout, changeLanguage } from '../redux/authReducer';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { GB, IL } from 'country-flag-icons/react/3x2';

function Header() {
    const currentUser = useSelector((state) => state.authReducer.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [languageSelectionOpen, setLanguageSelectionOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    const handleLanguageChange = (language) => {
        dispatch(changeLanguage(language));
        setLanguageSelectionOpen(false);
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
                <span className='headerToolbar'>
                    <span className="languageCont">
                        <span>
                        {currentUser.language === 'en' && 
                            <GB title='English' className='selectedLanguageFlag' onClick={() => setLanguageSelectionOpen(true)} />
                        }                            
                        {currentUser.language === 'he' &&     
                            <IL title='Hebrew' className='selectedLanguageFlag' onClick={() => setLanguageSelectionOpen(true)}/>
                        }
                        </span>
                            {languageSelectionOpen && 
                                <span className="languageMenu">
                                    <span className='languageItem'>
                                        <IL title='Hebrew' className='languageFlag' onClick={() => handleLanguageChange('he')}/>
                                    </span>
                                    <span className='languageItem'>
                                        <GB title='English' className='languageFlag' onClick={() => handleLanguageChange('en')} />
                                    </span>
                                </span>
                            }
                    </span>
                    <span className='logout'><MdLogout size={20} onClick={handleLogout}/></span>
                </span>
            </>
            }
        </div>
    )
}

export default Header;