import React, { useState, useEffect } from "react";
import "./Videos.css";
import YouTubeIcon from '@mui/icons-material/YouTube';

const Videos = () => {
  const [videoUrls, setVideoUrls] = useState([]);

  useEffect(() => {
    let i = 2;
    const urls = [];
    while (i < 6) {
      urls.push(`https://www.youtube.com/embed?listType=playlist&list=UU5H3nVYt3TOPUk_MD6EIgig&index=${i}`);
      i++;
    }
    setVideoUrls(urls);
  }, []);

    const handleViewMore = () => {
        window.open("https://www.youtube.com/channel/UC5H3nVYt3TOPUk_MD6EIgig", "_blank");
    }

  return (
    <div className="video-container">
      <div className="videoWrapper">
        <iframe
          title="latest-video"
          src="https://www.youtube.com/embed?listType=playlist&list=UU5H3nVYt3TOPUk_MD6EIgig"
          allowFullScreen
        ></iframe>
      </div>
      <h1 id="more-videos-title">More Videos</h1>
      <div className="more-videos">
        {videoUrls.map((url, index) => (
          <iframe
            key={index}
            src={url}
            title={`video-${index}`}
            allowFullScreen
          ></iframe>
        ))}
        <YouTubeIcon sx={{
            fontSize: 50,
            ":hover": {
                color: "red",
                cursor: "pointer"
            },
        }} onClick={handleViewMore}/>
      </div>
    </div>
  );
};

export default Videos;
