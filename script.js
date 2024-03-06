  const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

   
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  
    let posX = canvas.width / 2;
    let posY = canvas.height / 2;

    ctx.moveTo(posX, posY);

  
    function draw() {
        ctx.strokeStyle = 'red'; 
        ctx.lineWidth = 2; // Line width
        const angle = Math.random() * 360;
        const length = Math.random() * 20;
        posX += length * Math.cos(angle);
        posY += length * Math.sin(angle);

        ctx.lineTo(posX, posY);
        ctx.stroke();
    }

    setInterval(draw, 100);
;