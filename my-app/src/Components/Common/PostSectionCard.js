import { cloneElement } from 'react';

function PostSectionCard({selected, icon, iconColor, dataCount}) {
    return (
        <div className={'postSectionCard ' + (selected ? 'selected' : '')}>
            {cloneElement(icon, {size: 35, color: iconColor})}
            {dataCount && 
                <div className='dataCount'>
                    {dataCount}
                </div>
            }
        </div>
    )
}

export default PostSectionCard;