import './adamReed.css'
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
      </div>
      <div>

      </div>
    </div>
  )
}

export default AdamReedView;
