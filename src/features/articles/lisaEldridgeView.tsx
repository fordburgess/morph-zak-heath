import { useState, useEffect, useRef } from 'react';
import { Noise } from 'noisejs';
import './styles/articles.css';
import './styles/lisaEldridge.css';

const LisaEldridgeView = () => {
  const windowWidth = 2000;
  const CANVAS_WIDTH = 2000;
  const NOISE_AMOUNT = 1;
  const NOISE_SPEED = 0.006;
  const SCROLL_SPEED = 0.85;
  const noise = new Noise();

  const article = [
    {
      question: 'What name would you have chosen, if you could have been called anything else?',
      answer: 'Oh, my God, well, my mum was actually going to call me Nina. And then, last minute, she changed it to Lisa. At one point, I thought I would have preferred Nina—I like it better. Honestly, I don’t like Lisa.',
      x: CANVAS_WIDTH / 1,
      y: 500,
      s: 0.8
    },
    {
      question: 'What were your first experiences with makeup?',
      answer: 'It started when I found my mum’s old makeup after we moved back to England from New Zealand. She had this box with little drawers, filled with 1960s makeup like Biba and Mary Quant that was really playful and colourful. Makeup from that era was designed for teenagers, so it had this childlike, crayon-like quality that I loved because of the objects and textures and for me, that was the turning point. I was also really inspired by the “vintageness”, because I knew it was old makeup and that was more interesting than modern makeup. I also used to draw on paper with it because it was more interesting than using regular crayons and art supplies. For my 13th birthday, I got a book on stage and theatrical makeup, and it blew my mind. The transformations, the way you could create light and shade, it was like art. I knew that’s what I wanted to do',
      x: CANVAS_WIDTH / 2,
      y: 300,
      s: 0.8
    },
    {
      question: 'When you were 21, who did you look up to in the beauty industry?',
      answer: 'Probably Mary Greenwell. She was the makeup artist doing all the Vogue covers at the time. When I was a teenager, I’d use my pocket money to buy Vogue magazines and dream about having a career like hers. She was doing the makeup for literally every major cover. And then, two years later, I was working with her. It was a dream come true.',
      x: CANVAS_WIDTH / 3,
      y: 150,
      s: 0.9
    },
    {
      question: 'Did you face any setbacks when you entered the industry?',
      answer: 'Oh, absolutely. I didn’t know anyone in the industry, and there wasn’t any internet back then to guide me, so it was tricky to figure out, especially wanting to go into the fashion industry. I’d buy magazines to study credits like "Mary Greenwell for Debbie Walters" and figure out which agency to call and who was repping each other. Networking was painstaking, you had to meet people at clubs or get in touch with agencies directly and say, “I would love to assist, or something”. I did a lot of unpaid work to build my portfolio, working with new models like Kate Moss who were just coming into the industry. At one point, I heard someone say they got a magazine cover because their boyfriend was the editor, and I remember thinking, oh my god, I hope it’s literally not going to come down to who you know. But in the end, hard work and perseverance paid off. By the time I was 23, I was signed by an agency alongside legends like Sam McKnight, Mary Greenwell and major major people - I was kind of the baby. That was huge. At first, I was asked why I wanted to assist, but I had only worked with up-and-coming models and I didn’t know how to react when a big supermodel or celebrity walked into the room; however, I quickly learnt that you just treat everybody the same.',
      x: CANVAS_WIDTH / 4,
      y: 200,
      s: 0.9
    },
    {
      question: 'What was your favourite club when you were 21?',
      answer: 'The WAG Club was the place to be. So many cool people in fashion and creative industries hung out there. Clubs like that were great for meeting people and building connections. I’d speak to the people from Models One and ask whether they had any new models and that’s how I got my portfolio together.',
      x: CANVAS_WIDTH / 5,
      y: 90,
      s: 0.75
    }
  ]

  const interval = CANVAS_WIDTH / article.length + 50;
  const articleRef = useRef(
    article.map((question, i) => {

      const extraBuffer = i >= 13 ? 100 : 0;

      return {
        ...question,
        x: i * interval + extraBuffer,
        noiseSeedX: Math.floor(Math.random() * 64000),
        noiseSeedY: Math.floor(Math.random() * 64000),
        xWithNoise: question.x,
      }
    })
  )

  const [newArticle, setNewArticle] = useState([])

  useEffect(() => {
    if (windowWidth) {
      const interval = windowWidth / article.length + 50

      const testArticle = article.map((image, i) => {
        const extraBuffer = i >= 13 ? 100 : 0

        return { ...image, x: i * interval + extraBuffer }
      })

      setNewArticle(testArticle)
    }
  }, [windowWidth])

  const animationRef = useRef<number>();

  useEffect(() => {
    // setTimeout(() => {
    //   setReady(true)
    // }, 400)

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [])

  function animate() {
    articleRef.current = articleRef.current.map((question, index)=> {
      const newNoiseSeedX = question.noiseSeedX + NOISE_SPEED;
      const newNoiseSeedY = question.noiseSeedY + NOISE_SPEED;

      const randomX = noise.simplex2(newNoiseSeedX, 0);
      const randomY = noise.simplex2(newNoiseSeedY, 0);

      const newX = question.x - SCROLL_SPEED + 0.05;
      const newY = question.y - SCROLL_SPEED + 0.05;

      const newXWithNoise = newX + randomX * NOISE_AMOUNT;
      const newYWithNoise = newY + randomY * 5;

      const element = document.getElementById(`question-${index}`);

      if (element) {
        element.style.left = `${newXWithNoise}px`;
        element.style.top = `${newYWithNoise}px`;
        element.style.transform = `scale(${question.s})`;
      }

      // var restartPoint = image.width >
      return {
        ...question,
        noiseSeedX: newNoiseSeedX,
        noiseSeedY: newNoiseSeedY,
        x: newX < -500 ? CANVAS_WIDTH + 600: newX,
        xWithNoise: newXWithNoise,
        yWithNoise: newYWithNoise,
      }
    });

    animationRef.current = requestAnimationFrame(animate);
  }

  const [activeIndex, setActiveIndex] = useState<number>();

  const handleClick = (index: number) => {
    setActiveIndex(index);

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const bubbles = document.querySelectorAll('.bubble');

    bubbles.forEach((bubble: HTMLDivElement, i: number) => {

      if (i !== index) {
        const randomX = (Math.floor(Math.random() * (window.innerWidth * 2)) - window.innerWidth) * 10;  // Random X outside screen width
        const randomY = (Math.floor(Math.random() * (window.innerHeight * 2)) - window.innerHeight) * 10;
        bubble.style.transition = 'top 10s cubic-bezier(0.25, 0.8, 0.25, 1), left 10s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.5s ease';

        console.log(randomX)

        bubble.style.left = `${randomX}px`;
        bubble.style.top = `${randomY}px`;
      }
      else if (i == index) {
        bubble.style.transition = 'top 1s cubic-bezier(0.25, 0.8, 0.25, 1), left 1s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.5s ease';
        bubble.style.top = '40%';
        bubble.style.left = '20%';
        // bubble.style.transform = 'translate(-50%, -50%)';
        bubble.classList.add('active');
      }
    })
  }

  return (
    <div className='article-container'>
      <div className='lisa-eldridge-header'>
        <h1>In Conversation With Lisa Eldridge:</h1>
      </div>
      {
        article.map((question: any, index: number) => {
          return (
            <div className='bubble' id={`question-${index}`} onClick={() => handleClick(index)}>
              <h2>{question.question}</h2>
              <p>{question.answer}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default LisaEldridgeView;
