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

  useEffect(() => {
    gsap.to('.overhead-image', {
      y: '40%', // Move the image upward as you scroll
      ease: 'none',
      scrollTrigger: {
        trigger: '.beauty-content-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true, // Scrubs the animation with the scroll
      },
    });

    gsap.fromTo('.scroll-in-content', {
        opacity: 0,
        y: '100%', // Start below the screen
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.pinned-scroll-container',
          start: 'top 20%',
          end: 'bottom bottom',
          scrub: true,
        },
        ease: 'sine.inOut'
      }
    );
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
        <div className='main-content'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default BeautyIndexView;
