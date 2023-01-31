import { useState } from 'react';

function EditDeleteSpan({handleSetEdit, handleDelete}) {
    const [checkDeleteSure, setCheckDeleteSure] = useState(false);
    
    return (
        <div>
            {!checkDeleteSure &&
                <span>
                    <span className='editSpan' onClick={() => handleSetEdit(true)}>
                        Edit
                    </span>
                    {handleDelete &&
                        <span className='deleteSpan' onClick={() => setCheckDeleteSure(true)}>
                            Delete
                        </span>
                    }
                </span>
            }
            {checkDeleteSure &&
                <span className='deleteAreYouSure'>
                    Are you sure?
                    <span className='yes' onClick={() => handleDelete()}>
                        Yes
                    </span>
                    /
                    <span className='no' onClick={() => setCheckDeleteSure(false)}>
                        No
                    </span>
                </span>
            }
        </div>
    )
}

export default EditDeleteSpan;