import React from 'react'
import womenIcon from '../assets/icons/woman.png'

const ChatMessages = ({name, message}) => {
  return (
    <div className='items-center flex gap-2 border-b-2 border-gray-200 p-2'>
        <img src={womenIcon} className='h-8'/>
        <span className='font-bold'>{name}</span>
        <span>{message}</span>

    </div>
  )
}

export default ChatMessages