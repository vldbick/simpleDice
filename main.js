const sideDice = [[0, 0], [0, 180], [0, 90], [0, -90], [-90, 180], [90, 180]];


window.addEventListener('load', () => {
    const dice = document.querySelector('.dice');
    const btn = document.querySelector('.start');

    btn.addEventListener('click', (ev) => {
        ev.defaultPrevented;
        const r = randomizer();
        let arrXY = sideDice[r];
        setFinalRotation(arrXY);
        setStartPos(dice, arrXY);

        dice.classList.remove('animate');
        void dice.offsetWidth;
        dice.classList.add('animate');

        setTimeout(() => {
            alert(`Вам випало число - '${r+1}' `)
        }, 5100)
    })
})


function randomizer() {
    return Math.floor(Math.random() * 6);
}

function setFinalRotation(xyDegrees) {
    document.documentElement.style.setProperty('--final-rotate-x', xyDegrees[0] + 'deg');
    document.documentElement.style.setProperty('--final-rotate-y', xyDegrees[1] + 'deg');
}

function setStartPos(dice, xy) {
    dice.style.transform = `rotateX(${xy[0]}deg) rotateY(${xy[1]}deg)`;
}