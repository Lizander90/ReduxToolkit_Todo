import React from 'react'
import './style.scss'
/**
 * type --- info
 * type --- error
 * type --- success
 */
const HelperMessage = ({ text, typeColor='info' }) => {
    return (
        <div className={`helper-container ${typeColor}`}>
            <div className='helper-container__text'>
                <span>
                    {text}
                </span>
            </div>

        </div>
    )
}

export default HelperMessage