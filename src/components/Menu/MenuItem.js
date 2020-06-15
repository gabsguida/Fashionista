import React from 'react';

const MenuItem = ({url, text}) => {
    return(
        <li>
            <a href={url}>{text}</a>
        </li>
    );
}

export default MenuItem;