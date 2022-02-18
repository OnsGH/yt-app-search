import React from 'react'


const VideoDetail = (props) => {
  if(!props.video) {
      return <div>Loading...</div>
  }

// go to youtube  click on share then to the first icon
  const videoSrc=`//www.youtube.com/embed/${props.video.id.videoId}`
    return (
    <div>
        <div className="ui embed">
            <iframe title="youtube player" src={videoSrc}></iframe>
            </div>
        <div className="ui segment">
            <h4 className="ui header">{props.video.snippet.title}</h4>  
            <p>{props.video.snippet.description}</p>
        </div>
    </div>
    )
};


export default VideoDetail;
