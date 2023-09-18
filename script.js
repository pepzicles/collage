const dotContainer = document.querySelector('.dot.container');
const dotContainer2 = document.querySelector('.dot.container2');
const dotContainer3 = document.querySelector('.dot.container3');
const dotContainer4 = document.querySelector('.dot.container4');
const dotContainer5 = document.querySelector('.dot.container5');
const dotContainer6 = document.querySelector('.dot.container6');
const dotContainer7 = document.querySelector('.dot.container7');

const hoverImage = document.querySelector('.hover-image');
const hoverImage2 = document.querySelector('.hover-image2');
const hoverText1 = document.querySelector('.hoverText1')
const hoverText2 = document.querySelector('.hoverText2')
const hoverText3 = document.querySelector('.hoverText3')
const hoverText4 = document.querySelector('.hoverText4')
const hoverText5 = document.querySelector('.hoverText5')
const hoverText6 = document.querySelector('.hoverText6')
const hoverText7 = document.querySelector('.hoverText7')

dotContainer.addEventListener('mouseover', () => {
    hoverImage.style.display = 'block';
    hoverText1.style.display = "block";
});

dotContainer.addEventListener('mouseout', () => {
    hoverImage.style.display = 'none';
    hoverImage2.style.display = 'none';
    hoverText1.style.display = 'none';
});


dotContainer2.addEventListener('mouseover', () => {
    hoverImage.style.display = 'block';
    hoverText2.style.display = "block";
});

dotContainer2.addEventListener('mouseout', () => {
    hoverImage.style.display = 'none';
    hoverText2.style.display = 'none';
});


dotContainer3.addEventListener('mouseover', () => {
    hoverImage.style.display = 'block';
    hoverText3.style.display = "block";
});

dotContainer3.addEventListener('mouseout', () => {
    hoverImage.style.display = 'none';
    hoverText3.style.display = 'none';
});

dotContainer4.addEventListener('mouseover', () => {
    hoverImage.style.display = 'none';
    hoverImage2.style.display = 'block';
    hoverText4.style.display = "block";
});

dotContainer4.addEventListener('mouseout', () => {
    hoverImage.style.display = 'none';
    hoverImage2.style.display = 'none';
    hoverText4.style.display = 'none';
});



dotContainer5.addEventListener('mouseover', () => {
    hoverImage.style.display = 'block';
    hoverText5.style.display = "block";
});

dotContainer5.addEventListener('mouseout', () => {
    hoverImage.style.display = 'none';
    hoverText5.style.display = 'none';
});


dotContainer6.addEventListener('mouseover', () => {
    hoverImage.style.display = 'none';
    hoverImage2.style.display = 'block';
    hoverText6.style.display = "block";
});

dotContainer6.addEventListener('mouseout', () => {
    hoverImage.style.display = 'none';
    hoverImage2.style.display = 'none';
    hoverText6.style.display = 'none';
});


dotContainer7.addEventListener('mouseover', () => {
    hoverImage.style.display = 'none';
    hoverText7.style.display = "block";
});

dotContainer7.addEventListener('mouseout', () => {
    hoverImage.style.display = 'none';
    hoverText7.style.display = 'none';
});



const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkboxes)
checkboxes()

function checkboxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
    })
}





