import React from 'react'
import video1 from '../Asset/video.mp4'
import like from '../Asset/like.png'

import dislike from '../Asset/dislike.png'
import share from '../Asset/share.png'
import save from '../Asset/save.png'
import jack from '../Asset/jack.png'
import user_profile from '../Asset/user_profile.jpg'


const Videoplay = () => {
  return (
    <div className='play-video'>
    <video src={video1} controls autoPlay muted></video>
   <h3>Best Javascript Video</h3>
   <div className='play-video-info'>
    <p>1525 Views &bull; 2 day ago</p>
    <div>
        <span><img src={like} alt=''/>234</span>
        <span><img src={dislike} alt=''/>0</span>
        <span><img src={share} alt=''/>54</span>
        <span><img src={save} alt=''/>Save</span>

    </div>
   </div>
   <hr/>
   <div className="publisher">
    <img src={jack} alt=''/>
   
  <div>
  <p>Sam Coding</p>
   <span>12M Subscriber</span>
    </div>
    <button>Suscribe</button>
  </div>
  <div className="vid-description">
    <p>Channel That make learning Easy</p>
    <p>Subscribe Sam Coading to watch more Tutorial on Web Development</p>
    <hr/>
    <h4>1234 Comment</h4>
    <div className='comment'>
        <img src={user_profile} alt=''/>
        <div>
            <h3>Mahi Patil <span>1 Day ago</span></h3>
            <p>Thank You Sir For Learning Great ❤️</p>
            <div className="comment-action">
                <img src={like} alt=''/>
                <span>244</span>
                <img src={dislike} alt=''/>
            </div>
        </div>

    </div>
    <div className='comment'>
        <img src={user_profile} alt=''/>
        <div>
            <h3>Mahi Patil <span>1 Day ago</span></h3>
            <p>Thank You Sir For Learning Great ❤️</p>
            <div className="comment-action">
                <img src={like} alt=''/>
                <span>244</span>
                <img src={dislike} alt=''/>
            </div>
        </div>

    </div><div className='comment'>
        <img src={user_profile} alt=''/>
        <div>
            <h3>Mahi Patil <span>1 Day ago</span></h3>
            <p>Thank You Sir For Learning Great ❤️</p>
            <div className="comment-action">
                <img src={like} alt=''/>
                <span>244</span>
                <img src={dislike} alt=''/>
            </div>
        </div>

    </div>
  </div>
</div>
  )
}

export default Videoplay
