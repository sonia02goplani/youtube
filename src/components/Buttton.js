import React from 'react'

const Buttton = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 m-2 p-2 rounded-lg hover:bg-slate-200'>{name}</button>
    </div>
  )
}

export default Buttton