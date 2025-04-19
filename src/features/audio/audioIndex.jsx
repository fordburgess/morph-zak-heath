import { useEffect } from "react";

const AudioIndexView = () => {

//   const logScrollPosition = () => {
//     console.log('Scroll position:', window.scrollY);
//   };
//
//   useEffect(() => {
//     function addScroll() {
//       window.addEventListener('scroll', logScrollPosition);
//     }
//     addScroll()
//     return () => {
//       window.removeEventListener('scroll', logScrollPosition);
//     };
//   }, []);


  return (
    <div style={{ height: '2000px', backgroundColor: 'gray' }}>
      <div style={{ height: '100px', width: '100vw', backgroundColor: 'yellow' }}></div>
      <div style={{
        zIndex: 999,
        height: '100px',
        width: '100px',
        backgroundColor: 'red',
        position: 'sticky',
        top: '-50px',
        display: 'block',
      }}></div>
    </div>
  )
}

export default AudioIndexView;
