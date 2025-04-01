import { useState, useEffect } from 'react';
import wide from '../../assets/MORPH_COVER.jpg';
import overhead from '../../assets/OVERHEAD.png';
import entrance from '../../assets/ENTRANCE.png';
import './styles/test.css'

const TestView = () => {
  const [closeView, setCloseView] = useState(false);
  const [imageSource, setImageSource] = useState(entrance);

  const handleClick = () => {
    setCloseView(prev => !prev);
    const image = document.querySelector('.test-image');

    if (image) {
      image.style.transform = 'scale(2)';
      setTimeout(() => {
        image.style.opacity = '0';
      }, 200);



      setTimeout(() => {
        image.src = overhead;
        image.style.opacity = '1'
      }, 300);

    }
  }

  useEffect(() => {

    // setTimeout(() => {
    // }, 2000)
    // setImageSource(closeView ? overhead : wide)


  }, [closeView])

  return (
    <div className='test-container' onClick={() => handleClick()}>
      <img src={imageSource} className='test-image'/>
      {/* <div id="mirror">
        <p>Me (Zak Heath)</p>
      </div> */}
    </div>
  )
}

export default TestView;
