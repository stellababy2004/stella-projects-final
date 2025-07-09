// Унифициран анимиран фон за всички страници
function createNetworkGrid() {
    const grid = document.getElementById('animatedGrid');
    if (!grid) return;
    
    const nodes = [];
    
    // Намалено количество възли за по-чист вид
    for (let i = 0; i < 20; i++) {
        const node = document.createElement('div');
        node.className = 'network-node';
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        node.style.left = x + 'px';
        node.style.top = y + 'px';
        node.style.animationDelay = Math.random() * 4 + 's';
        
        grid.appendChild(node);
        nodes.push({ element: node, x: x, y: y });
    }
    
    // По-малко връзки за по-чист вид
    nodes.forEach((node1, index1) => {
        nodes.forEach((node2, index2) => {
            if (index1 !== index2) {
                const distance = Math.sqrt(
                    Math.pow(node1.x - node2.x, 2) + 
                    Math.pow(node1.y - node2.y, 2)
                );
                
                // По-строги условия за връзки
                if (distance < 150 && Math.random() > 0.8) {
                    const connection = document.createElement('div');
                    connection.className = 'network-connection';
                    
                    const angle = Math.atan2(node2.y - node1.y, node2.x - node1.x) * 180 / Math.PI;
                    
                    connection.style.left = node1.x + 'px';
                    connection.style.top = node1.y + 'px';
                    connection.style.width = distance + 'px';
                    connection.style.transform = `rotate(${angle}deg)`;
                    connection.style.animationDelay = Math.random() * 10 + 's';
                    
                    grid.appendChild(connection);
                }
            }
        });
    });
    
    // Намалено количество плаващи линии
    for (let i = 0; i < 8; i++) {
        const floatingLine = document.createElement('div');
        floatingLine.className = 'floating-line';
        
        floatingLine.style.left = Math.random() * window.innerWidth + 'px';
        floatingLine.style.top = Math.random() * window.innerHeight + 'px';
        floatingLine.style.width = (30 + Math.random() * 100) + 'px';
        floatingLine.style.transform = `rotate(${Math.random() * 360}deg)`;
        floatingLine.style.animationDelay = Math.random() * 15 + 's';
        
        grid.appendChild(floatingLine);
    }
}

// Стартиране на анимацията при зареждане
document.addEventListener('DOMContentLoaded', function() {
    createNetworkGrid();
    
    // По-дълъг интервал за refresh
    setInterval(function() {
        const grid = document.getElementById('animatedGrid');
        if (grid) {
            grid.innerHTML = '';
            createNetworkGrid();
        }
    }, 30000);
});

// Пренасочване при resize на прозореца
window.addEventListener('resize', function() {
    const grid = document.getElementById('animatedGrid');
    if (grid) {
        grid.innerHTML = '';
        createNetworkGrid();
    }
});