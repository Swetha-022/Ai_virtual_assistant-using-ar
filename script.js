// TEXT TO SPEECH
function speak(text) {
  const avatar = document.querySelector("#avatar");

  avatar.setAttribute("animation__talk",
    "property: rotation; dir: alternate; dur: 400; loop: true; to: 0 15 0");

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  speechSynthesis.speak(utter);

  utter.onend = () => {
    avatar.removeAttribute("animation__talk");
  };
}

// SPEECH TO TEXT
const recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";

function startListening() {
  recognition.start();
}

recognition.onresult = (event) => {
  const text = event.results[0][0].transcript.toLowerCase();
  console.log("User:", text);

  let reply = "Sorry, I did not understand.";

  if (text.includes("hello")) reply = "Hello! Nice to meet you.";
  if (text.includes("name")) reply = "I am your AI AR virtual assistant.";
  if (text.includes("help")) reply = "I can answer simple questions.";
  if (text.includes("time")) reply = "Please check your phone time.";

  speak(reply);
};
