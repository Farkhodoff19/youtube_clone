import React from 'react'

const Video = ({video: {id: {videoId}, snippet: {title, channelTitle, description}}}) => {

  if(!videoId) return <p className='noResult'>No Results</p>;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`

  return (
    <div>
      <div className='video-iframe'>
        <iframe 
        frameBorder="0"
        allowFullScreen
        title="Video Player"
        src={videoSrc}
        />
      </div>

      <div className='videInfo'>
        <h1 className='titleVideo'>{title}</h1>
        <h3 className='channelTitle'>{channelTitle}</h3>
        <p className='description'>{description}</p>
      </div>
    </div>
  )
}

export default Video