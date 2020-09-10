import React from "react";
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom';

const MenuItem = ({item, imgUrl, size, history, url, match}) => {
    return <div className={`menu-item ${size}`}
                onClick={() => history.push(`${match.url}${url}`)}>
        <div className='background-image'
             style=
                 {{
                     backgroundImage: `url(${imgUrl})`
                 }}
        />
        <div className='content'>
            <h1 className="title">{item.toUpperCase()}</h1>
            <span className="subtitle">BOOK NOW</span>
        </div>
    </div>
}

export default withRouter(MenuItem);
