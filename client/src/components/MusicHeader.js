import React from 'react';
import { Link } from '@reach/router';
import { GiMusicSpell,  } from 'react-icons/gi';
import { FaHome,  } from 'react-icons/fa';

const MusicHeader = () => {
    return (

        <div className="frontPage">
            <h4 >Welcome to!!</h4>
            <h1 className="header-logo"><GiMusicSpell />Music Land</h1>
            <h4>Manage your your concert at Music Land. <br/> Never miss your concert, have fun and enjoy.</h4>
            <img className ="imgmusic" src="https://farm5.static.flickr.com/4014/4287232050_83696c9f23_b.jpg" />
            <br />
            <br />
           <Link to = {'/musicland/login'}><p className="login-Link">Login here to see all Concerts</p></Link>
        </div>
    )
}

export default MusicHeader;
