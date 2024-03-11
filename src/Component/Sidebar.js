import React from 'react';
import Home from '../Asset/home.png';
import game_icon from '../Asset/game_icon.png';
import automobiles from '../Asset/automobiles.png';
import sports from '../Asset/sports.png';
import entertainment from '../Asset/entertainment.png'
import tech from '../Asset/tech.png';
import music from '../Asset/music.png'
import blogs from '../Asset/blogs.png'
import news from '../Asset/news.png'
import jack from '../Asset/jack.png'
import simon from '../Asset/simon.png'
import tom from '../Asset/tom.png'

import megan from '../Asset/megan.png'
import cameron from '../Asset/cameron.png'
const Sidebar =({sidebar})=>{
    return(
<div className={`sidebar ${sidebar===true?"":"small-sidebar"} `}>
    <div className='sortcut-links'>
        
<div className="side-link">
    <img src={Home} alt="home" className="side-icon"/>
    <a href="/home">Home</a>
</div>
<div className="side-link">
    <img src={game_icon} alt="home" className="side-icon"/>
    <a href="/home">Gaming</a>
</div>
<div className="side-link">
    <img src={automobiles} alt="home" className="side-icon"/>
    <a href="/home">Automobiles</a>
</div>
<div className="side-link">
    <img src={sports} alt="home" className="side-icon"/>
    <a href="/home">Sports</a>
</div>
<div className="side-link">
    <img src={entertainment} alt="home" className="side-icon"/>
    <a href="/home">Entertainment</a>
</div>
<div className="side-link">
    <img src={tech} alt="home" className="side-icon"/>
    <a href="/home">Technology</a>
</div>
<div className="side-link">
    <img src={music} alt="home" className="side-icon"/>
    <a href="/home">Music</a>
</div>
<div className="side-link">
    <img src={blogs} alt="home" className="side-icon"/>
    <a href="/home">Blogs</a>
</div>
<div className="side-link">
    <img src={news} alt="home" className="side-icon"/>
    <a href="/home">News</a>
</div>
<hr className='hr'/>
    </div>
    <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className="side-link">
            <img src={jack} alt="home" className="side-icon"/>
            <a href="/home">pewDiepie</a>
        </div>
        <div className="side-link">
            <img src={simon} alt="home" className="side-icon"/>
            <a href="/home">MrBeast</a>
        </div>
        <div className="side-link">
            <img src={tom} alt="home" className="side-icon"/>
            <a href="/home">Justin Bieber</a>
        </div>
        <div className="side-link">
            <img src={megan} alt="home" className="side-icon"/>
            <a href="/home">5-Minute Crafts</a>
        </div>
        <div className="side-link">
            <img src={cameron} alt="home" className="side-icon"/>
            <a href="/home">Nas Daily</a>
        </div>
    </div>

</div>
    )
}

export default Sidebar;