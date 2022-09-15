import React from 'react'
import SideVideos from './SideVideos';

const ListVideos = ({videos, onVideosSelect}) => {
  const videoLists = videos.map(video => {
    <SideVideos 
      onVideosSelect={onVideosSelect}
      key={video.id.videoId}
      video={video}
    />
  });

  return (
    <div>{videoLists}</div>
  )
}

export default ListVideos