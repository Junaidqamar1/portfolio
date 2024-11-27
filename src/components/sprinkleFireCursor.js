export function sprinkleFireCursor({ container = document.body } = {}) {
    const onMouseMove = (event) => {
      if (!container.contains(event.target)) return;
  
      const spark = document.createElement('div');
      spark.className = 'spark';
  
     
      const size = Math.random() * 8 + 4; 
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      spark.style.left = `${event.clientX}px`;
      spark.style.top = `${event.clientY}px`;
  
      
      const colors = [
        'rgba(255, 69, 0, 1)', // Fiery red
        'rgba(255, 140, 0, 1)', // Dark orange
        'rgba(255, 165, 0, 1)', // Amber orange
        'rgba(255, 99, 71, 1)', // Tomato red
        'rgba(255, 215, 0, 1)', // Golden yellow
      ];
      spark.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]} 0%, transparent 70%)`;
  
      container.appendChild(spark);
  
      
      setTimeout(() => container.removeChild(spark), 700);
    };
  
    container.addEventListener('mousemove', onMouseMove);
  
    return {
      destroy() {
        container.removeEventListener('mousemove', onMouseMove);
      },
    };
  }
  