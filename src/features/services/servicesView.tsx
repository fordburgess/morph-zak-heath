import { useState, useEffect } from 'react';
import WideImage from '../../assets/desert-far.webp';
import OverheadImage from '../../assets/desert-aerial.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ServicesView = () => {
  const [overheadView, setOverheadView] = useState(false);

  const handleImageChange = () => {
    console.log("hello world")
    setOverheadView(prev => !prev);

    const initialImageContainer = document.querySelector('.initial-image-container');
    const initialImage = document.querySelector('.initial-image');
    const svgOverlay = document.querySelector('.svg-overlay-test');

    initialImageContainer.style.transition = 'opacity 1.2s ease-in-out'
    initialImage.style.transition = 'transform 0.3s ease-in-out';
    svgOverlay.style.transition = 'opacity 0.5s ease-in-out';
    svgOverlay.style.display = 'inline-block';

    initialImage.style.transform = 'scale(2)';
    initialImageContainer.style.opacity = 0;

    requestAnimationFrame(() => {
      svgOverlay.style.opacity = 1;
    });

    setTimeout(() => {
      initialImageContainer.style.display = 'none';
    }, 1000);
  }

  useEffect(() => {
    gsap.to('.initial-image-container', {
      scale: 2,
      ease: 'none',
      scrollTrigger: {
        trigger: ".page-container",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    ScrollTrigger.create({
      trigger: ".page-container",
      start: "center top", // Adjust as needed
      onEnter: () => {
        handleImageChange();
      },
      // onLeaveBack: () => {
      //   console.log('going back')
      // }
    });
  }, [])

  useEffect(() => {
    console.log(overheadView)
  }, [overheadView])

  return (
    <div className='page-container'>
      <div className='initial-image-container'>
        <h1 className='page-title'>Services</h1>
        <img src={WideImage} className='initial-image' />
      </div>
      <img src={OverheadImage} className='svg-overlay-test' />
    </div>
  )
}

export default ServicesView;
