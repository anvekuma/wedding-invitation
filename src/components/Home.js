import React from 'react';
import ganesh from '../assets/ganesh.png';

function Home() {
  return (
  <div class="custom">
    <img src={ganesh} className="ganesh-logo" alt="ganesh" />
    Welcome to my wedding..!!!
    <img src={ganesh} className="ganesh-logo" alt="ganesh" />
    
    <br/><br/>
    <i>Your presence on our wedding day will make it even more special and memorable for us.</i> 

    <br/><br/><br/>
    <i>Marriage on September 3rd 2023 @11:15AM </i>
    <br/><br/>
    <i>Reception on September 4th 2023 from 6PM </i>
    
    <br/><br/>
  </div>

  );
}

export default Home;
