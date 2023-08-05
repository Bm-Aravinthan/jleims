// import React, { useState, useEffect } from "react";
// import "./Videos.css";
// import YouTubeIcon from '@mui/icons-material/YouTube';

// const Videos = () => {
//   const [videoUrls, setVideoUrls] = useState([]);

//   useEffect(() => {
//     let i = 2;
//     const urls = [];
//     while (i < 6) {
//       urls.push(`https://www.youtube.com/embed?listType=playlist&list=UU5H3nVYt3TOPUk_MD6EIgig&index=${i}`);
//       i++;
//     }
//     setVideoUrls(urls);
//   }, []);

//     const handleViewMore = () => {
//         window.open("https://www.youtube.com/channel/UC5H3nVYt3TOPUk_MD6EIgig", "_blank");
//     }

//   return (
//     <div className="video-container">
//       <div className="videoWrapper">
//         <iframe
//           title="latest-video"
//           src="https://www.youtube.com/embed?listType=playlist&list=UU5H3nVYt3TOPUk_MD6EIgig"
//           allowFullScreen
//         ></iframe>
//       </div>
//       <h1 id="more-videos-title">More Videos</h1>
//       <div className="more-videos">
//         {videoUrls.map((url, index) => (
//           <iframe
//             key={index}
//             src={url}
//             title={`video-${index}`}
//             allowFullScreen
//           ></iframe>
//         ))}
//         <YouTubeIcon sx={{
//             fontSize: 50,
//             ":hover": {
//                 color: "red",
//                 cursor: "pointer"
//             },
//         }} onClick={handleViewMore}/>
//       </div>
//     </div>
//   );
// };

// export default Videos;


import React, { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import "./Videos.css";

const Videos = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let i = 2;
    const urls = [];
    while (i < 6) {
      urls.push(
        `https://www.youtube.com/embed?listType=playlist&list=UU5H3nVYt3TOPUk_MD6EIgig&index=${i}`
      );
      i++;
    }

    setTimeout(() => {
      setVideoUrls(urls);
      setLoading(false);
    }, 2000); 
  }, []);

  const handleViewMore = () => {
    window.open(
      "https://www.youtube.com/channel/UC5H3nVYt3TOPUk_MD6EIgig",
      "_blank"
    );
  };

  return (
    <div className="video-container">
      <div className="videoWrapper">
        {loading ? (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="600px"
            animation="wave"
          />
        ) : (
          <iframe
            title="latest-video"
            src="https://www.youtube.com/embed?listType=playlist&list=UU5H3nVYt3TOPUk_MD6EIgig"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <h1 id="more-videos-title">More Videos</h1>
      <div className="more-videos">
        {loading ? (
          <>
            <Skeleton
              variant="rectangular"
              width="100%"
              height="200px"
              animation="wave"
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height="200px"
              animation="wave"
            />
          </>
        ) : (
          videoUrls.map((url, index) => (
            <iframe
              key={index}
              src={url}
              title={`video-${index}`}
              allowFullScreen
            ></iframe>
          ))
        )}
        <div className="view-more" onClick={handleViewMore}>
          <h2>View More</h2>
        </div>
      </div>
    </div>
  );
};

export default Videos;