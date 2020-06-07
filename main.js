const slajder = [{
        img: "img/1.jpg",
        text: 'Slajd 1'
    },
    {
        img: "img/2.jpg",
        text: 'Slajd 2'
    },
    {
        img: "img/3.jpg",
        text: 'Slajd 3'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const time = 3000;

const dots = [...document.querySelectorAll('.dots span')];

let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot =>
        dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}


const changeSlajd = () => {
    active++;
    if (active === slajder.length) {
        active = 0;
    }
    image.src = slajder[active].img;
    h1.textContent = slajder[active].text;
    changeDot()

}

setInterval(changeSlajd, time)