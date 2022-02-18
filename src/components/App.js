import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'

import VideoList from '../components/VideoList'
import VideoDetail from '../components/VideoDetail'
import  useVideos from '../hooks/useVideos'

const App = () => {

const [selectedVideo, setSelectedVideo] = useState(null);
const [videos, search] = useVideos('cars');

//  
useEffect ( ()=> {

    setSelectedVideo(videos[0])

},[videos]);

   const onVideoSelect = (video)=>{
     
    console.log('From App ', video)
    setSelectedVideo({video})
    }

    return (
        <div className="ui container">
            <SearchBar onFormSubmit = {search} />
            <div className="ui grid">
                <div className="ui row">
                     <div className="eleven wide column"><VideoDetail video = {selectedVideo} /></div>
                     <div className="five wide column"><VideoList onVideoSelect = {onVideoSelect} videos = {videos} /></div>
                </div>
            </div>
        </div>
     
        );

};



export default App;