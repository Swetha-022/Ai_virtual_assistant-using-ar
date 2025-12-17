// Wait until the page loads
window.addEventListener('load', () => {
  const avatar = document.getElementById('avatar');

  // Rotate avatar slowly
  let angle = 0;
  function rotateAvatar() {
    angle += 0.2;
    avatar.setAttribute('rotation', `0 ${angle} 0`);
    requestAnimationFrame(rotateAvatar);
  }
  rotateAvatar();
  console.log("AI AR Virtual Assistant Loaded!");

  // Optional: AI chat overlay
  // You can expand this section to integrate actual AI APIs
  const chatContainer = document.createElement('div');
  chatContainer.id = 'chat-container';
  chatContainer.innerHTML = "Hello! I am your AI Assistant.";
  document.body.appendChild(chatContainer);
  chatContainer.style.display = 'block';
});
