import React from 'react';
import Ghost from './Ghost.gif';

const ErrorMessage = () => {
    return (
       <img 
       style={{dusplay: 'block', width: '250px', height: '250px', margin: '0 auto', objectFit: 'contain'}}
       src={Ghost} alt='error'/>
    );
};

export default ErrorMessage;