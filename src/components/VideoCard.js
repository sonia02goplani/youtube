import React from 'react'

const VideoCard = ({info}) => {
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' alt='thumbnail' src={info?.snippet?.thumbnails?.medium?.url}/>
        <ul>
            <li className='font-bold flex-wrap'>{info?.snippet?.title}</li>
            <li>{info?.snippet?.channelTitle} ➡{info?.statistics?.viewCount}</li>
        </ul>
    </div>
  )
}

export const AdVideoCard = ({info}) =>{
    return (
        <div className='border-red-500 border-2'>
            <VideoCard info={info}/>
            <p className='px-2'>Ad</p>
        </div>    )
}

export default VideoCard