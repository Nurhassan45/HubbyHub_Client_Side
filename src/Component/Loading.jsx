import React from 'react';
import Load from '../../public/Loading.json'
import Lottie from 'lottie-react';
const Loading = () => {
    return (
        <div>
            <Lottie animationData={Load}/>
        </div>
    );
};

export default Loading;