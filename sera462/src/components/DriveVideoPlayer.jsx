import React from 'react';

const DriveVideoPlayer = ({ driveUrl }) => {
  // Convert the shared link to embed format
  const embedUrl = driveUrl.replace('/view?usp=drive_link', '/preview');

  return ( 
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
        <iframe 
          src={embedUrl} 
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          frameBorder="0" 
          allow="autoplay; fullscreen" 
          allowFullScreen 
        ></iframe> 
      </div>
    </div>
  );
};

export default DriveVideoPlayer; 