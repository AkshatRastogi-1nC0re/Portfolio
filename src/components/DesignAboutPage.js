import React from 'react';
import { useSelector } from 'react-redux';
// import desIcon from '../images/about-images/des_icon.png';

const DesignAbout = () => {

    const getMode = useSelector(state => state.devMode);
    // className='des-about-container'
    return (
        <div className={getMode ? 'hide' : 'about-container des'}>
            <h1>About Me</h1>
            <div className='about-content'>
                <article className='about-text'>
                    <h3>Part Unicorn</h3>
                    <p>lorem ipsum</p>
                </article>
                <figure className='about-image'>
                    <img className='about-avatar-image des' src={process.env.PUBLIC_URL + '/assets/images/about/designAvatar.png'} alt='Avatar of Nneka' />
                    <figcaption className='about-caption'>Accurate depiction of Nika when in the vicinity of sushi</figcaption>
                </figure>
            </div>
        </div >
    );
}

export default DesignAbout;