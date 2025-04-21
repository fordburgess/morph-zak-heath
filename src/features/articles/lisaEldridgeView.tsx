import { useState, useEffect, useRef } from 'react';
import { Noise } from 'noisejs';
import './styles/articles.css';
import './styles/lisaEldridge.css';
import Image1 from '../../assets/lisa-eldridge-1.webp';
import Image2 from '../../assets/lisa-eldridge-2.webp';
import Image8 from '../../assets/lisa-eldridge-8.webp';
import Image9 from '../../assets/lisa-eldridge-9.webp';
import ArrowRight from '../../assets/right-arrow.png';
import ArrowLeft from '../../assets/left-arrow.png';
import { motion } from 'framer-motion';

const LisaEldridgeView = () => {
  const windowWidth = 2000;
  const CANVAS_WIDTH = 2000;
  const NOISE_AMOUNT = 4;
  const NOISE_SPEED = 0.006;
  const SCROLL_SPEED = 0.75;
  const noise = new Noise();

  const article = [
    {
      id: 0,
      question: 'What name would you have chosen, if you could have been called anything else?',
      answer: 'Oh, my God, well, my mum was actually going to call me Nina. And then, last minute, she changed it to Lisa. At one point, I thought I would have preferred Nina—I like it better. Honestly, I don’t like Lisa.',
      x: CANVAS_WIDTH / 1,
      y: 320,
      s: 1,
      size: '300px',
    },
    {
      id: 1,
      question: 'What were your first experiences with makeup?',
      answer: 'It started when I found my mum’s old makeup after we moved back to England from New Zealand. She had this box with little drawers, filled with 1960s makeup like Biba and Mary Quant that was really playful and colourful. Makeup from that era was designed for teenagers, so it had this childlike, crayon-like quality that I loved because of the objects and textures and for me, that was the turning point. I was also really inspired by the “vintageness”, because I knew it was old makeup and that was more interesting than modern makeup. I also used to draw on paper with it because it was more interesting than using regular crayons and art supplies. For my 13th birthday, I got a book on stage and theatrical makeup, and it blew my mind. The transformations, the way you could create light and shade, it was like art. I knew that’s what I wanted to do',
      x: CANVAS_WIDTH / 2,
      y: 200,
      s: 1,
      image: Image2,
      size: '250px',
      expandedSize: '100vh'
    },
    {
      id: 2,
      question: 'When you were 21, who did you look up to in the beauty industry?',
      answer: 'Probably Mary Greenwell. She was the makeup artist doing all the Vogue covers at the time. When I was a teenager, I’d use my pocket money to buy Vogue magazines and dream about having a career like hers. She was doing the makeup for literally every major cover. And then, two years later, I was working with her. It was a dream come true.',
      x: CANVAS_WIDTH / 3,
      y: 400,
      s: 1,
      size: '320px'
    },
    {
      id: 3,
      question: 'Did you face any setbacks when you entered the industry?',
      answer: 'Oh, absolutely. I didn’t know anyone in the industry, and there wasn’t any internet back then to guide me, so it was tricky to figure out, especially wanting to go into the fashion industry. I’d buy magazines to study credits like "Mary Greenwell for Debbie Walters" and figure out which agency to call and who was repping each other. Networking was painstaking, you had to meet people at clubs or get in touch with agencies directly and say, “I would love to assist, or something”. I did a lot of unpaid work to build my portfolio, working with new models like Kate Moss who were just coming into the industry. At one point, I heard someone say they got a magazine cover because their boyfriend was the editor, and I remember thinking, oh my god, I hope it’s literally not going to come down to who you know. But in the end, hard work and perseverance paid off. By the time I was 23, I was signed by an agency alongside legends like Sam McKnight, Mary Greenwell and major major people - I was kind of the baby. That was huge. At first, I was asked why I wanted to assist, but I had only worked with up-and-coming models and I didn’t know how to react when a big supermodel or celebrity walked into the room; however, I quickly learnt that you just treat everybody the same.',
      x: CANVAS_WIDTH / 4,
      y: 250,
      s: 1,
      size: '275px'
    },
    {
      id: 4,
      question: 'What was your favourite club when you were 21?',
      answer: 'The WAG Club was the place to be. So many cool people in fashion and creative industries hung out there. Clubs like that were great for meeting people and building connections. I’d speak to the people from Models One and ask whether they had any new models and that’s how I got my portfolio together.',
      x: CANVAS_WIDTH / 5,
      y: 500,
      s: 0.8,
      size: '275px'
    },
    {
      id: 5,
      question: 'What was the first big show you worked on?',
      answer: 'It was with Mary, assisting at shows like Rifat Ozbek in London and Romeo Gigli in Paris. I remember rushing through makeup at my first big show, and Mary told me to slow down and take my time. I was like, oh my god, okay!',
      x: CANVAS_WIDTH / 6,
      y: 250,
      s: 1,
      size: '250px'
    },
    {
      id: 6,
      question: 'What advice would you give your 21-year-old self?',
      answer: 'I’d tell her to stay confident and not compare herself to others but explore the ideas she had and wanted to share. In a creative industry, it’s fuelled by ideas, there’s no such thing as a bad one. I wish I’d spoken up more on shoots when I had ideas. Now, I’m much more comfortable experimenting. For instance, I recently tried a bold blue eyeshadow look during a Claudia Schiffer shoot for Pop Magazine. It didn’t work, and we took it off, but that’s okay! It’s all part of the creative process. Don’t think you’re silly or something and don’t be afraid to explore, speak your mind, and trust your instincts. There’s good ideas, bad ideas, but actually they’re all good.',
      x: CANVAS_WIDTH / 7,
      y: 300,
      s: 1,
      size: '275px'
    },
    // associated images beyond this point
    // {
    //   id: 7,
    //   questionId: 1,
    //   src: Image2,
    //   x: 600,
    //   y: 400,
    //   s: 1.1
    // },
    // {
    //   id: 8,
    //   questionId: 4,
    //   src: Image8,
    //   x: 300,
    //   y: 700,
    // }
  ]

  const interval = CANVAS_WIDTH / article.length + 100;
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

  const positionsRef = useRef<{ left: number; top: number }[]>([]);
  function animate() {
    articleRef.current = articleRef.current.map((item, index)=> {
      const newNoiseSeedX = item.noiseSeedX + NOISE_SPEED;
      const newNoiseSeedY = item.noiseSeedY + NOISE_SPEED;

      const randomX = noise.simplex2(newNoiseSeedX, 0);
      const randomY = noise.simplex2(newNoiseSeedY, 0);

      const newX = item.x - SCROLL_SPEED + 0.05;
      const newY = item.y - SCROLL_SPEED + 0.05;

      const newXWithNoise = newX + randomX * NOISE_AMOUNT;
      const newYWithNoise = newY + randomY * NOISE_AMOUNT;

      const idString = item.question ? `item-${item.id}` : `associated-image-${item.questionId}`
      const element = document.getElementById(idString);

      if (element) {
        if (!positionsRef.current[index]) {
          positionsRef.current[index] = { newXWithNoise, newYWithNoise };
        }

        if (newXWithNoise < -450) {
          element.style.opacity = '0';
        }

        if (newXWithNoise < 2500 && newXWithNoise > 2000) {
          element.style.opacity = '1';
        }

        element.style.left = `${newXWithNoise}px`;
        element.style.top = `${newYWithNoise}px`;
        element.style.transform = `scale(${item.s})`;
      }

      return {
        ...item,
        noiseSeedX: newNoiseSeedX,
        noiseSeedY: newNoiseSeedY,
        x: newX < -500 ? CANVAS_WIDTH + 600: newX,
        xWithNoise: newXWithNoise,
        yWithNoise: newYWithNoise,
      }
    });

    // animationRef.current = requestAnimationFrame(animate);
  }

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [bubblePositions, setBubblePositions] = useState([]);

  const handleClick = (id: number) => {
    if (activeIndex == null) {
      setActiveIndex(id);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      // let contentOverlay = document.querySelector('.content-overlay');

      // if (contentOverlay) {
      //   contentOverlay.style.visibility = 'visible';
      //   contentOverlay.style.opacity = 1;
      // }

      const bubbles = document.querySelectorAll('.bubble');
      bubbles.forEach((bubble: HTMLDivElement, i: number) => {

        bubble.style.transition = `
          height 1s,
          width 1s,
          top ${bubble.dataset.id == id ? 1.5 : 5}s cubic-bezier(0.25, 0.8, 0.25, 1),
          left ${bubble.dataset.id == id ? 1.5 : 5}s cubic-bezier(0.25, 0.8, 0.25, 1),
          transform 0.5s ease
        `

        if (bubble.dataset.id == id) {
          const textContainer = document.getElementById(`text-container-${id}`);
          const itemTitle = document.getElementById(`item-title-${id}`);
          const itemText = document.getElementById(`item-text-${id}`);
          const associatedImage = document.getElementById(`associated-image-${id}`);

          textContainer.style.opacity = 0;
          textContainer.style.height = '80%';
          textContainer.style.width = '80%';

          bubble.style.top = '50%';
          bubble.style.left = '60%';
          bubble.style.transform = 'translate(-60%, -50%)';
          bubble.style.padding = '20px';


          // itemTitle.style.fontSize = '0.5rem';
          // itemTitle.style.lineHeight = '0.75rem';

          bubble.style.height = '110vh';
          bubble.style.width = '110vh';


          setTimeout(() => {
            textContainer.style.opacity = 1;
            textContainer.style.textAlign = 'right';
            textContainer.style.padding = '20px';
            itemTitle.style.marginBottom = '10px';
            itemTitle.style.fontSize = '1.8rem';
            itemText.style.display = 'block'
            itemText.style.opacity = '1';
            itemText.style.fontSize = '1.25rem';
          }, 1500);

          if (associatedImage) {
            associatedImage.style.transition = `
              height 1s,
              width 1s,
              top 1.5s cubic-bezier(0.25, 0.8, 0.25, 1),
              left 1.5s cubic-bezier(0.25, 0.8, 0.25, 1),
              transform 0.5s ease
            `
            associatedImage.style.top = '20%';
            associatedImage.style.left = '20%';
            associatedImage.style.transform = 'translate(-20%, -20%)';
          }
        }
        else if (bubble.id !== `associated-image-${id}`) {
          const randomX = Math.random() < 0.5 ? -Math.abs(Math.random() * (2000 - 1000) + 1000) : Math.abs(Math.random() * (2000 - 1000) + 1000);
          const randomY = Math.random() < 0.5 ? -Math.abs(Math.random() * (2000 - 1000) + 1000) : Math.abs(Math.random() * (2000 - 1000) + 1000);

          bubble.style.left = `${randomX}px`;
          bubble.style.top = `${randomY}px`;
        }
      })
    }
  }

  const handleContainerClick = () => {
    if (activeIndex !== null) {
      setActiveIndex(null);

      const bubbles = document.querySelectorAll('.bubble');
      const contentOverlay = document.querySelector('.content-overlay');

      if (contentOverlay) {
        contentOverlay.style.opacity = 0;
        setTimeout(() => {
          contentOverlay.style.visibility = 'hidden';
        }, 550);
      }

      bubbles.forEach((bubble: HTMLDivElement, i: number) => {
        const pos = positionsRef.current[i];
        if (!pos) return;

        bubble.style.transition = `
          height 1s,
          width 1s,
          top 2s cubic-bezier(0.25, 0.8, 0.25, 1),
          left 2s cubic-bezier(0.25, 0.8, 0.25, 1),
          transform 0.5s ease
        `
        bubble.style.left = `${pos.left}px`;
        bubble.style.top = `${pos.top}px`;
        bubble.style.height = '250px';
        bubble.style.width = '250px';
        bubble.classList.remove('active');

        // setTimeout(() => {
        //   bubble.style.transition = '';
        // }, 4000);
      });

      animationRef.current = requestAnimationFrame(animate); // Resume animation if needed
      return;
    }
  }

  return (
    <div className='article-container' onClick={() => handleContainerClick()}>
      <div className='lisa-eldridge-header' style={{ opacity: activeIndex ? 0 : 1 }}>
        <h1 className='article-title'>In Conversation With Lisa Eldridge:</h1>
        <h2 className='article-subtitle'>Becoming A World Class Makeup Artist</h2>
      </div>
      {
        article.map((item: any, index: number) => {

          return (
            <div
              data-id={item.id}
              className='bubble'
              id={item.question ? `item-${item.id}` : `associated-image-${item.questionId}`}
              onClick={() => handleClick(item.id)}
              style={{
                padding: item.src ? '0' : '50px',
                overflow: 'hidden',
                height: item.size ? item.size : '250px',
                width: item.size ? item.size : '250px'
              }}
            >
                <div
                    className='text-container'
                    id={`text-container-${item.id}`}
                    style={{ height: item.size, width: item.size }}
                  >
                <h3 className='item-title' id={`item-title-${index}`}>{item.question}</h3>
                <p className='item-text' id={`item-text-${index}`}>{item.answer}</p>
              </div>
              {/* {
                item.question ? (
                  <div
                    className='text-container'
                    id={`text-container-${item.id}`}
                    style={{ height: `${item.size}px`, width: `${item.size}px`, color: 'red' }}
                  >
                    <h3 className='item-title' id={`item-title-${index}`}>{item.question}</h3>
                    <p className='item-text' id={`item-text-${index}`}>{item.answer}</p>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={`image-${item.id}`}
                  />
                )
              } */}
            </div>
          )
        })
      }
    </div>
  )
}

export default LisaEldridgeView;
