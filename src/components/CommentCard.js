import React from 'react'
import userImg from '../assets/icons/woman.png'

const CommentCard = ({commentInfo}) => {
    const commentDetails = commentInfo?.snippet?.topLevelComment?.snippet;
    if(!commentDetails) return null;
  return (
    <div className='flex gap-2 p-2'>
        <img src={userImg} alt="user" className='h-8'/>
        <div className='flex flex-col'>
            <span className='font-bold'>{commentDetails?.authorDisplayName}</span>
            <span className='text-sm'>{commentDetails.textDisplay}</span>
        </div>
    </div>
  )
}

export default CommentCard