import React from 'react';
import './app.css';
import Videos from './components/videos';

function App() {
  const [video, setVideo] = useState('');


  useEffect(() =>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyDFPqKFj9sdRSEl2tzkPjSDhdTCtl6NIZw", requestOptions)
      .then(response => response.json())
      .then(result => console.log(video))
      .catch(error => console.log('error', error));
  }, [])


  return (
    <>
      <Videos />
    </>
  );
}

export default App;
