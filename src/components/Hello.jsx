import React from 'react';
import { useParams } from 'react-router-dom';


const Hello = () => {

    const { palabra } = useParams();

    return (
        <div>
            <h1>The word is : {palabra}</h1>
        </div>
    );
}

export default Hello;