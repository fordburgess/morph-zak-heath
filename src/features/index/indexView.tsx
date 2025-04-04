import { useState, useEffect } from 'react';
import wide from '../../assets/MORPH_COVER.jpg';
import overhead from '../../assets/OVERHEAD.png';
import entrance from '../../assets/ENTRANCE.png';
import './styles/index.css'

const IndexView = () => {
  const [closeView, setCloseView] = useState(false);
  const [imageSource, setImageSource] = useState(entrance);

  const handleClick = () => {
    const firstImage = document.querySelector('.first-image');
    const secondImage = document.querySelector('.second-image');
    const titleText = document.getElementById('title-text');
    const textContent = document.querySelector('.text-content');
    const svgOverlay = document.querySelector('.svg-overlay')

    setCloseView(prev => !prev);
    if (!closeView) {
      firstImage.style.transition = 'transform 0.3s ease-in-out, opacity 1.2s ease-in-out';
      secondImage.style.transition = 'opacity 0.5s ease-in-out';
      textContent.style.display = 'block';
      svgOverlay.style.display = 'block';

      if (titleText) {
        titleText.style.opacity = 0;
      }

      firstImage.style.transform = 'scale(2)';
      firstImage.style.opacity = 0;
      secondImage.style.opacity = 1;
    }
    else {
      firstImage.style.transition = 'transform 0.3s ease-in-out, opacity 0.5s ease-in-out';
      secondImage.style.transition = 'opacity 0.7s ease-in-out';

      secondImage.style.opacity = 0;
      firstImage.style.opacity = 1;
      firstImage.style.transform = 'scale(1)';
    }
  }

  return (
    <div className='test-container' onClick={() => handleClick()}>
      <h1 id="title-text">MORPH</h1>

      <img src={entrance} className='first-image'/>
      <img src={overhead} className='second-image'/>


      <svg xmlns="http://www.w3.org/2000/svg"
       width="100%"
       height="100%"
       viewBox="0 0 1806.2222 1016"
       version="1.1" id="svg1"
       className='svg-overlay'
      >
        <path
          id="camera-path"
          fill="rgba(0, 0, 0, 1)"
          stroke="rgba(0, 0, 0, 0.1)"
          strokeWidth="1"
          strokeOpacity="1"
          d="m 368.01605,162.04932 1.83004,2.55399 m -1.83023,-2.50526 -1.38428,-0.68471 c -0.29939,-0.73593 -0.51531,-1.53863 -0.99726,-2.12851 m -8.68649,-9.58745 2.58996,2.96592 m -5.69212,-0.10636 1.72313,3.14315 c -0.77721,-0.16622 -2.03525,-0.1576 -2.32521,-0.501 m 0.0346,0.0431 c -0.49855,-0.10656 -0.94276,-0.358 -1.50487,-0.29506 l -1.91005,0.45952 m 19.63508,10.88352 c 0.5183,-0.25358 0.2704,-1.17119 0.32403,-1.82748 m -0.30181,6.02051 v -4.23354 m 0.63709,5.42896 c -0.20775,-0.40455 -0.36574,-0.82568 -0.67542,-1.19626 m 1.3477,2.59447 c -0.005,-0.5924 -0.23314,-1.06189 -0.6967,-1.402 m 1.41018,3.44207 c 0.0949,-0.71462 -0.19528,-1.39073 -0.7275,-2.04263 m 0.70163,8.68986 c 0.14225,-2.24933 0.1556,-4.43499 0.0462,-6.65249 m -30.35336,12.48814 c 0.75753,0.0807 1.595,0.16066 2.44573,0.19612 1.36736,-0.10404 2.69865,-0.2802 4.00186,-0.51254 l 4.42836,-0.6286 c 1.06671,0.0812 1.62422,0.29813 1.88203,0.59501 m -18.03018,1.06311 c 1.88796,-0.0498 3.52786,-0.45173 5.27984,-0.72817 m 0.14118,-24.35902 c -0.40428,-0.29442 -0.75633,-0.65848 -1.03436,-1.12123 -0.0185,-0.93148 0.33971,-1.72415 1.12122,-2.36087 -0.26522,-1.44017 0.61991,-1.19905 1.20243,-1.40021 m -11.17032,11.55678 c 0.42128,-0.9195 5.76849,-1.30386 8.65273,-1.73002 0.32722,-0.35716 0.68649,-0.60216 1.07611,-0.74093 -0.0988,-0.72942 0.24642,-2.82851 0.15138,-4.24541 m -13.13789,8.10367 c -3.12571,3.58826 -2.05149,6.94319 -1.7962,10.34362 1.46114,5.48822 2.78331,6.46297 4.68855,6.11173 0.66966,-0.12113 0.89675,-0.21474 1.30726,-0.36946 l 1.44701,0.83542 c 0.70837,0.23746 1.47054,0.18468 2.16098,0.0907 m -7.86627,-16.98181 c 0.74347,-0.26961 1.44816,-0.15137 2.17578,0.007 l -1e-4,-1.00342 c 0.72224,-0.40136 0.83366,-0.31407 1.19372,-0.42568 m 22.42203,17.3401 c 1.86679,1.94009 3.90783,3.53167 5.98837,5.04425 1.82029,0.56246 6.94754,-2.22105 10.05156,-3.60592 1.29011,-0.87385 1.23805,-5.14601 1.51103,-7.07524 M 342.6016,158.3461 c 0.2429,-0.3289 0.48985,-0.64028 0.89768,-0.77126 l 5.23445,-1.49193 0.44666,-0.2568 c 0.13861,-0.52452 0.49374,-0.31289 0.74637,-0.44974 m 3.91016,-2.80202 c -0.53083,-0.49704 0.89821,-2.15884 1.37095,-3.32493 0.82002,-0.603 1.80857,0.50939 1.85222,0.57128 m 2.43592,2.79037 c 1.03412,1.26304 1.97353,2.54186 2.84062,3.83273 l 1.13334,1.95883 c 0.26599,-0.27234 0.56847,-0.75606 0.851,-0.74275 0.50661,0.2806 0.9192,1.12532 1.3788,1.68798"
          transform="translate(800.45277,351.36667)"
        />
      </svg>








      <div className="text-content">
        {/* <div id="mirror-info">
          <p>Zak Heath</p>
        </div> */}
      </div>
    </div>
  )
}

export default IndexView;
