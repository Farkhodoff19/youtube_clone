import React, {useState} from "react";
import Search from "./components/Search";   
import URL from "./api/URL"
import "./design.css";
import Video from "./components/Video";
import ListVideos from "./components/ListVideos";

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideos, setSelectedVideos] = useState({});

    async function videoSubmit(searchTerm) {
        const {data: {items: videos}} = await URL.get('search', {
            params: {
                part: "snippet",
                maxResults: 5,
                key: "AIzaSyBfp7siOoftrZzxXbXeSRa9UbOsC6qQXs0",
                q: searchTerm
            }
        });

        setVideos(videos);
        setSelectedVideos(videos[0]);
    }


    return (
        <div>
            <div className="searchSection">
                <Search onSubmit={videoSubmit}/>
            </div>
            <div className="video-main">
                <div className="video-section">
                    <Video video={selectedVideos} />
                    <div className="video-lists">
                        <ListVideos videos={videos} onVideoSelected={setSelectedVideos}/>
                    </div>
                </div>
            </div>
        </div>
    )
}   
export default App