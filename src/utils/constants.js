
const GOOGLE_API_KEY ="AIzaSyCuet1A36DAkHr0xTUeV3VXwcq-_NK0Vfc"
export const YOUTUBE_VIDEOS_URL= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`
export const YOUTUBE_COMMENTS_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&part=snippet&videoId=`
export const YOUTUBE_SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&part=snippet&maxResults=25&regionCode=IN&ype=video&`

export const SEARCH_SUGGESTIONS=`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query`
export const OFFSET_LIVE_CHAT =10