// @ts-nocheck
import { useEffect } from 'react';
import WideImage from '../../assets/autumn-far.webp';
import WideImageMobile from '../../assets/autum-far-mobile.webp';
import OverheadImage from '../../assets/autumn-aerial.webp';
import ExpandedImage from '../../assets/autumn-expanded.webp';
import './styles/dreamRoom.css';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const DreamRoomView = () => {
  const handleImageChange = (direction: number) => { // direction is the way the user is travelling
    const initialImageContainer = document.querySelector('.initial-image-container');
    const initialImage = document.querySelector('.initial-image');
    const svgOverlayContainer = document.querySelector('.svg-overlay-container');

    if (direction == 0) {
      initialImageContainer.style.display = 'block';

      svgOverlayContainer.style.transition = 'opacity 0.5s ease-in-out, transform 0.3s ease-in-out';
      initialImageContainer.style.transition = 'opacity 0.75s ease-in-out';
      initialImage.style.transition = 'transform 0.3s ease-in-out';

      requestAnimationFrame(() => {
        svgOverlayContainer.style.opacity = 0;
        initialImageContainer.style.opacity = 1;
        initialImage.style.transform = 'scale(1)';
      });

      setTimeout(() => {
        svgOverlayContainer.style.display = 'none';
      }, 1000);
    }
    else if (direction == 1) {
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
  }

  const handleObjectClick = () => {
    const scrollContainer = document.querySelector('.scroll-container');
    const contentContainer = document.querySelector('.content-container');

    scrollContainer.style.transition = 'opacity 0.5s ease-in-out';
    contentContainer.style.transition = 'opacity 0.25s ease-in-out';

    contentContainer.style.display = 'block';
    scrollContainer.style.opacity = 0;

    requestAnimationFrame(() => {
      contentContainer.style.opacity = 1;
    });

    setTimeout(() => {
      scrollContainer.style.display = 'none';
    }, 1200);
  }

  useEffect(() => {
    gsap.to('.initial-image-container', {
      scale: 2,
      ease: 'none',
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    gsap.to('.title-container', {
      z: 1500,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    gsap.to('.subtitle-container', {
      z: 800,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    gsap.to('.svg-overlay-container', {
      scale: 1.5,
      ease: 'none',
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "55% top",
        end: "bottom bottom",
        scrub: true
      }
    })

    gsap.to('.further-info-container', {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: '68% top',
        end: '85% top',
        scrub: true
      }
    })

    gsap.to('.test-circle', {
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-container',
        start: '80% top',
        end: '90% top',
        scrub: true
      }
    })

    ScrollTrigger.create({
      trigger: ".scroll-container",
      start: "center top", // Adjust as needed
      // markers: true,
      onEnter: () => {
        handleImageChange(1);
      },
      onLeaveBack: () => {
        handleImageChange(0);
      }
    })
  }, [])

  return (
    <>
      <div className='scroll-container'>
        <div className='initial-image-container'>
          <div className='title-container'>
            <motion.h1
              className='page-title'
              id='dream-room-title'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              DREAM ROOM
            </motion.h1>
          </div>
          <div className='subtitle-container'>
            <motion.p
              className='page-subtitle'
              id='dream-room-subtitle'
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
          <div className='further-info-container'>
            <h2>CLICK</h2>
            <p>A WAY TO CONTACT ME</p>
          </div>
          <div className='test-circle' onClick={() => handleObjectClick()}></div>
        </div>
      </div>
      <div className='content-container'>
        <img src={ExpandedImage} />
      </div>
    </>
  )
}

export default DreamRoomView;
