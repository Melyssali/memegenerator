import React from 'react';
import './generatedimage.scss';


const GeneratedImage = ({ url, topvalue, bottomvalue }) => {
    //on utilise le state du fichier 'input', provenant du context du même fichier

    return (
        <div className='main--generated'>
            <img className='img--generated' alt='test' src={url} />
            <h2 className='img-top-text'>{topvalue}</h2>
            <h2 className='img-bottom-text'>{bottomvalue}</h2>
        </div>
    )
}

export default GeneratedImage;