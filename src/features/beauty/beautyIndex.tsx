import { useState, useEffect, useRef } from 'react';
import FieldWide from '../../assets/field-wide.png';
import FieldAbove from '../../assets/field-above.png';
import FieldExpanded from '../../assets/field-expanded.jpg';
import FieldExpandedTest from '../../assets/field-test.jpeg';
import './styles/beautyIndex.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const BeautyIndexView = () => {
  const containerRef = useRef(null);


  gsap.to('.scroll-in-content', {
    scrollTrigger: '.scroll-in-content', // start animation when ".box" enters the viewport
    x: 500
  });

  useEffect(() => {

  }, [])


  return (
    <div className='beauty-content-container'>
      <img src={FieldAbove} className='overhead-image' />
      <div ref={containerRef} className='pinned-scroll-container'>
        <div className='expanded-image-container'>
          <img src={FieldExpandedTest} className='expanded-image' />
        </div>
      </div>
      <div className='scroll-in-content'>
        <p>Scroll In Content</p>
      </div>
    </div>
  )
}

export default BeautyIndexView;
