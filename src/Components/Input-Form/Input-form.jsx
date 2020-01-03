import React from 'react';

import './Input-Form.styles.scss';

const InputForm = ({ handleChange, label, ...otherProps }) => (

    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {label ? 
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
            </label>)
            : null }
    </div>
);

export default InputForm;