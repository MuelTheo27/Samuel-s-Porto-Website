document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
  
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      burger.classList.toggle('toggle');
    });
  });
  
// JavaScript for typewriter effect
const greetings = [
    " Hello,",
    " Halo,",
    " 안녕,",
    " こんにちは,"
];

let currentIndex = 0; // Current greeting index
let charIndex = 0; // Current character index
const changingWordElement = document.getElementById('changing-word');
const typingSpeed = 100; // Speed of typing in milliseconds
const deleteSpeed = 50; // Speed of deleting in milliseconds
const pauseDuration = 1500; // Pause after a full phrase

function typeWriterEffect() {
    const currentGreeting = greetings[currentIndex];
    if (charIndex < currentGreeting.length) {
        changingWordElement.textContent = currentGreeting.substring(0, charIndex + 1); // Add next character
        charIndex++;
        setTimeout(typeWriterEffect, typingSpeed);
    } else {
        setTimeout(() => {
            deleteWord();
        }, pauseDuration); // Pause before deleting
    }
}

function deleteWord() {
    const currentGreeting = greetings[currentIndex];
    if (charIndex > 0) {
        changingWordElement.textContent = currentGreeting.substring(0, charIndex - 1); // Remove last character
        charIndex--;
        setTimeout(deleteWord, deleteSpeed);
    } else {
        currentIndex = (currentIndex + 1) % greetings.length; // Cycle through greetings
        charIndex = 0; // Reset charIndex for the next greeting
        setTimeout(typeWriterEffect, typingSpeed); // Start typing next greeting
    }
}

// Start the typewriter effect with the first greeting
typeWriterEffect();

document.getElementById('view_cv').addEventListener('click', function() {
    window.open('Samuel-PDF.pdf', '_blank'); // Open the CV in a new tab
});

document.getElementById('view_porto').addEventListener('click',function(){
    window.open('Samuel-Porto.pdf','_blank');
});

// Smooth Scroll Functionality
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Select the target section

            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

