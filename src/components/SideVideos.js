import React from 'react'

const SideVideos = ({video, onVideoSelect}) => {
  return (
    <div>
      <div className='videoItems' onClick={() => onVideoSelect(video)}>
        <img src={video.snippet.thumbnail.medium.url} alt="overlay" style={{marginRight: "20px"}} />
        <p className='title-video'>
          <b>{video.snippet.title}</b>
        </p>
      </div>
    </div>
  )
}

export default SideVideos