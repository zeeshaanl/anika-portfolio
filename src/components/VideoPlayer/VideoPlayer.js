import React, { Fragment } from 'react';
import YouTube from 'react-youtube';

import './VideoPlayer.css';

const videoId = 'XlN48Yi8Chw';
const opts = {
    width: '100%',
    height: '90%'
};
const VideoPlayer = () =>
    <div className='c-video-player'>
        <YouTube
            videoId={videoId}
            opts={opts}
        />
    </div>;

export default VideoPlayer;