


function createShootingStar() {
    const sky = document.querySelector('.sky');
    const star = document.createElement('div');
    star.classList.add('shooting-star');

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight / 2; // Limitando para metade superior da tela

    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;
    star.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    star.style.transform = `rotate(${Math.random() * 75 + 45}deg)`; // Rotação aleatória

    sky.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2000); // Deve ser igual ou maior que a duração da animação
}

// Criar estrelas cadentes em intervalos aleatórios
setInterval(createShootingStar, 800);