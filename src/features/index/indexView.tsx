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
    setCloseView(prev => !prev);

    if (!closeView) {
      firstImage.style.transition = 'transform 0.3s ease-in-out, opacity 1.2s ease-in-out';
      secondImage.style.transition = 'opacity 0.5s ease-in-out';
      textContent.style.display = 'block';

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

  useEffect(() => {

    // setTimeout(() => {
    // }, 2000)
    // setImageSource(closeView ? overhead : wide)


  }, [closeView])

  return (
    <div className='test-container' onClick={() => handleClick()}>
      <h1 id="title-text">MORPH</h1>

      <img src={entrance} className='first-image'/>
      <img src={overhead} className='second-image'/>
      <div className="text-content">
        <div id="mirror-info">
          <p>Zak Heath</p>
        </div>
      </div>
    </div>
  )
}

export default IndexView;
