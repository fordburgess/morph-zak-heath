import { useState, useEffect, useRef } from 'react';
import FieldWide from '../../assets/field-wide.png';
import FieldAbove from '../../assets/field-above.png';
import FieldExpanded from '../../assets/field-expanded.jpg';
import './styles/beautyIndex.css';

const BeautyIndexView = () => {
  const [closeView, setCloseView] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const expandedRef = useRef(null);

  const handleClick = () => {
    const wideImage = document.querySelector('.wide-image');
    const contentContainer = document.querySelector('.beauty-content-container');

    setCloseView(prev => !prev);
    if (wideImage) {

      if (!closeView) {
        wideImage.style.transition = 'transform 0.3s ease-in-out, opacity 1.2s ease-in-out';
        contentContainer.style.transition = 'opacity 0.5s ease-in-out';
        contentContainer.style.display = 'block';

        wideImage.style.transform = 'scale(2)';
        wideImage.style.opacity = 0;

        setTimeout(() => {
          wideImage.style.display = 'none';
        }, 700);

        requestAnimationFrame(() => {
          contentContainer.style.opacity = 1;
        });
      }
      else {
        wideImage.style.transition = 'transform 0.3s ease-in-out, opacity 0.5s ease-in-out';
        wideImage.style.opacity = 1;
        wideImage.style.transform = 'scale(1)';

        setTimeout(() => {
          contentContainer.style.display = 'none';
        }, 700);
      }
    }
  }

  useEffect(() => {
    console.log(window.scrollY)
    const logScrollPosition = () => {
      console.log('Scroll position:', window.scrollY);
    };

    window.addEventListener('scroll', logScrollPosition);

    return () => {
      window.removeEventListener('scroll', logScrollPosition);
    };
  }, []);

  return (
    <div className='beauty-page-container' onClick={() => handleClick()}>
      <img src={FieldWide} className='wide-image' />
      <div className='beauty-content-container'>
        <img src={FieldAbove} className='overhead-image' />
        <div ref={expandedRef} className='pinned-scroll-container'>
          <img src={FieldExpanded} className='expanded-image' />
        </div>
        <div className='circle-content-container'>
          <div className='circle-content'></div>
          <div className='circle-content'></div>
          <div className='circle-content'></div>
        </div>
      </div>
    </div>
  )
}

export default BeautyIndexView;
