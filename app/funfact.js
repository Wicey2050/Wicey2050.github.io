const funfact = document.getElementById('funfact');
const randomfacts = [
    "I got no rizz",
    "I am fillemo",
    "I am lonely"
];
const randomfact = randomfacts[Math.floor(Math.random() * randomfacts.length)];
funfact.innerHTML = randomfact;