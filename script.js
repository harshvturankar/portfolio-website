// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Greeting Based on Time of Day
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hours = now.getHours();

    let greetingText = 'Hi, Myself Harsh';

    if (hours < 12) {
        greetingText = 'Good Morning, Myself Harsh';
    } else if (hours < 18) {
        greetingText = 'Good Afternoon, Myself Harsh';
    } else {
        greetingText = 'Good Evening, Myself Harsh';
    }

    greetingElement.innerHTML = greetingText;
}

setGreeting();
