import React from 'react'
import './Widgets.css'
function Widgets() {
    return (
        <div classname='widgets'>
            <iframe src='https://www.facebook.com/20531316728/posts/10154009990506729/'
            width = "340"
            height="100%"
            style = {{border : "none", overflow:"hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            ></iframe>
        </div>
    );
}

export default Widgets
