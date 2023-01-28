function BodySelectionCard({selected, imgPath, dataCount}) {
    return (
        <div className={'bodySelectionCard ' + (selected ? 'selected' : '')}>
            <img className='selectionImg' src={imgPath} alt=''/>
            <div className='dataCount'>
                {dataCount}
            </div>
        </div>
    )
}

export default BodySelectionCard;