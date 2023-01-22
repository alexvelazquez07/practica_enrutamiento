import React from 'react';
import { useParams } from 'react-router-dom';

const Color = () => {

    const params = useParams();

    return (
        <div style ={{color: params.textColor || 'black', backgroundColor: params.backgroundColor || 'white'}}>The word is "{params.word}"</div>
    );
}

export default Color;