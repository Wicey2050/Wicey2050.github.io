const funfact = document.getElementById('funfact');
const randomfacts = [
    "Spotify has over 250 million monthly active users.",
    "In fact, it is estimated that about 25% of the tracks haven’t been played ever.",
    "At the moment, there are over 500 million installations of this app on the Android platform.",
    "Spotify actually supports almost all the popular voice assistants.",
    "The artist with Most Monthly Listeners: Ed Sheeran (64.93 million/month)",
    "The artist with Most Follower: Ed Sheeran (57.90 million)",
    "The artist with Most Streams of the 2010s Decade: Drake (28 billion)"
];
const randomfact = randomfacts[Math.floor(Math.random() * randomfacts.length)];
funfact.innerHTML = randomfact;