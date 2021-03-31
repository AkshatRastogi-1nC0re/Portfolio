import React from 'react';
import { useSelector } from 'react-redux';
// import devIcon from '../images/about-images/dev_icon.png';

const DevAbout = () => {
    const getMode = useSelector(state => state.devMode);

    // className='dev-about-container'
    return (
        <div className={getMode ? 'about-container dev' : 'hide'}>
            <h1>About Me</h1>
            <div className='about-content'>
                <figure className='about-image'>
                    <img className='about-avatar-image dev' src={process.env.PUBLIC_URL + '/assets/images/about/devAvatar.png'} alt='Avatar of Nneka' />
                    <figcaption className='about-caption'>Depiction of Nika "C-137" cooking up a masterplan</figcaption>
                </figure>
                <article className='about-text'>
                    <h3>Part Mastermind</h3>
                    <p>lorem ipsum</p>
                </article>
            </div>
        </div>
    );
}

export default DevAbout;