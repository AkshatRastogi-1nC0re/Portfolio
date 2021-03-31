import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Parallax from 'parallax-js';
// import tower from '../images/design-home-images/2-tower.png';
// import trees from '../images/design-home-images/3-midground.png';
// import shack from '../images/design-home-images/4-shack.png';
// import floatCharacters from '../images/design-home-images/5-character.png';
// import groundCharacters from '../images/design-home-images/5-characters.png';
// import minigameIcon from '../images/design-home-images/6-minigame-icon.png';
// import fgTrees from '../images/design-home-images/7-foreground.png';



const DesignHomePage = () => {
    const getMode = useSelector(state => state.devMode);

    const sceneRef = useRef();
    const backgroundStyle = {
        background: `url(${process.env.PUBLIC_URL}/assets/images/home/design/1skyBackground.png)`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
    };

    useEffect(() => {
        const parallaxScene = new Parallax(sceneRef.current, {
            relativeInput: true,
            hoverOnly: true,
            limitY: 1,
        })

        parallaxScene.enable();

        return () => parallaxScene.disable();

    }, [])

    // className='container'
    return (
        <div className={getMode ? 'hide' : 'container'}
            style={backgroundStyle}
            onClick={() => { console.log('opening minigame') }}>
            <ul ref={sceneRef} id='scene'>
                <li className='layer tower' data-depth='0.2'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/home/design/2waterTower.png'} alt='background tower' />
                </li>
                <li className='layer trees' data-depth='0.3'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/home/design/3treesMidground.png'} alt='background trees' />
                </li>
                <li className='layer shack' data-depth='0.4'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/home/design/4mysteryShack.png'} alt='mystery shack' />
                </li>
                <li className='layer' data-depth='0.4'>
                    <img className='minigame-icon' src={process.env.PUBLIC_URL + '/assets/images/home/design/6minigameIcon.png'} alt='bill cipher minigame icon' />
                </li>
                <li className='layer characters1' data-depth='1'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/home/design/5floatingCharacters.png'} alt='gravity falls floating characters' />
                </li>
                <li className='layer characters2' data-depth='0.5'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/home/design/5groundCharacters.png'} alt='gravity falls ground characters' />
                </li>
                <li className='layer fg-trees' data-depth='0'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/home/design/7treesForeground.png'} alt='foreground trees' />
                </li>
            </ul>
        </div>
    );
}

export default DesignHomePage;