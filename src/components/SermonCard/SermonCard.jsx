// import React from 'react'
// import './SermonCard.css'
// import { images } from '../../constants'
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

// const SermonCard = () => {

//     const handleJoin = () => {
//         window.open('https://us02web.zoom.us/j/2884333949?pwd=bFI4QWkxMDBtQU53Z1QyZFpZYThydz09', '_blank')
//     }
//   return (
//     <div className="sermons-card-container">
//         <div className="card-title">
//             Join Us & Become Part Of Something Great
//         </div>
//         <div className="card-content">
//             <div className="text">
//                 <div className="heading">WATCH AND LISTEN TO OUR SERMONS</div>
//                 <div className="description">Explore our library of sermons and let God's word transform your heart. Be encouraged, uplifted, and equipped to live a life that honors and glorifies our Lord and Savior, Jesus Christ.</div>
//                 <div className="time-box">
//                     <AccessTimeIcon className='icon'/>
//                     <div className="time">Sunday 1.30 PM (Europe)</div>
//                 </div>
//                 <div className="time-box">
//                     <AccessTimeIcon className='icon'/>
//                     <div className="time">Tuesday pray for salvation 12.30 (Europe)</div>
//                 </div>
//                 <div className="time-box">
//                     <AccessTimeIcon className='icon'/>
//                     <div className="time">Saturday fasting prayer 10.00 AM (Europe)</div>
//                 </div>
//                 <div className="time-box">
//                     <AccessTimeIcon className='icon'/>
//                     <div className="time">House meeting every Tuesday 7.00 PM (Europe)</div>
//                 </div>
//                 <div className="join-button">
//                     <button onClick={handleJoin}>JOIN US</button>
//                 </div>
//             </div>
//             <div className="image">
//                 <img src={images.Sermon} alt="sermon" />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default SermonCard


import React from 'react'
import './SermonCard.css'
import { images } from '../../constants'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const SermonCard = () => {

    const handleJoin = () => {
        window.open('https://us02web.zoom.us/j/2884333949?pwd=bFI4QWkxMDBtQU53Z1QyZFpZYThydz09', '_blank')
    }
  return (
    <div className="sermons-card-container">
        <div className="card-title">
            Join Us & Become Part Of Something Great
        </div>
        <div className="card-content">
            <div className="text">
                <div className="heading">WATCH AND LISTEN TO OUR SERMONS</div>
                <div className="description">Explore our library of sermons and let God's word transform your heart. Be encouraged, uplifted, and equipped to live a life that honors and glorifies our Lord and Savior, Jesus Christ.</div>
                <div className="time-box">
                    <AccessTimeIcon className='icon'/>
                    <div className="time">Sunday 1.30 PM (Europe)</div>
                </div>
                <div className="time-box">
                    <AccessTimeIcon className='icon'/>
                    <div className="time">Tuesday pray for salvation 12.30 (Europe)</div>
                </div>
                <div className="time-box">
                    <AccessTimeIcon className='icon'/>
                    <div className="time">Saturday fasting prayer 10.00 AM (Europe)</div>
                </div>
                <div className="time-box">
                    <AccessTimeIcon className='icon'/>
                    <div className="time">House meeting every Tuesday 7.00 PM (Europe)</div>
                </div>
                {/* <div className="time-box">
                    <FmdGoodOutlinedIcon className='icon'/>
                    <div className="time">No 233 Main St. New York, United States</div>
                </div> */}
                <div className="join-button">
                    <button onClick={handleJoin}>JOIN US</button>
                </div>
            </div>
            <div className="image">
                <img src={images.Sermon} alt="sermon" />
            </div>
        </div>
    </div>
  )
}

export default SermonCard