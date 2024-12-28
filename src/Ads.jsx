import React from 'react';
import AdSense from 'react-adsense';

const AdUnit = () => {
    const adClient = 'ca-pub-3098905378126813'; // Replace with your actual AdSense client ID
    const adSlot = '7145951754'; // Replace with your actual AdSense ad unit code
  
    return (
      <div>
        <AdSense.Google
            client={adClient}
            slot={adSlot}
            format='auto'
            responsive='true'
            layoutKey='-gw-1+2a-9x+5c'
        />
      </div>
    );
  };
  
  export default AdUnit;