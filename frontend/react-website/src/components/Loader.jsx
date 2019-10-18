import React from 'react'
import LoadSpinner from '../media/eclipse.gif';

const Loader = props => {
    return (
        <div>
            <img alt="Loader Icon" src={LoadSpinner} />
        </div>
    )
}

export default Loader