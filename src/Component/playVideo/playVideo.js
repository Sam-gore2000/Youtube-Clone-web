import React from 'react'
import './playVideo.css'
import video1 from '../../Asset/video.mp4'
// import like from '../../Asset/like.png'
// import dislike from '../../Asset/dislike.png'
// import share from '../../Asset/share.png'
// import save from '../../Asset/save.png'
// import jack from '../../Asset/jack.png'
// import user_profile from '../../Asset/user_profile.jpg'

const playVideo=() =>{
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
       
      
    </div>
  )
}

export default playVideo;
