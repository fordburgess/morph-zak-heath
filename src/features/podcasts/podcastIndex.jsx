import { useEffect } from "react";

const PodcastIndexView = () => {

  const logScrollPosition = () => {
    console.log('Scroll position:', window.scrollY);
  };

  useEffect(() => {

    function addScroll() {
      window.addEventListener('scroll', logScrollPosition);
    }

    addScroll()

    return () => {
      window.removeEventListener('scroll', logScrollPosition);
    };
  }, []);


  return (
    <div style={{ height: '2000px', backgroundColor: 'gray' }}>

    </div>
  )
}

export default PodcastIndexView;
