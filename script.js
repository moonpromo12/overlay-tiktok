
let followers = 0;
let gifter = "Nimeni";
let gifts = 0;
const chatBox = document.getElementById('chat-box');

function addChatMessage(user, message) {
    const msg = document.createElement('div');
    msg.textContent = `${user}: ${message}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Simulăm date live
setInterval(() => {
    followers += 1;
    document.getElementById('followers').textContent = `Followers: ${followers}`;

    addChatMessage("user" + Math.floor(Math.random()*100), "Salut!");
    
    gifts += 1;
    if (gifts === 10) {
        document.getElementById('top-gifter').textContent = "Top Gifter: userX 🚀";
    }
}, 2000);
