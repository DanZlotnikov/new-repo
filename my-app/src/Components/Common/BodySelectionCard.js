import { cloneElement } from 'react';

function BodySelectionCard({selected, icon, iconColor, dataCount}) {
    return (
        <div className={'bodySelectionCard ' + (selected ? 'selected' : '')}>
            {cloneElement(icon, {size: 50, color: iconColor})}
            <div className='dataCount'>
                {dataCount}
            </div>
        </div>
    )
}

export default BodySelectionCard;