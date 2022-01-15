import React from 'react';
import VideoItems from '../video_items/video_items';
import styles from './video_list.module.css';

const VideoList = (props) => (
            <ul className={styles.videos}>
                {props.videos.map(video => (
                <VideoItems key={video.id} video={video}/>
                ))}
            </ul>
    );

export default VideoList;