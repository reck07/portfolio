import { useRef, useEffect } from 'react';

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    const mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 100) * (canvas.width / 100)
    };

    let isRightMouseDown = false;

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseDown = (event) => {
      if (event.button === 2) { // Right-click
        isRightMouseDown = true;
      }
    };
    const handleMouseUp = (event) => {
      if (event.button === 2) { // Right-click
        isRightMouseDown = false;
      }
    };
    const handleContextMenu = (event) => event.preventDefault();
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('contextmenu', handleContextMenu);

    const particleColor = 'rgba(56, 189, 248, 0.24)';

    const createParticle = (x, y, directionX, directionY, size) => ({
      x,
      y,
      directionX,
      directionY,
      size,
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = particleColor;
        ctx.fill();
      },
      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 3;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 3;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 3;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 3;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      },
    });

    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 12000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * .4) - .2;
        let directionY = (Math.random() * .4) - .2;
        particlesArray.push(createParticle(x, y, directionX, directionY, size));
      }
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          
          if (distance < (canvas.width / 9) * (canvas.height / 9)) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacityValue * 0.14})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }

        // Connect particles to cursor on right-click hold
        if (isRightMouseDown && mouse.x && mouse.y) {
          for (let i = 0; i < particlesArray.length; i++) {
            let distance = ((mouse.x - particlesArray[i].x) * (mouse.x - particlesArray[i].x))
              + ((mouse.y - particlesArray[i].y) * (mouse.y - particlesArray[i].y));
            
            if (distance < (canvas.width / 8) * (canvas.height / 8)) {
              opacityValue = 1 - (distance / 20000);
              ctx.strokeStyle = `rgba(250, 204, 21, ${opacityValue * 0.35})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(mouse.x, mouse.y);
              ctx.lineTo(particlesArray[i].x, particlesArray[i].y);
              ctx.stroke();
            }
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      mouse.radius = (canvas.height / 100) * (canvas.width / 100);
      init();
    };
    window.addEventListener('resize', handleResize);

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}
export default ParticleBackground;
