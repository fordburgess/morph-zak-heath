// @ts-nocheck
import { useState, useEffect } from 'react';
import WideImage from '../../assets/cover-wide.webp';
import overhead from '../../assets/OVERHEAD.png';
import entrance from '../../assets/ENTRANCE.png';
import './styles/index.css'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const IndexView = () => {
  const handleHover = (id: string) => {
    const itemVals = {
      'D': { pointer: 'm3140 825 L3140 650 L3422 500', circleX: '3630', circleY: '430', textX: '3630', textY: '430', textVal: 'Makeup Influencer', linkX: '3630', linkY: '490' },
      'F': { pointer: 'm3100 1275 L3100 1200 L3500 1200', circleX: '3710', circleY: '1200', textX: '3710', textY: '1200', textVal: 'Makeup Artist', linkX: '3710', linkY: '1260' },
      'G': { pointer: 'm3060 1431 L2900 1575 L2775 1575', circleX: '2555', circleY: '1575', textX: '', textY: '', textVal: '', linX: '', linkY: '' },
      'H': { pointer: 'm3115 1498 L3115 1675 L3275 1900', circleX: '3400', circleY: '2075', textX: '', textY: '', textVal: '', linX: '', linkY: '' },
      'J': { pointer: 'm3265 1544 L3265 1700 L3700 1700', circleX: '3920', circleY: '1700', textX: '', textY: '', textVal: '', linX: '', linkY: '' },
      'K': { pointer: 'm2275 1200 L2100 1200 L2100 1000', circleX: '2100', circleY: '800', textX: '', textY: '', textVal: '', linX: '', linkY: '' },
      'L': { pointer: 'm2240 1950 L2240 2100 L2100 2300', circleX: '1950', circleY: '2450', textX: '', textY: '', textVal: '', linX: '', linkY: '' },
      'N': { pointer: 'm2772 1965 L2772 1900 L3340 1900', circleX: '3550', circleY: '1900', textX: '', textY: '', textVal: '', linX: '', linkY: '' },
    };

    const pointerLine = document.querySelector('.pointer-line');
    const infoCircle = document.querySelector('.info-circle');
    const circleText = document.querySelector('.circle-text');
    const linkText = document.querySelector('.link-text');
    const fillPath = document.getElementById(`${id}-fill`);
    const bgImage = document.getElementById('svg-bg-image');

    if (fillPath && pointerLine && bgImage && infoCircle) {
      fillPath.style.stroke = 'rgba(239, 250, 255, 1)';
      fillPath.style.strokeWidth = '5px';
      fillPath.style.fill = 'rgba(239, 250, 255, 0.25)';
      fillPath.classList.add('glow');

      pointerLine.setAttribute('d', itemVals[id].pointer);
      pointerLine.style.display = 'block';
      infoCircle.setAttribute('cx', itemVals[id].circleX);
      infoCircle.setAttribute('cy', itemVals[id].circleY);
      infoCircle.style.opacity = '1';

      circleText.setAttribute('x', itemVals[id].textX);
      circleText.setAttribute('y', itemVals[id].textY);
      circleText.textContent = itemVals[id].textVal;
      circleText.style.opacity = '1';

      linkText.setAttribute('x', itemVals[id].linkX);
      linkText.setAttribute('y', itemVals[id].linkY);
      linkText.style.opacity = '1';

      bgImage.style.filter = 'brightness(85%)';
    }
  }

  const handleExit = (id: string) => {
    const fillPath = document.getElementById(`${id}-fill`);
    const pointerLine = document.querySelector('.pointer-line');
    const infoCircle = document.querySelector('.info-circle');
    const bgImage = document.getElementById('svg-bg-image');
    const circleText = document.querySelector('.circle-text');
    const linkText = document.querySelector('.link-text');

    if (fillPath && pointerLine && bgImage && infoCircle) {
      fillPath.style.stroke = 'none';
      fillPath.style.strokeWidth = '0';
      fillPath.style.fill = 'rgba(0, 0, 0, 0.01)';

      pointerLine.setAttribute('d', '');
      pointerLine.style.display = 'none';
      infoCircle.style.opacity = '0';
      circleText.style.opacity = '0';
      linkText.style.opacity = '0';
      bgImage.style.filter = 'brightness(100%)';
    }
  }

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
    <div className='scroll-container'>
      <div className='initial-image-container'>
        <div className='title-container'>
          <motion.h1
            className='page-title'
            id='cover-title'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            COMPACT
          </motion.h1>
        </div>
        <div className='subtitle-container'>
          <motion.p
            className='cover-subtitle'
            id='cover-subtitle'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Scroll to continue...
          </motion.p>
        </div>
        <picture>
          <source media="(min-width: 1024px)" srcSet={WideImage} />
          {/* <source media="(min-width: 640px)" srcSet={WideImageMobile} /> */}
          <img src={WideImage} className='initial-image' />
        </picture>
      </div>
      <svg className="svg-overlay-container" viewBox="0 0 5120 2880" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="svg-bg-image">
          <image width="100%" height="100%" preserveAspectRatio="xMinYMin meet" xlinkHref={overhead} />
        </g>
        <g id="layer-outline">
          <path id="A-fill" name="A" fill="rgba(0, 0, 0, 0.01)" d="m2878 1374c-36.85-1.812-68.57-3.684-70.49-4.16-2.381-0.5903-3.766-1.652-4.36-3.341-0.5836-1.66 0.5054-13.51 3.304-35.96 3.977-31.9 4.265-36.08 6.084-88.49 1.05-30.25 1.924-60.18 1.941-66.5 0.039-14.06 1.15-18.72 4.79-20.1 3.558-1.353 202.1 6.591 207.6 8.308 7.01 2.173 6.813-1.526 3.609 67.79-1.589 34.38-3.298 74.78-3.798 89.79-0.5003 15.01-1.147 27.52-1.437 27.81-0.9167 0.9166-28.44-1.371-30.63-2.546-1.272-0.681-2.1-2.108-2.1-3.62 0-4.827-6.918-4.459-8.963 0.4765-1.074 2.592-1.596 2.874-4.462 2.409-6.109-0.9914-16.47 6.298-15.09 10.62 0.4199 1.323-0.1672 3.843-1.571 6.742-1.951 4.031-2.113 5.257-1.249 9.473l0.992 4.843-8.577-0.1291c-4.717-0.071-38.73-1.612-75.58-3.424z" />
          <path id="B-fill" name="B" fill="rgba(0, 0, 0, 0.01)" d="m2561 860.9-4.28-8.392-0.696-25c-0.3827-13.75-0.5185-25.19-0.3016-25.42 0.5819-0.6157 45.81-2.947 46.39-2.391 0.275 0.2605 0.6564 10.6 0.8476 22.98l0.3477 22.5 4.402 9.485c2.421 5.217 4.402 10.06 4.402 10.77 0 1.31-3.04 1.595-34.17 3.201l-12.67 0.6538z" />
          <path id="C-fill" name="C" fill="rgba(0, 0, 0, 0.01)" d="m2421 1170c-3.413-10.69-3.464-11.12-4.128-34.48-0.3702-13.01-0.3112-23.87 0.131-24.13 0.4423-0.2605 10.76-0.7973 22.92-1.193l22.11-0.7191 1.481 43.62 3.932 10.98c2.162 6.036 3.733 11.49 3.491 12.12-0.287 0.7481-7.174 1.568-19.79 2.357-10.64 0.6653-21 1.45-23.02 1.744l-3.676 0.5338z" />
          <path id="D-fill" name="D" fill="rgba(0, 0, 0, 0.01)" d="m3181 1312c-21.33-3.188-48.11-12.71-66.78-23.73-22.68-13.39-32.86-21.23-52.09-40.11-7.772-7.631-13.45-12.27-17.93-14.67-5.456-2.911-7.049-4.382-9.471-8.745l-2.911-5.245 1.028-25.26 1.027-25.26-2.621-2.75c-2.198-2.306-3.454-2.75-7.78-2.75-2.838 0-9.215-0.2879-14.17-0.6397l-9.012-0.6397-4.818-9.792c-3.886-7.898-5.662-10.39-9.18-12.87-6.974-4.916-10.55-17-7.205-24.34 0.8671-1.903 0.1874-6.203-3.446-21.8-4.121-17.69-6.37-31.54-8.158-50.25-0.4166-4.359-1.592-8.638-3.252-11.84-4.256-8.202-3.094-20.94 2.312-25.34 0.69-0.5614 1.508-4.728 1.864-9.5 1.058-14.18 5.457-33.56 11.77-51.85 7.38-21.39 8.972-25.11 11.81-27.65 1.232-1.1 4.152-4.925 6.49-8.5 19.96-30.53 53.17-52 87.39-56.48 13.41-1.758 41.49-1.996 52.82-0.4464 18.08 2.472 43.08 12.52 64.86 26.06 38.98 24.24 67.85 54.58 95.98 100.9 15.79 25.98 30.98 65.92 38.42 101 6.864 32.36 7.997 74.86 2.681 100.6-5.837 28.24-11.22 43.72-21.84 62.74-13.95 24.99-33.25 43.7-58.08 56.3-23.22 11.79-53.89 16.74-79.7 12.88z" />
          <path id="E-fill" name="E" fill="rgba(0, 0, 0, 0.01)" d="m2748 1319-7.25-3.659v-50.7l6.391-11.54-3.362-3.004c-4.059-3.627-4.419-7.556-1.117-12.19 4.454-6.256 11.34-7.786 17.19-3.821l3.398 2.302-0.713 14.4h2.976c4.452 0 4.839-4.509 1.301-15.15-3.164-9.514-2.81-12.39 1.87-15.15 3.657-2.16 10.89-2.187 14.09-0.052 3.817 2.542 4.972 4.438 4.972 8.162 0 2.828-1.199 4.76-6.864 11.06-3.775 4.198-7.184 8.656-7.575 9.906-0.6439 2.058-0.04 2.571 6.364 5.399l7.075 3.125-0.081 8.601c-0.044 4.731-0.3926 16.98-0.7739 27.21-0.6647 17.85-0.8008 18.77-3.319 22.58l-2.626 3.968-9.542 1.173c-13.27 1.631-14.24 1.518-22.41-2.605z" />
          <path id="F-fill" name="F" fill="rgba(0, 0, 0, 0.01)" d="m3081 1370-51.5-23.26-0.2771-7.472-0.2772-7.472 11.05-5.93v-13.16c0-19.77-1.155-17.79 15.19-26.05l14.03-7.091 53.2 23.38-0.2875 4.676c-0.2706 4.4-0.1396 4.676 2.216 4.676 2.423 0 5.647 2.271 5.647 3.978 0 0.4592 0.9031 0.5988 2.007 0.3101 2.473-0.6467 7.657 1.395 8.39 3.304 0.2972 0.7746 1.804 1.408 3.349 1.408s3.809 0.7005 5.031 1.557c2.044 1.432 2.222 2.358 2.222 11.53 0 7.944 0.3054 10.09 1.5 10.55 0.8479 0.3253 1.5 1.815 1.5 3.426 0 2.617 0.7899 3.23 9.63 7.472l9.63 4.622-0.6647 6.671c-0.4522 4.538-1.213 7.088-2.38 7.977-2.781 2.119-34.98 18.19-36.41 18.18-0.7195-0.01-24.48-10.48-52.81-23.28z" />
          <path id="G-fill" name="G" fill="rgba(0, 0, 0, 0.01)" d="m3072 1422c-8.556-1.245-18.65-4.912-22.04-8.001-2.48-2.266-3.125-3.653-3.097-6.667 0.019-2.094 0.6786-4.931 1.465-6.306s1.445-3.428 1.465-4.563c0.047-2.726 4.636-6.909 9.165-8.354 5.448-1.739 31.03-1.559 38.92 0.2737 15.96 3.709 22.7 7.932 21.49 13.46-0.6245 2.844-0.3863 3.109 5.132 5.72l5.787 2.738 17.52-0.5568c19.69-0.6258 24.51 0.098 28.52 4.281 3.472 3.624 2.695 6.45-2.22 8.072-4.322 1.426-17.12 0.6336-25.28-1.566-8.31-2.241-28.57-1.978-38 0.4931-7.969 2.089-27.76 2.585-38.83 0.9746z" />
          <path id="H-fill" name="H" fill="rgba(0, 0, 0, 0.01)" d="m3108 1484c-5.624-0.359-10.41-0.8509-10.65-1.093-0.6705-0.7048 2.566-41.36 3.364-42.25 0.3972-0.444 8.661-0.4891 18.36-0.1001l17.64 0.7071v9.693c0 5.331-0.2942 15.16-0.6537 21.85l-0.6537 12.16-8.596-0.1568c-4.728-0.086-13.2-0.4505-18.82-0.8095z" />
          <path id="I-fill" name="I" fill="rgba(0, 0, 0, 0.01)" d="m3378 1484c-0.3184-1.003-3.949-5.26-8.067-9.46-6.49-6.617-7.488-8.111-7.488-11.2 0-3.16-0.3405-3.633-2.994-4.164-2.945-0.5891-2.986-0.6827-2.485-5.725 0.2798-2.819 0.948-11.13 1.485-18.46 0.6944-9.485 1.556-14.65 2.986-17.88 2.511-5.677 2.519-5.52-0.4908-10.29-3.196-5.063-3.148-7.021 0.25-10.19 4.049-3.779 9.248-5.189 13.94-3.78 8.804 2.642 11.01 7.988 5.82 14.13l-2.822 3.342 2.74 0.3246c5.366 0.6356 5.827-0.1104 5.306-8.584-0.2619-4.258-1.087-10.37-1.833-13.59l-1.357-5.852 3.244-2.898c2.637-2.356 4.128-2.889 7.978-2.85 8.75 0.089 14.19 4.489 14.22 11.51 0.012 2.473-1.035 3.966-5.465 7.79-6.549 5.654-11.94 13.12-11.09 15.34 0.5438 1.417 0.8054 1.401 2.523-0.1529 2.332-2.111 4.042-1.262 4.042 2.007 0 1.829 0.8628 2.788 3.5 3.89 3.326 1.39 3.5 1.707 3.5 6.368 0 9.077-3.996 51.54-5.151 54.74-1.478 4.087-3.341 5.171-11.03 6.419-8.845 1.435-10.59 1.314-11.26-0.7842z" />
          <path id="J-fill" name="J" fill="rgba(0, 0, 0, 0.01)" d="m3284 1537c-2.959-2.296-6.833-5.524-8.607-7.174l-3.226-2.998-28.27 1.255c-20.43 0.9067-29.05 0.9548-31.09 0.1734-1.548-0.5949-4.382-1.082-6.298-1.082-2.471 0-4.187-0.7595-5.906-2.615-2.539-2.74-6.481-12.09-6.481-15.38 0-1.44-0.9337-2.07-3.75-2.53-8.312-1.358-9.938-1.819-14.46-4.1-2.593-1.306-5.18-3.246-5.75-4.311-2.696-5.038 0.2819-12.55 5.408-13.65 1.681-0.3588 3.688-1.163 4.461-1.787 0.9212-0.7442 5.626-1.04 13.68-0.8608 11.37 0.2536 12.32 0.1326 12.88-1.657 0.9326-2.938 8.07-5.295 17.79-5.874 8.564-0.51 8.798-0.5914 10.75-3.75 2.037-3.296 2.849-12.49 1.103-12.49-1.791 0-2.05-3.2-0.5493-6.792 1.88-4.499 5.231-8.208 7.417-8.208 0.8941 0 2.053-0.4249 2.576-0.9442s5.148-2.147 10.28-3.617c6.789-1.945 10.81-2.551 14.75-2.224 2.981 0.2473 5.42 0.2856 5.42 0.085 0-0.2005-0.675-1.98-1.5-3.954s-1.5-4.414-1.5-5.421c0-2.732 2.061-6.734 3.814-7.407 2.283-0.8762 10.47 7.548 16.83 17.32 3.532 5.427 5.908 8.159 6.799 7.817 0.7528-0.2889 2.133 0.3191 3.067 1.351 0.9338 1.032 2.889 2.014 4.344 2.183 2.205 0.2554 2.646 0.8061 2.646 3.306 0 2.006 1.078 4.152 3.255 6.478 4.152 4.437 4.693 6.255 2.894 9.734-2.678 5.178-2.35 9.364 1.106 14.12 3.994 5.497 4.705 10.28 3.864 26.01-0.9729 18.2-1.647 20.19-8.468 24.97-5.463 3.828-16.98 8.19-21.62 8.19-1.245 0-4.685-1.879-7.645-4.175z" />
          <path id="K-fill" name="K" fill="rgba(0, 0, 0, 0.01)" d="m2353 1748c0.014-3.871 0.7474-7.535 2.093-10.46 1.139-2.475 2.315-7.075 2.614-10.22 0.5197-5.47 0.4279-5.767-2.074-6.718-2.256-0.8579-2.534-1.414-2.012-4.027 0.5072-2.536 0.2914-3.032-1.319-3.032-3.714 0-4.325-1.948-4.325-13.79 0-10.46 0.1594-11.44 1.955-11.9 1.874-0.4901 1.933-1.262 1.43-18.66-0.2886-9.98-1.121-46.21-1.849-80.52-1.36-64.05-1.288-63.13-5.036-64.44-0.6329-0.2208-1.106-12.98-1.288-34.75-0.1583-18.92-0.6083-34.7-1-35.07-0.803-0.7486-68.36-19.11-68.62-18.66-0.093 0.1623-0.6111 1.645-1.152 3.295-0.6347 1.936-2.748 4.134-5.96 6.199-2.737 1.759-5.437 3.594-6 4.078s-8.165 19.29-16.89 41.8-15.99 41.07-16.14 41.25c-0.5518 0.6727-8.429-4.369-8.436-5.4 0-0.5885 6.74-18.36 14.99-39.5s15-38.97 15-39.62c0-0.6564-1.345-1.991-2.995-2.966-3.744-2.212-3.898-5.253-0.6376-12.63 2.211-4.999 8.148-12.26 11.71-14.31 1.442-0.8323 57.93-148.7 57.93-151.7 0-0.6969 1.342-5.088 2.981-9.759 2.206-6.282 3.832-9.202 6.25-11.22 1.798-1.501 4.169-3.563 5.269-4.582 1.1-1.02 4.362-3.126 7.25-4.681l5.25-2.826v-10.53l-6.25-4.353c-6.012-4.187-6.262-4.532-6.554-9.044-0.2356-3.64-0.8816-5.146-2.885-6.721-1.42-1.117-3.308-2.03-4.196-2.029-2.617 0-42.25 23.79-46.62 27.98-4.484 4.301-46.44 31.02-48.71 31.02-2.51 0-7.958-7.71-7.606-10.76 0.279-2.414 2.794-4.117 22.31-15.12 13.88-7.821 23.88-12.81 27.08-13.51 3.475-0.7609 11.94-5.223 26.75-14.1 20.86-12.5 23.9-15.02 20.63-17.04-3.678-2.273-8.584-16.1-7.193-20.27 0.6999-2.1 6.048-1.416 7.306 0.9339 0.6535 1.221 1.418 1.698 1.785 1.114 0.3534-0.5615 8.436-3.129 17.96-5.706 19.78-5.351 16.4-5.823 29.93 4.178l7.25 5.357v6.839c0 6.513-0.1312 6.895-2.75 8-1.512 0.6384-3.425 2.606-4.25 4.371-1.069 2.288-2.29 3.302-4.25 3.527-3.952 0.4548-3.4 2.341 1.75 5.97l4.5 3.172v6.399c0 6.19-0.1 6.44-3.048 7.662-2.627 1.088-2.965 1.642-2.446 4.006 0.4758 2.167 0.065 3.167-1.956 4.756l-2.558 2.012 19.51 12.03 1.282-2.411c1.795-3.377 5.019-3.007 9.413 1.079 5.449 5.067 6.304 7.1 4.283 10.18-1.351 2.062-2.21 2.43-4.571 1.958-2.688-0.5376-2.907-0.3575-2.907 2.394 0 1.636-0.45 2.975-1 2.975s-1 0.9848-1 2.188 14.65 35.74 32.56 76.75c23.91 54.76 33.29 75.23 35.33 77.06 1.523 1.375 4.453 6.377 6.511 11.12 3.546 8.166 3.668 8.792 2.334 12-1.394 3.353-1.206 3.856 20.28 54.2 11.93 27.95 22.32 51.39 23.09 52.09 0.7699 0.6997 3.263 1.799 5.54 2.443 4.704 1.33 6.531 3.637 8.196 10.35 1.694 6.827 1.452 9.312-1.214 12.48l-2.378 2.827 15.35 35.5c16.28 37.66 17.89 43 12.97 43-1.342 0-2.803-0.5625-3.245-1.25s-8.112-17.65-17.04-37.69c-12.11-27.18-17.12-37.35-19.68-40-3.84-3.967-10.26-18.78-8.781-20.26 0.5371-0.5371-8.205-21.85-21.58-52.6-21.45-49.32-22.7-51.9-27.28-56.2-4.307-4.042-5.14-5.539-6.159-11.07-0.2369-1.286-6.884 0.4903-36.9 9.858l-36.61 11.43-0.6338 8.142c-0.3487 4.478-0.6366 15.05-0.6399 23.49-0.01 14.51 0.1033 15.37 1.994 15.87 1.399 0.3659 2 1.364 2 3.323 0 1.54 0.5625 2.988 1.25 3.217 0.875 0.2916 1.25 3.083 1.25 9.304v8.888l-4.388 0.7507c-2.413 0.4128-4.463 0.876-4.554 1.029-0.1268 0.213 1.935 135.8 2.359 155.1 0.074 3.367 0.4828 3.968 3.583 5.263 2.063 0.8619 3.513 2.176 3.532 3.199 0.017 0.9551 0.6925 2.61 1.5 3.678 3.098 4.095 0.054 18.56-3.905 18.56-1.391 0-2.626 9.74-2.626 20.7 0 6.512-1.407 9.405-7.42 15.26l-4.58 4.458zm-9.227-312.7c0.9704-1.169-0.7038-111.6-2.205-145.4-0.5526-12.46-2.177-19.02-5.613-22.69-1.679-1.79-1.84-1.704-4.68 2.5-3.543 5.243-58.68 147.9-57.57 148.9 0.7128 0.6818 65.34 17.65 67.9 17.83 0.6201 0.043 1.595-0.4849 2.167-1.174zm56.46-9.288c27.47-8.021 33.66-10.15 33.25-11.41-0.2758-0.8532-14.62-33.95-31.88-73.55-28.19-64.69-31.69-72.19-34.48-73.83-1.706-1.004-3.948-1.557-4.982-1.229-3.691 1.171-3.942 17.76-1.623 107.1 0.8714 33.55 1.784 61.61 2.029 62.36 0.2443 0.7499 1.228 1.159 2.185 0.9083 0.9573-0.2504 16.93-4.891 35.49-10.31z" />
          <path id="L-fill" name="L" fill="rgba(0, 0, 0, 0.01)" d="m2238 1929c-15.4-3.443-31.47-7.032-35.7-7.975-5.846-1.302-7.849-2.184-8.317-3.658-0.3391-1.068-1.244-1.943-2.011-1.943-0.7668 0-1.849-1.691-2.406-3.757-3.794-14.09-14.09-57.83-13.85-58.86 0.5506-2.396 33.08-39.89 34.87-40.2 2.149-0.3718 1.731-1.79 9.988 33.81 3.381 14.58 6.568 26.95 7.084 27.5 0.5155 0.55 16.78 4.6 36.14 9 31.37 7.129 35.23 8.219 35.49 10.01 0.3038 2.12-29.99 41.83-32.16 42.15-0.621 0.092-13.73-2.649-29.13-6.092z" />
          <path id="M-fill" name="M" fill="rgba(0, 0, 0, 0.01)" d="m2545 1955c-0.2481-0.4125-2.29-7.332-4.539-15.38l-4.088-14.63-1.005-26.3c-0.5529-14.47-0.8996-26.4-0.7704-26.53 0.476-0.4471 52.8-4.688 53.16-4.308 0.2069 0.2159 0.8872 12.16 1.512 26.54l1.136 26.15 4.464 13.31c2.455 7.32 4.464 14.11 4.464 15.08 0 2.295-0.2068 2.33-28 4.766-26.74 2.344-25.73 2.294-26.33 1.295z" />
          <path id="N-fill" name="N" fill="rgba(0, 0, 0, 0.01)" d="m2765 2078c-9.265-1.84-13.22-9.839-13.98-28.24-0.5096-12.44-0.8967-11.44 8.923-23.08 5.257-6.228 5.75-7.224 5.75-11.62 0-2.643-0.4396-4.805-0.9769-4.805-0.5374 0-1.712-1.122-2.61-2.493-2.071-3.16-1.159-7.21 1.94-8.622 2.066-0.9412 2.254-1.578 1.862-6.299-0.4206-5.071-0.3309-5.295 2.608-6.513 6.71-2.779 11.67 1.013 11.03 8.437-0.1802 2.092 0.4412 3.782 1.942 5.283 2.87 2.87 2.789 5.362-0.2929 9.025-4.381 5.206-3.097 13.5 2.967 19.17 4.86 4.541 6.44 8.188 6.745 15.58l0.2872 6.942-6.5 0.5c-7.758 0.5968-7.621 0.2549-6.12 15.23 0.5622 5.611 0.8127 10.41 0.5568 10.67-1.067 1.067-10.24 1.612-14.13 0.8401z" />
        </g>
        <g id="layer-interaction">
          <path onMouseEnter={() => handleHover('A')} onMouseLeave={() => handleExit('A')} data-outline="A" data-annotation="laptop" fill="rgba(0, 0, 0, 0.01)" d="m2892 1380c-53.35-2.395-97.01-4.391-97.02-4.435-0.012-0.044 2.558-45.87 5.711-101.8 5.688-100.9 5.757-101.8 8.646-112.2l2.913-10.5 7.376 0.197c39.72 1.061 215.5 7.732 216 8.196 0.3445 0.3336-0.6485 46.28-2.207 102.1s-2.852 105.8-2.876 111.1l-0.043 9.608-11.25 0.6629c-6.188 0.3645-15.52 0.8493-20.75 1.077s-53.15-1.545-106.5-3.94z" />
          <path onMouseEnter={() => handleHover('B')} onMouseLeave={() => handleExit('B')} data-outline="B" data-annotation="test" fill="rgba(0, 0, 0, 0.01)"  d="m2554 863.6-6.1-12.1 2.018-27.27c1.11-15 2.235-27.49 2.5-27.75 0.9541-0.9542 52.92-2.768 53.73-1.875 0.8558 0.9424 13.55 79.29 12.93 79.83-0.1959 0.1734-13.55 0.5301-29.67 0.7927l-29.32 0.4775z" />
          <path onMouseEnter={() => handleHover('C')} onMouseLeave={() => handleExit('C')} data-outline="C" data-annotation="..." fill="rgba(0, 0, 0, 0.01)" d="m2414 1185c-0.2285-0.7455-1.63-13.62-3.114-28.6-2.687-27.13-2.691-27.29-0.924-37.35 0.976-5.556 2.261-10.27 2.855-10.49 1.164-0.4146 55.58-4.106 55.58-3.77 0 0.8914 9.076 74.45 9.436 76.48l0.4677 2.634-23.2 0.6352c-12.76 0.3494-27.14 0.8989-31.94 1.221-6.871 0.4605-8.83 0.2958-9.156-0.7697z" />
          <path onMouseEnter={() => handleHover('D')} onMouseLeave={() => handleExit('D')} data-outline="D" data-annotation="mirror" fill="rgba(0, 0, 0, 0.01)" d="m3190 1319-21.5-2.802-21-8.63c-11.55-4.747-30.65-13.61-42.45-19.69l-21.45-11.05-43.61-37.3 1.313-85.25-20.9-0.6527c-11.49-0.359-23.53-0.9157-26.75-1.237l-5.851-0.5844-12.65-19.49-21.54-107.8 5.739-38c3.156-20.9 6.214-40.81 6.795-44.25 0.9924-5.876 2.431-8.265 23.74-39.41l22.68-33.16 76.72-27.75 86.08 7.315 78.13 52.1 67 86.16 32.72 96 1.847 101-29.89 79.77-17.84 17.15c-9.81 9.432-20.09 19.2-22.84 21.71l-5 4.562-28.74 7.154c-19.08 4.75-30.51 7.117-34 7.042-2.894-0.062-14.94-1.373-26.76-2.914z" />
          <path onMouseEnter={() => handleHover('E')} onMouseLeave={() => handleExit('E')} data-outline="E" data-annotation="deadly toxins" fill="rgba(0, 0, 0, 0.01)" d="m2743 1326c-6.846-4.351-12.78-8.249-13.18-8.663-0.7676-0.7853 4.293-90.81 5.144-91.52 0.2676-0.2219 9.15-3.916 19.74-8.209l19.25-7.806 9.42 2.782c5.181 1.53 9.95 3.11 10.6 3.51 0.9044 0.559 0.8871 13.15-0.074 54.11-0.6891 29.36-1.361 53.52-1.493 53.69-0.3073 0.3964-35.72 10.22-36.43 10.1-0.2907-0.048-6.13-3.647-12.98-7.998z" />
          <path onMouseEnter={() => handleHover('F')} onMouseLeave={() => handleExit('F')} data-outline="F" data-annotation="lipstick" fill="rgba(0, 0, 0, 0.01)" d="m3084 1378c-26.68-10.93-48.86-20.01-49.29-20.18-1.248-0.4764 2.319-70.08 3.658-71.39 0.625-0.6127 7.713-4.147 15.75-7.853l14.62-6.74 5.884 4.496c3.727 2.848 18.79 10.65 41.07 21.29l35.19 16.79 27.86 32.37 0.7628 27.58-22.94 11.84c-12.62 6.512-23.19 11.8-23.5 11.76-0.3067-0.046-22.38-9.029-49.06-19.96z" />
          <path onMouseEnter={() => handleHover('G')} onMouseLeave={() => handleExit('G')} data-outline="G" data-annotation="hairbrush" fill="rgba(0, 0, 0, 0.01)" d="m3112 1431-44-0.5362-13-5.911c-7.15-3.251-13.34-6.203-13.76-6.56-0.4178-0.357-0.4178-7.103 0-14.99l0.7598-14.34 15-5.348c8.25-2.942 15.35-5.349 15.79-5.349 0.4323 0 14.83 5.364 32 11.92l31.21 11.92 22.88 2.04c12.58 1.122 23.15 2.313 23.48 2.647s0.7536 3.839 0.9329 7.79c0.3051 6.725 0.1144 7.501-2.996 12.18l-3.322 5-10.49 0.036c-5.768 0.02-30.29-0.2051-54.49-0.5z" />
          <path onMouseEnter={() => handleHover('H')} onMouseLeave={() => handleExit('H')} data-outline="H" data-annotation="phone" fill="rgba(0, 0, 0, 0.01)" d="m3114 1498c-15.95-1.926-29.29-3.791-29.65-4.144s0.3643-10.09 1.608-21.64c2.184-20.28 2.395-21.27 6.154-28.97l3.892-7.969 23.5 0.2875c12.92 0.1581 23.8 0.594 24.16 0.9687s2.182 5.631 4.047 11.68l3.39 11-2.222 21c-1.222 11.55-2.255 21.11-2.297 21.25-0.1257 0.4193-2.555 0.1609-32.58-3.465z" />
          <path onMouseEnter={() => handleHover('I')} onMouseLeave={() => handleExit('I')} data-outline="I" data-annotation="..." d="m3384 1498-12.81-0.313-12.44-18.99c-9.567-14.6-12.43-19.73-12.41-22.22 0.064-5.869 7.502-75.6 8.131-76.23 0.7959-0.7959 38.83-11.48 40.91-11.49 1.567-0.01 17.58 8.25 19.27 9.936 0.7675 0.7675-0.965 62.32-2.992 106.3l-0.6337 13.75-7.11-0.2173c-3.91-0.1196-12.87-0.3582-19.92-0.5303z" />
          <path onMouseEnter={() => handleHover('J')} onMouseLeave={() => handleExit('J')} data-outline="J" data-annotation="camera" fill="rgba(0, 0, 0, 0.01)" d="m3242 1544-49.5-7.936-15.75-15.7c-11.97-11.93-15.75-16.3-15.75-18.21 0-1.381 0.7679-7.809 1.712-14.28l1.716-11.77 50.04-30.15c27.52-16.58 53.32-31.67 57.34-33.53l7.303-3.385 35.67 30.61 17.03 33-2.152 36.67c-1.184 20.17-2.46 36.98-2.837 37.35-0.566 0.5647-33.21 5.578-34.81 5.347-0.275-0.04-22.78-3.644-50-8.009z" />
          <path onMouseEnter={() => handleHover('K')} onMouseLeave={() => handleExit('K')} data-outline="K" data-annotation="tripod" fill="rgba(0, 0, 0, 0.01)" d="m2344 1758-20-11.48-26.53-92.26c-14.59-50.74-26.8-92.95-27.14-93.79-0.3303-0.8429-12.01-6.884-25.97-13.43-13.95-6.541-25.89-12.38-26.54-12.97-2.366-2.159-3.258-36.83-3.799-147.6-0.3021-61.88-0.7874-119.2-1.078-127.5l-0.5293-15 79.31-82.99 38.05-7.758c20.93-4.267 38.22-7.587 38.43-7.379 0.2082 0.2083 43.07 112.8 95.26 250.3 52.18 137.4 95.16 250.6 95.51 251.5 0.505 1.28-19.35 14.05-95.63 61.5-52.95 32.94-96.96 59.99-97.81 60.13-0.8474 0.1321-10.54-4.926-21.54-11.24z" />
          <path onMouseEnter={() => handleHover('L')} onMouseLeave={() => handleExit('L')} data-outline="L" data-annotation="eyeshadow palette 1" fill="rgba(0, 0, 0, 0.01)" d="m2226 1937c-23.85-5.944-43.67-11.3-44.05-11.91-0.3761-0.6085-4.661-17.8-9.522-38.2l-8.838-37.09 3.462-3.68c1.904-2.024 10.81-11.71 19.79-21.52 15.73-17.19 16.44-17.82 19.42-17.19 1.703 0.3622 4.544 0.9112 6.315 1.22 2.362 0.4119 15.27 10.66 48.5 38.53 24.9 20.88 46.15 38.81 47.22 39.84 1.906 1.837 1.63 2.326-17.75 31.4-10.83 16.24-20.02 29.51-20.44 29.47-0.4115-0.037-20.26-4.93-44.11-10.87z" />
          <path onMouseEnter={() => handleHover('M')} onMouseLeave={() => handleExit('M')} data-outline="M" data-annotation="..." fill="rgba(0, 0, 0, 0.01)" d="m2535 1961c-0.218-0.6298-2.673-17.48-5.455-37.43-4.72-33.86-5-36.99-4.181-46.77 0.4828-5.763 1.125-10.73 1.428-11.03 0.7407-0.7407 70.98-6.511 71.61-5.883 0.272 0.272 3.715 23.03 7.65 50.58 4.79 33.53 6.797 50.19 6.07 50.41-0.5971 0.1805-18.11 0.5407-38.91 0.8005-27.88 0.3482-37.93 0.1714-38.22-0.6726z" />
          <path onMouseEnter={() => handleHover('N')} onMouseLeave={() => handleExit('N')} data-outline="N" data-annotation="fragrance bottle" fill="rgba(0, 0, 0, 0.01)" d="m2742 2059-9.658-28.35 17.92-54.32h38.57l18.5 61-16.96 49.5-38.73 0.5268z" />
        </g>
        <g id="info-boxes">
          <path
            d=""
            stroke="#fff"
            strokeWidth="5"
            fill="none"
            className='pointer-line'
            filter="url(#soft-glow)"
          />
          <circle
            className='info-circle'
            cx=""
            cy=""
            r="220"
            fill="rgba(239, 250, 255, 0.75)"
            filter="url(#circle-glow)"
          />
          <text
            className='circle-text'
            x=""
            y=""
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="52"
            fill="black"
            fontWeight="300"
          >
          </text>
          <text
            className='link-text'
            x=""
            y=""
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="40"
            fontStyle="italic"
            fill="black"
            fontWeight="300"
          >
            See More
          </text>
        </g>
      </svg>
    </div>
  )
}

export default IndexView;
