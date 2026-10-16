import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_URL } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const SuggestionsList = () => {
    const [SuggestionsList, setSuggestionsList]=useState([]);
    useEffect(() => {
        getSuggestionsList();
    }, [])

    const getSuggestionsList= async () => {
        const data = await fetch(YOUTUBE_SEARCH_URL);
        const json = await data.json();
        setSuggestionsList(json.items);
    }
  return (
    <div className='h-[600px] overflow-y-scroll'>
        {SuggestionsList.map((suggestion) => (
           <Link to={"/watch?v=" + suggestion?.id?.videoId}>  <VideoCard info={suggestion} key={suggestion?.id?.videoId} /></Link>
        ))
            }
    </div>
  )
}

export default SuggestionsList