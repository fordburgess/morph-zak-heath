import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import MatterWrap from "matter-wrap"; // Make sure this is installed
import "./styles/adamReed.css"; // Optional CSS
import Adam2 from '../../assets/adam-reed-2.jpeg';
import Adam1 from '../../assets/adam-reed.webp';

const questions = [
  {
    question: 'What name would you have chosen, if you could have been called anything else?',
    answer: "Kestrel, like the bird. When I was young, I loved the film Kes, and I’ve always admired the power behind that name. Funny enough, when we adopted Riley (my husband and I’s son), before realising you couldn’t change their names, we almost called him Kestrel because of that connection.",
    y: 200,
  },
  {
    question: "When you were 21, who did you look up to in the beauty industry?",
    answer: "Julien d’Ys, the French hairdresser. He has always been my ultimate icon. And Estée Lauder, I was obsessed with her brand. My grandmother used Estée Lauder and the heritage of the brand and what they did back then captivated me because it was’t as consumer facing. I also admired François Nars. Meeting Julien d’Ys was surreal; I completely fan-girled and went quiet, which isn’t like me at all! I stood quite in awe of the fact I got to meet him, and as it was early on in my career, I just thought he was amazing!",
    y: 300,
  },
  {
    question: "What was your first interaction with hair?",
    answer: "It started with my Nan. As a boy, I’d go with her to this tiny salon in a tiny village in Somerset called Jenny’s Cut & Shape. It was full of old ladies getting shampoos and cut and I felt at home, me in a salon I did. I used to cut my sister’s and best friends hair from a young age and I guess that is why I have always worked in a salon and not been just a session stylist because I love that sense of community. I was only four, but they had me cleaning rollers, sweeping the floor, and making coffee. That salon gave me a sense of belonging that school never did, because I felt like I wasn’t very good at school, but in a salon I thrived, and I loved it.",
    y: 500,
  },
  {
    question: "Where did you go clubbing in London at 21?",
    answer: "I went to Heaven, Velvet Underground, and a bar in Soho called Ricky Ticks, a hub for fashion people. Moving to London at 22, I immersed myself in these places to network and meet people, so I went three to four times a week, I loved it and I felt like I was with my people. I even met Jean Paul Gaultier at Heaven! I was wearing a Jean Paul Gaultier kilt, and so was he. I walked right up to him. Networking then was all face-to-face, and I loved it, so I made sure I was in the right places to meet the right people and you’d meet the most amazing people in Heaven.",
    y: 400,
  },
  {
    question: "How did you approach networking when you didn’t know anyone?",
    answer: "I’d go up to people, compliment their work, and start conversations. My strategy was also to meet PRs face-to-face who could get me into events and who looked after these big names. The party scene was much bigger back then because social media wasn’t around to let people know what was happening, it was more exclusive, so having the PR’s numbers was a better way. Once there, my motto was kill people with kindness, so I avoided being obnoxious and focused on being helpful and approachable because that is what stood out.",
    y: 100,
  },
  {
    question: "Did you face any setbacks in the industry?",
    answer: "Yes. I now understand that some of my struggles were tied to neurodiversity. I’ve always been sensitive to negativity and could feel overwhelmed in certain situations. Another challenge was proving that I wasn’t just a salon hairdresser and that I could do creative work and could manage a team behind the scenes at Fashion Week, and I had to battle with this. I persevered and assisted Luigi Murenu, an Italian hairstylist early on in my career, which helped me break through those barriers by supporting everything I wanted to do. They were amazing.",
    y: 450,
  },
  {
    question: "What was your very first show?",
    answer: "It was for Red or Dead in 1996. They were a revolutionary streetwear brand who had a shop in Covent Garden, and I was obsessed with their clothes. It felt like a full-circle moment that they were my first London Fashion Week show since I loved their clothes and this made me massively believe in manifestation and putting things into the universe . From there, I worked with other amazing designers, including Andrew Groves, who was McQueen’s boyfriend at the time and whose shows really pushed boundaries - for example, one of his shows was called Cociane Nights and down the runway was a line of “coke”. I then started doing Julian McDonald, Matthew Williamson and then both the commercial and high-end fashion. I was really lucky that my trajectory took me to do all of that.",
    y: 650,
  },
  {
    question: "What’s been your biggest “pinch me” moment so far?",
    answer: "You know what, it was doing Madonna’s hair for her Me Against the Music video with Britney Spears. I’ve always been a huge Madonna fan, so stepping into that role was surreal. For £60 in 2002, I bought some black heels from a charity auction on the Old Icon Madonna fan club as I am the biggest Madonna fan. Luigi Murenu used to do her hair but he was in Paris to do the Victor and Rolf show, so he asked me to go instead to Silver Cup Studios in New York. That was insane. Whilst doing her hair, Like A Prayer was being played on the radio, it felt like a everything had come full circle.",
    y: 200,
  },
  {
    question: "Did you attend beauty school?",
    answer: "Yes, I worked in a salon and attended beauty school once a week to get my City & Guilds qualification and the school was called SCAT, Somerset College of Arts. Then it was very in- depth, we even learned how to make shampoo and perm solutions from scratch. When I moved to London at the age of twenty-two, I started at Charles Worthington.",
    y: 300,
  },
  {
    question: "What’s your favourite fragrance?",
    answer: "Bloody hell, outside of my own line, I would say Diptyque’s 34.",
    y: 350
  },
  {
    question: "Your go-to restaurant in London?",
    answer: "Som Saa in Spitalfields. It’s a Northern Thai restaurant that started as a pop-up. I love the community spirit of it but the food above anything is the best Thai food outside of Thailand.",
    y: 600,
  },
  {
    question: "Is there a fashion item you regret buying?",
    answer: "I’ve always used clothes as a bit of armour. I bought an outfit from a Central Saint Martins student because I loved what she made; however, I just felt uncomfortable in it. It wasn’t the outfit, it was me in it. Once, I fell down the escalator at Holborn Station wearing platform Buffalo boots. That was definitely a regret! I’ve always loved wearing skirts, but one I bought was too poofy and it was just so wrong for me.",
    y: 200,
  },
  {
    question: "What would you tell your 21-year-old self now?",
    answer: "To always be proud of your decisions, because long term, it’s those things that give me the drive to carry on.",
    y: 650,
  },
  {
    question: "Do you think your 21-year-old you would be like, fucking hell this is crazy?",
    answer: "Without any shadow of a doubt. I was bullied and literally my whole life there have been people saying things; however, I hate confrontation and it’s the neurodiversity of understanding it. People really took the piss, but actually, every time I’ve gone with my gut, they’re the things that I’m proud of and it’s paid off, I did it and I’m still doing it.",
    y: 340,
  }
]

const images = [
  { src: Adam1, radius: 100 },
  { src: Adam2, radius: 120 }
]

const AdamReedView = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const renderRef = useRef(null);
  const expandingBubbles = useRef(new Map());

  const wrapText = (context, text, maxWidth) => {
    const words = text.split(' ');
    let line = '';
    const lines = [];

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = context.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        lines.push(line);
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line);
    return lines;
  };

  useEffect(() => {

    // Register plugin
    Matter.use(MatterWrap);

    // Module aliases
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Composite = Matter.Composite;
    const Composites = Matter.Composites;
    const Common = Matter.Common;
    const MouseConstraint = Matter.MouseConstraint;
    const Mouse = Matter.Mouse;
    const Bodies = Matter.Bodies;

    // Create engine
    const engine = Engine.create();
    const world = engine.world;
    engineRef.current = engine;
    engine.gravity.y = 0;
    engine.gravity.x = 0;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    renderRef.current = render;
    Render.run(render);

    Matter.Events.on(render, 'afterRender', () => {
      const context = render.context;

      Composite.allBodies(engine.world).forEach(body => {
        if (body.circleRadius && body.render.sprite?.texture) {
          const img = new Image();
          img.src = body.render.sprite.texture;

          const radius = body.circleRadius;
          const x = body.position.x;
          const y = body.position.y;

          context.save();
          context.beginPath();
          context.arc(x, y, radius, 0, 2 * Math.PI);
          context.closePath();
          context.clip();
          const imgSize = Math.min(img.width, img.height); // smallest side for cropping square
          const sx = (img.width - imgSize) / 2;
          const sy = (img.height - imgSize) / 2;

          context.drawImage(
            img,
            sx, sy, imgSize, imgSize,       // crop: center square
            x - radius, y - radius,         // draw position
            radius * 2, radius * 2          // draw size (circle bounds)
          );
          context.restore();
        }
      })

      // context.font = '15px Josefin Sans';
      context.fillStyle = '#000'; // White text

      Composite.allBodies(engine.world).forEach(body => {
        if (body.circleRadius && body.label) {
          let text = body.label;
          if (body.plugin?.scaleFactor > 1.5 && body.plugin?.fullText) {
            if (body.plugin.showFullTextAt && Date.now() >= body.plugin.showFullTextAt) {
              body.plugin.fullTextVisible = true;
            }

            if (body.plugin.fullTextVisible) {
              text = body.plugin.fullText;
              context.font = '500 Josefin Sans';
            }
          } else {
            context.font = '300 18px Josefin Sans';
          }

          const maxTextWidth = body.circleRadius * 1.6; // scale with size
          const lines = wrapText(context, text, maxTextWidth);
          context.fillStyle = '#000';

          const lineHeight = 20;
          const totalHeight = lines.length * lineHeight;
          const startY = body.position.y - totalHeight / 2 + lineHeight / 2;

          const questionLines = wrapText(context, body.label, maxTextWidth);
          const answerLines = wrapText(context, body.plugin.fullText, maxTextWidth);

          if (!body.plugin.fullTextVisible) {
            context.globalAlpha = body.plugin.questionOpacity ?? 1;
            questionLines.forEach((line, index) => {
              context.fillText(
                line,
                body.position.x - context.measureText(line).width / 2,
                startY + index * lineHeight + 10
              );
            });
          } else {
            context.globalAlpha = body.plugin.answerOpacity ?? 0;
            answerLines.forEach((line, index) => {
              context.fillText(
                line,
                body.position.x - context.measureText(line).width / 2,
                startY + index * lineHeight + 10
              );
            });
          }

          context.globalAlpha = 1;
        }
      });
    });

    // Create runner
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Ground
    // Composite.add(world, [
    //   Bodies.rectangle(400, 600, 1200, 50.5, {
    //     isStatic: true,
    //     render: { fillStyle: "#060a19" },
    //   }),
    // ]);

    // Stack of random circles
    // const stack = Composites.stack(100, 0, 10, 8, 10, 10, (x, y) =>
    //   Bodies.circle(x, y, Common.random(15, 30), {
    //     restitution: 0.6,
    //     friction: 0.1,
    //   })
    // );

    const getTextHeight = (context, text, maxWidth, lineHeight) => {
      const lines = wrapText(context, text, maxWidth); // Use wrapText to calculate number of lines
      return lines.length * lineHeight; // Total height = number of lines * line height
    };

    const getTextBasedRadius = (context, question, answer) => {
      const maxWidth = 300; // You can adjust this to fit your design

      const questionHeight = getTextHeight(context, question, maxWidth, 20); // line height of 20
      // const answerHeight = getTextHeight(context, answer, maxWidth, 20);

      // Calculate the required radius based on the larger of the question or answer height
      const heightRequired = Math.max(questionHeight);

      // Base radius is 80, then add some extra size based on the height of the text
      const baseSize = 80;
      const extra = Math.min(heightRequired * 0.5, 150); // max growth
      return baseSize + extra + 25;
    };

    const colors = ['rgba(248, 215, 218, 0.7)', 'rgba(221, 235, 225, 0.7)', 'rgba(253, 246, 237, 0.7)'];
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    questions.map((item, i) => console.log((i + 1) * 200))

    const circles = questions.map((item, i) =>
      Bodies.circle(
        (i + 1) * 300,
        item.y,
        getTextBasedRadius(render.context, item.question, item.answer),
        {
          restitution: 0.6,
          friction: 0.1,
          label: item.question,
          plugin: {
            scaleFactor: 1,
            fullText: item.answer,
            questionOpacity: 1,
            answerOpacity: 0,
            fullTextVisible: false,
          },
          render: {
            fillStyle: colors[Math.floor(Math.random() * colors.length)],
            strokeStyle: '#fff',
            lineWidth: 0,
          }
        }
      )
    );

    const imageBodies = images.map((img) =>
      Bodies.circle(
        Common.random(100, 200),
        Common.random(100, 200),
        img.radius,
        {
          isStatic: false,
          restitution: 0.6,
          friction: 0.1,
          render: {
            sprite: {
              texture: img.src,
              xScale: 0, // assuming image width is ~100px
              yScale: 0,
            },
          },
        }
      )
    );

    Composite.add(world, circles);
    // Composite.add(world, imageBodies);

    // Mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        inertia: Infinity,
        stiffness: 0,
        render: { visible: false },
      },
    });

    render.canvas.addEventListener("mousedown", (event) => {
      const rect = render.canvas.getBoundingClientRect();
      const mousePosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      const clickedBubble = Composite.allBodies(engine.world).find((body) =>
        !body.isStatic && Matter.Vertices.contains(body.vertices, mousePosition)
      );

      if (clickedBubble) {
        // Prevent it from sticking to mouse
        mouseConstraint.constraint.bodyB = null;

        const currentScale = clickedBubble.plugin.scaleFactor || 1;
        const targetScale = currentScale === 1 ? 6 : 1; // toggle

        if (clickedBubble.plugin.scaleFactor === 1) {
          // Start fade out of question
          clickedBubble.plugin.questionFadingOut = true;

          // Delay bubble expansion until question is fully faded
          setTimeout(() => {
            expandingBubbles.current.set(clickedBubble.id, {
              body: clickedBubble,
              target: 6,
              speed: 0.1,
            });
            clickedBubble.plugin.willShowFullText = true;
            clickedBubble.plugin.showFullTextAt = Date.now() + 500;
          }, 100); // match this to fade speed
        } else {
          // Shrinking: fade in question, shrink bubble
            clickedBubble.plugin.answerFadingOut = true;

            // Delay shrinking until answer is fully faded
            setTimeout(() => {
              expandingBubbles.current.set(clickedBubble.id, {
                body: clickedBubble,
                target: 1,
                speed: 0.1,
              });
            }, 100); // Match this to fade speed
        }

        clickedBubble.plugin.showFullTextAt = null;
        if (targetScale === 2) {
          // Only set this if expanding
          clickedBubble.plugin.willShowFullText = true;
        } else {
          clickedBubble.plugin.fullTextVisible = false; // collapse
        }
      }
    });

    Matter.Events.on(engine, "beforeUpdate", () => {
      const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const forceMagnitude = 0.005;

      Composite.allBodies(world).forEach((body) => {
        if (body.isStatic) return;

        const deltaX = center.x - body.position.x;
        const deltaY = center.y - body.position.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const driftForce1 = -0.0005; // negative x-axis for leftward motion
        const driftForce2 = -0.0002;
        Matter.Body.applyForce(body, body.position, {
          x: Common.random(driftForce1, driftForce2),
          y: 0,
        });

        // -- jitter --
        const jitter = 0.00002;
        Matter.Body.applyForce(body, body.position, {
          x: (Math.random() - 0.5) * jitter,
          y: (Math.random() - 0.5) * jitter,
        });

        const fadeSpeed = 1 / 8;
        if (body.plugin?.questionFadingOut) {
          body.plugin.questionOpacity = Math.max(0, (body.plugin.questionOpacity ?? 1) - fadeSpeed);
          if (body.plugin.questionOpacity <= 0) {
            body.plugin.questionFadingOut = false; // done fading
          }
        }

        if (body.plugin?.answerFadingOut) {
          body.plugin.answerOpacity = Math.max(0, (body.plugin.answerOpacity ?? 1) - fadeSpeed);
          if (body.plugin.answerOpacity <= 0) {
            body.plugin.answerFadingOut = false; // Done fading
            body.plugin.fullTextVisible = false;
          }
        }

        // -- smooth scale animation --
        const expandData = expandingBubbles.current.get(body.id);
        if (expandData) {
          const { target, speed } = expandData;
          const current = body.plugin.scaleFactor || 1;

          if (target === 2) {
            // fade in answer
            const willBeVisible = body.plugin.showFullTextAt && Date.now() >= body.plugin.showFullTextAt;
            if (willBeVisible || body.plugin.fullTextVisible) {
              body.plugin.answerOpacity = Math.min(1, (body.plugin.answerOpacity ?? 0) + fadeSpeed);
            }
          } else {
            // Collapsing: fade in question, fade out answer
            setTimeout(() => {
              body.plugin.questionOpacity = Math.min(1, (body.plugin.questionOpacity ?? 0) + fadeSpeed);
            }, 550);
            body.plugin.answerOpacity = Math.max(0, (body.plugin.answerOpacity ?? 1) - fadeSpeed);
          }


          // Only scale if not at target
          if (Math.abs(current - target) > 0.01) {
            const next = current + (target - current) * speed;
            const scaleStep = next / current;

            Matter.Body.scale(body, scaleStep, scaleStep);
            body.plugin.scaleFactor = next;
          } else {
            body.plugin.scaleFactor = target;
            expandingBubbles.current.delete(body.id);

            if (target === 2 && body.plugin.willShowFullText) {
              body.plugin.showFullTextAt = Date.now() + 300; // delay in ms
              body.plugin.willShowFullText = false;
            }
          }
        }
      });
    });



    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    // Viewport fit
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: window.innerWidth, y: window.innerHeight },
    });

    // Wrap bodies using matter-wrap
    Composite.allBodies(world).forEach((body) => {
      body.plugin.wrap = {
        min: { x: render.bounds.min.x - 100, y: render.bounds.min.y },
        max: { x: render.bounds.max.x + 100, y: render.bounds.max.y },
      };
    });

    // Cleanup on unmount
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <div className="adam-reed-container">
      <div
        ref={sceneRef}
        style={{
          background: 'transparent',
          width: "300vw",
          height: "100vh",
          margin: "auto",
        }}
      />
    </div>
  );
};

export default AdamReedView;
