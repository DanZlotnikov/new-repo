import { cloneElement } from 'react';

function TopicSectionCard({selected, icon, iconColor, dataCount}) {
    return (
        <div className={'topicSectionCard ' + (selected ? 'selected' : '')}>
            {cloneElement(icon, {size: 35, color: iconColor})}
            <div className='dataCount'>
                {dataCount}
            </div>
        </div>
    )
}

export default TopicSectionCard;