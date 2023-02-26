import { useState } from 'react';
import texts from '../../texts';

function EditDeleteSpan({handleSetEdit, handleDelete}) {
    const [checkDeleteSure, setCheckDeleteSure] = useState(false);
    
    return (
        <div>
            {!checkDeleteSure &&
                <span>
                    <span className='editSpan' onClick={() => handleSetEdit(true)}>
                        {texts().general.edit}
                    </span>
                    {handleDelete &&
                        <span className='deleteSpan' onClick={() => setCheckDeleteSure(true)}>
                            {texts().general.delete}
                        </span>
                    }
                </span>
            }
            {checkDeleteSure &&
                <span className='deleteAreYouSure'>
                    {texts().general.areYouSure}
                    <span className='yes' onClick={() => handleDelete()}>
                        {texts().general.yes}
                    </span>
                    /
                    <span className='no' onClick={() => setCheckDeleteSure(false)}>
                        {texts().general.no}
                    </span>
                </span>
            }
        </div>
    )
}

export default EditDeleteSpan;