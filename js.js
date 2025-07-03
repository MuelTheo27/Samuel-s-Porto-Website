document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      burger.classList.toggle('toggle');
    });
  });
  
const greetings = [
    " Hello,",
    " Halo,",
    " 안녕,",
    " こんにちは,"
];

let currentIndex = 0; 
let charIndex = 0; 
const changingWordElement = document.getElementById('changing-word');
const typingSpeed = 100; 
const deleteSpeed = 50; 
const pauseDuration = 1500; 

function typeWriterEffect() {
    const currentGreeting = greetings[currentIndex];
    if (charIndex < currentGreeting.length) {
        changingWordElement.textContent = currentGreeting.substring(0, charIndex + 1); 
        setTimeout(typeWriterEffect, typingSpeed);
    } else {
        setTimeout(() => {
            deleteWord();
        }, pauseDuration); 
    }
}

function deleteWord() {
    const currentGreeting = greetings[currentIndex];
    if (charIndex > 0) {
        changingWordElement.textContent = currentGreeting.substring(0, charIndex - 1); 
        charIndex--;
        setTimeout(deleteWord, deleteSpeed);
    } else {
        currentIndex = (currentIndex + 1) % greetings.length; 
        charIndex = 0;
        setTimeout(typeWriterEffect, typingSpeed); 
    }
}

typeWriterEffect();

document.getElementById('view_cv').addEventListener('click', function() {
    window.open('Samuel-Cv.pdf', '_blank'); 
});

document.getElementById('view_porto').addEventListener('click',function(){
    window.open('Samuel-Porto.pdf','_blank');
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href'); 
            const targetSection = document.querySelector(targetId); 

            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

