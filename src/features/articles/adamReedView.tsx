import './styles/adamReed.css'
import Portrai1 from '../../assets/adam-reed.webp'
import Portrai2 from '../../assets/adam-reed-2.jpeg'
import { motion } from 'framer-motion'

const AdamReedView  = () => {
  return (
    <div className='adam-reed-container'>
      <div className='adam-reed-header'>
        <motion.h1
          id='adam-reed-title'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          In Conversation with Adam Reed:
        </motion.h1>
        <motion.h2
          id="adam-reed-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <strong>On Becoming A World Class Hairstylist</strong>
        </motion.h2>
        <motion.p
          id="adam-reed-blurb"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          Adam shares his journey fom a small village salon in Somerset to doing Madonna’s hair. Delving into his love for hair, struggles and neurodiversity he encourages embracing individuality and trusting your decisions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'space-between', maxHeight: '350px', marginBottom: '50px' }}
        >
          <img src={Portrai1} className='portrait-1'/>
          <img src={Portrai2} className='portrait-2'/>
        </motion.div>
      </div>
      <div style={{ textAlign: 'left' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className='clickable-subtitle'
        >
          When you were 21, who did you look up to in the beauty industry?
        </motion.h2>
      </div>
    </div>
  )
}

export default AdamReedView;
