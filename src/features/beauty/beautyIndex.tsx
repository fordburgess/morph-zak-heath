import { useState, useEffect, useRef } from 'react';
import FieldWide from '../../assets/field-wide.png';
import FieldAbove from '../../assets/field-above.png';
import FieldExpanded from '../../assets/field-expanded.jpg';
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
//     gsap.registerPlugin(ScrollTrigger);
//
//     gsap.to('.expanded-image', {
//       yPercent: 0, // move image up as you scroll (parallax effect)
//       ease: 'none',
//       scrollTrigger: {
//         trigger: '.pinned-scroll-container',
//         start: 'top top',
//         end: 'top center',
//         scrub: true, // link animation to scroll
//       },
//     });

    // ScrollTrigger.create({
    //   trigger: '.pinned-scroll-container',
    //   start: 'center top',
    //   end: 'top top',
    //   scrub: true,
    //   onUpdate: self => {
    //     // Freeze position of the image by setting transform to fixed value
    //     if (self.progress >= 0 && self.progress <= 1) {
    //       gsap.set('.expanded-image', { yPercent: -20 });
    //     }
    //   }
    // });

    // gsap.fromTo(
    //   '.scroll-in-content',
    //   { opacity: 0, y: 100 }, // Starts off-screen and invisible
    //   {
    //     opacity: 1,
    //     y: 0,
    //     delay: 1, // Add a delay here (1 second) to wait before it starts scrolling
    //     scrollTrigger: {
    //       trigger: '.scroll-in-content',
    //       start: 'top 60%', // When top of .scroll-in-content hits 80% of the viewport
    //       end: 'top 40%', // When it’s around 60% of the viewport, it stops
    //       scrub: true, // Smooth scrub between start and end
    //     },
    //   }
    // );
  }, [])


  return (
    <div className='beauty-content-container'>
      <img src={FieldAbove} className='overhead-image' />
      <div ref={containerRef} className='pinned-scroll-container'>
        <div className='expanded-image-container'>
          <img src={FieldExpanded} className='expanded-image' />
        </div>
        <div className='scroll-in-content'>
          <p>Scroll In Content</p>
        </div>
      </div>
    </div>
  )
}

export default BeautyIndexView;
