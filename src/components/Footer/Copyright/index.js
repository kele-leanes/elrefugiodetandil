import React from 'react';
import moment from 'moment';
import './index.css';

function Copyright() {
    return(
        <div className='footer-bottom'>
            <p>&copy; {moment(new Date()).format("YYYY")} - el refugio | bar serrano</p>
            <p className='author'>designed and developed by <a href='https://www.linkedin.com/in/ezequiel-leanes-4575451a3/'>Ezequiel Leanes</a></p>
        </div>
    )
}

export default Copyright