function BodySelectionCard({selected, imgPath, dataCount}) {
    return (
        <div className={'body-selection-card ' + (selected ? 'selected' : '')}>
            <img className='selection-img' src={imgPath} />
            <div className='data-count'>
                {dataCount}
            </div>
        </div>
    )
}

export default BodySelectionCard;