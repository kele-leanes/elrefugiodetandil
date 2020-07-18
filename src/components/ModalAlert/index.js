import React from 'react'
import './index.css'

function ModalAlert (props) {
        return (
            <div className='modal'>
                <div className='modal-msg'>
                    <p>{props.textMsg}</p>
                </div>
                <button className='btn-primary' onClick={props.handler}>seguir</button>
            </div>
        )

}

export default ModalAlert