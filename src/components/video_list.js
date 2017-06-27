import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videos = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={ props.onVideoSelect }
                key={ video.etag }
                video={ video }
            />
        );
    });
    
    return (
        <div>
            <ul className="col-md-4 list-group">
                { videos }
            </ul>
        </div>
    );
};

export default VideoList;