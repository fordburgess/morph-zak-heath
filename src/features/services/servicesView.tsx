import { useState, useEffect } from 'react';
import WideImage from '../../assets/desert-far.webp';
import WideImageMobile from '../../assets/desert-far-mobile.webp';
import OverheadImage from '../../assets/desert-aerial.webp';
import './styles/services.css';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ServicesView = () => {
  const [overheadView, setOverheadView] = useState(false);

  const handleImageChange = () => {
    setOverheadView(prev => !prev);

    const initialImageContainer = document.querySelector('.initial-image-container');
    const initialImage = document.querySelector('.initial-image');
    const svgOverlayContainer = document.querySelector('.svg-overlay-container');

    initialImageContainer.style.transition = 'opacity 1.2s ease-in-out'
    initialImage.style.transition = 'transform 0.3s ease-in-out';
    svgOverlayContainer.style.transition = 'opacity 0.5s ease-in-out';
    svgOverlayContainer.style.display = 'block';

    initialImage.style.transform = 'scale(2)';
    initialImageContainer.style.opacity = 0;

    requestAnimationFrame(() => {
      svgOverlayContainer.style.opacity = 1;
    });

    setTimeout(() => {
      initialImageContainer.style.display = 'none';
    }, 1000);
  }

  useEffect(() => {

    // .to('.svg-overlay-container', {
    //   opacity: 1,
    //   duration: 1,
    //   onStart: () => {
    //     document.querySelector('.svg-overlay-container').style.display = 'inline-block';
    //   },
    //   onReverseComplete: () => {
    //     document.querySelector('.svg-overlay-container').style.display = 'none';
    //   }
    // }, "<");


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

    gsap.to('.title-container', {
      z: 1500,
      ease: 'none',
      scrollTrigger: {
        trigger: '.page-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    gsap.to('.subtitle-container', {
      z: 800,
      ease: 'none',
      scrollTrigger: {
        trigger: '.page-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    gsap.to('.svg-overlay-container', {
      scale: 1.5,
      ease: 'none',
      scrollTrigger: {
        trigger: ".page-container",
        start: "55% top",
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
    })
  }, [])

  return (
    <div className='page-container'>
      <div className='initial-image-container'>
        <div className='title-container'>
          <motion.h1
            className='page-title'
            id='services-title'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Services
          </motion.h1>
        </div>
        <div className='subtitle-container'>
          <motion.p
            className='page-subtitle'
            id='services-subtitle'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Scroll to continue...
          </motion.p>
        </div>
        <picture>
          <source media="(min-width: 1024px)" srcSet={WideImage} />
          <source media="(min-width: 640px)" srcSet={WideImageMobile} />
          <img src={WideImageMobile} className='initial-image' />
        </picture>
      </div>
      <div className='svg-overlay-container'>
        <img src={OverheadImage} className='svg-overlay-test' />
      </div>
    </div>
  )
}

export default ServicesView;
