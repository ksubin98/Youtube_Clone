import React from 'react';
import VideoItems from '../video_items/video_items';

const VideoList = (props) => (
            <ul>
                {props.videos.map(video => (
                <VideoItems key={video.id} video={video}/>
                ))}
            </ul>
    );

export default VideoList;