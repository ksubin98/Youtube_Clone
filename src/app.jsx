import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  //videos의 목록을 가질 수 있는 state 필요
  const [videos, setVideos] = useState([]); // videos-데이터저장 , setVideos-vidoe를 업데이트

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyCiclJrAtlEJR52SilZ03S-vmbUAzoYg_E", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))//받아온 비디오들을 items에 업데이트
      .catch(error => console.log('error', error));
  }, []);
  return <VideoList videos={videos}/>
}

export default App;
