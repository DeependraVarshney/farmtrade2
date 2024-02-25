// import React, { useRef, useEffect } from 'react';

// const VideoPlayer = ({ src }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     const handlePlay = () => {
//       video.play();
//     };

//     const handlePause = () => {
//       video.pause();
//     };

//     const handleStop = () => {
//       video.currentTime = 0;
//       video.pause();
//     };

//     video.addEventListener('loadedmetadata', () => {
//       video.play();
//     });

//     return () => {
//       video.removeEventListener('loadedmetadata', handlePlay);
//       video.removeEventListener('click', handlePlay);
//       video.removeEventListener('pause', handlePause);
//       video.removeEventListener('stop', handleStop);
//     };
//   }, [src]);

//   return (
//     <div className="relative">
//       <video
//         ref={videoRef}
//         src={src}
//         className="w-full h-auto rounded-lg shadow-md"
//         controls
//       />
//       <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 backdrop-blur-sm">
//         <button
//           className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200"
//           onClick={handleStop}
//         >
//           Stop
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer