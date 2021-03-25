import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from '../actions';

const ToggleBar = () => {
    const dispatch = useDispatch();
    const isChecked = useSelector(state => state.devMode);

    return (
        <div className='toggle-bar'>
            <input
                type='checkbox'
                className='toggle-checkbox'
                id='toggle-checkbox'
                name="toggle-theme"
                value={isChecked}
                onChange={() => {
                    dispatch(toggleMode())
                    document.body.classList.toggle('lightMode')
                }} />
            <label htmlFor='toggle-checkbox' className='label'>
                <i className="fas fa-pencil-alt"></i>
                <i className="fas fa-code"></i>
                <div className='ball'></div>
            </label>
        </div>

    );
}

export default ToggleBar;