// Унифициран анимиран фон с движещи се решетки
class AnimatedGrid {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.nodes = [];
        this.connections = [];
        this.mouse = { x: 0, y: 0 };
        this.animationId = null;
        
        this.config = {
            nodeCount: 50,
            maxDistance: 150,
            nodeSize: 2,
            nodeColor: 'rgba(0, 255, 238, 0.6)',
            lineColor: 'rgba(0, 255, 238, 0.2)',
            speed: 0.5,
            mouseRadius: 200
        };
        
        this.init();
    }
    
    init() {
        this.createCanvas();
        this.createNodes();
        this.bindEvents();
        this.animate();
    }
    
    createCanvas() {
        // Създай canvas елемент
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.pointerEvents = 'none';
        
        // Добави към съществуващия animated-grid div или body
        const gridContainer = document.getElementById('animatedGrid');
        if (gridContainer) {
            gridContainer.appendChild(this.canvas);
        } else {
            document.body.appendChild(this.canvas);
        }
        
        this.ctx = this.canvas.getContext('2d');
        this.resize();
    }
    
    createNodes() {
        this.nodes = [];
        for (let i = 0; i < this.config.nodeCount; i++) {
            this.nodes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * this.config.speed,
                vy: (Math.random() - 0.5) * this.config.speed,
                size: Math.random() * this.config.nodeSize + 1
            });
        }
    }
    
    updateNodes() {
        this.nodes.forEach(node => {
            // Обнови позицията
            node.x += node.vx;
            node.y += node.vy;
            
            // Граници на екрана
            if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;
            
            // Държи в границите
            node.x = Math.max(0, Math.min(this.canvas.width, node.x));
            node.y = Math.max(0, Math.min(this.canvas.height, node.y));
        });
    }
    
    drawNodes() {
        this.ctx.fillStyle = this.config.nodeColor;
        this.nodes.forEach(node => {
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }
    
    drawConnections() {
        this.ctx.strokeStyle = this.config.lineColor;
        this.ctx.lineWidth = 1;
        
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dx = this.nodes[i].x - this.nodes[j].x;
                const dy = this.nodes[i].y - this.nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.config.maxDistance) {
                    const opacity = 1 - (distance / this.config.maxDistance);
                    this.ctx.strokeStyle = `rgba(0, 255, 238, ${opacity * 0.2})`;
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
                    this.ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
    
    drawMouseConnections() {
        if (this.mouse.x === 0 && this.mouse.y === 0) return;
        
        this.nodes.forEach(node => {
            const dx = node.x - this.mouse.x;
            const dy = node.y - this.mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < this.config.mouseRadius) {
                const opacity = 1 - (distance / this.config.mouseRadius);
                this.ctx.strokeStyle = `rgba(0, 255, 238, ${opacity * 0.3})`;
                this.ctx.lineWidth = 2;
                
                this.ctx.beginPath();
                this.ctx.moveTo(node.x, node.y);
                this.ctx.lineTo(this.mouse.x, this.mouse.y);
                this.ctx.stroke();
            }
        });
    }
    
    render() {
        // Изчисти canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Нарисувай връзките
        this.drawConnections();
        this.drawMouseConnections();
        
        // Нарисувай възлите
        this.drawNodes();
    }
    
    animate() {
        this.updateNodes();
        this.render();
        this.animationId = requestAnimationFrame(() => this.animate());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        // Пресъздай възлите при resize
        this.createNodes();
    }
    
    bindEvents() {
        // Resize събитие
        window.addEventListener('resize', () => this.resize());
        
        // Mouse move събитие
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        // Mouse leave събитие
        window.addEventListener('mouseleave', () => {
            this.mouse.x = 0;
            this.mouse.y = 0;
        });
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}

// Инициализирай анимацията при зареждане на страницата
let animatedGrid = null;

document.addEventListener('DOMContentLoaded', () => {
    // Изчакай малко за да се заредят всички стилове
    setTimeout(() => {
        animatedGrid = new AnimatedGrid();
    }, 100);
});

// Почисти при напускане на страницата
window.addEventListener('beforeunload', () => {
    if (animatedGrid) {
        animatedGrid.destroy();
    }
});

// Експортирай за използване в други скриптове
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimatedGrid;
}