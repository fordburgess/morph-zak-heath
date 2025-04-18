import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import MatterWrap from "matter-wrap"; // Make sure this is installed
import "./styles/adamReed.css"; // Optional CSS

const questions = [
  {
    question: 'What name would you have chosen, if you could have been called anything else?',
    answer: "Kestrel, like the bird. When I was young, I loved the film Kes, and I’ve always admired the power behind that name. Funny enough, when we adopted Riley (my husband and I’s son), before realising you couldn’t change their names, we almost called him Kestrel because of that connection."
  },
  {
    question: 'When you were 21, who did you look up to in the beauty industry?',
    answer: "Julien d’Ys, the French hairdresser. He has always been my ultimate icon. And Estée Lauder, I was obsessed with her brand. My grandmother used Estée Lauder and the heritage of the brand and what they did back then captivated me because it was’t as consumer facing. I also admired François Nars. Meeting Julien d’Ys was surreal; I completely fan-girled and went quiet, which isn’t like me at all! I stood quite in awe of the fact I got to meet him, and as it was early on in my career, I just thought he was amazing!"
  }
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

      context.font = '18px Josefin Sans';
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
              context.font = '16px Josefin Sans';
            }
          } else {
            context.font = '18px Josefin Sans';
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

    const getTextBasedRadius = (text) => {
      const length = text.length;
      const baseSize = 80;
      const extra = Math.min(length * 0.5, 100); // max growth
      return baseSize + extra;
    };

    const colors = ['rgba(248, 215, 218, 0.7)', 'rgba(221, 235, 225, 0.7)', 'rgba(253, 246, 237, 0.7)'];
    const circles = questions.map((item) =>
      Bodies.circle(
        Common.random(100, 200),
        Common.random(100, 200),
        getTextBasedRadius(item.question),
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

    Composite.add(world, circles);

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
        const targetScale = currentScale === 1 ? 2 : 1; // toggle
        expandingBubbles.current.set(clickedBubble.id, {
          body: clickedBubble,
          target: targetScale,
          speed: 0.1, // how fast to interpolate
        });

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

        // -- central pull --
        const deltaX = center.x - body.position.x;
        const deltaY = center.y - body.position.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const force = {
          x: (deltaX / distance) * forceMagnitude,
          y: (deltaY / distance) * forceMagnitude,
        };
        Matter.Body.applyForce(body, body.position, force);

        // -- jitter --
        const jitter = 0.00005;
        Matter.Body.applyForce(body, body.position, {
          x: (Math.random() - 0.5) * jitter,
          y: (Math.random() - 0.5) * jitter,
        });

        // -- smooth scale animation --
        const expandData = expandingBubbles.current.get(body.id);
        if (expandData) {
          const { target, speed } = expandData;
          const current = body.plugin.scaleFactor || 1;

          if (!body.plugin.textOpacity) {
            body.plugin.textOpacity = 1;
          }

          const fadeSpeed = 1 / 10;
          if (target === 2) {
            body.plugin.questionOpacity = Math.max(0, (body.plugin.questionOpacity ?? 1) - fadeSpeed);
            const willBeVisible = body.plugin.showFullTextAt && Date.now() >= body.plugin.showFullTextAt;

            // Start fading in answer right before it becomes fully "visible"
            if (willBeVisible || body.plugin.fullTextVisible) {
              body.plugin.answerOpacity = Math.min(1, (body.plugin.answerOpacity ?? 0) + fadeSpeed);
            }
          } else {
            // Collapsing: fade in question, fade out answer
            body.plugin.questionOpacity = Math.min(1, (body.plugin.questionOpacity ?? 0) + fadeSpeed);
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
          width: "100vw",
          height: "100vh",
          margin: "auto",
        }}
      />
    </div>
  );
};

export default AdamReedView;
