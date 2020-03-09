import React from 'react';

const Button = ({ buttonText }) => {
    return (
        <button type="button" className="btn btn-primary">{ buttonText }</button>
    )
}

export default Button;