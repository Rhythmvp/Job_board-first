
// your-ai-chat-script.js

// Function to initialize the AI live chat
  

const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "bot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "BOT";
var PERSON_NAME = "User 4522";
// Define a map of triggers and responses
const conversation = {
  // Greetings
  "hi|hey|hello|good morning|good afternoon": [
    "Hello!",
    "Hi there!",
    "Hey!",
    "Good day!",
  ],
  "how are you|how is life|how are things": [
    "I'm just a bot, but thanks for asking!",
    "Life is good in the digital realm.",
    "I'm functioning well. How about you?",
  ],

  // Personal information
  "your name please|your name|may I know your name|what is your name|what call yourself": [
    "I'm called BOT. How can I assist you?",
  ],
"elvish bhai":["Ke aage koi bol sakta hai kyaaa ???? elvishhh bhaiiiii "],
  // Love declaration
  "i love you": [
    "Aw, thanks! I love chatting with you too.",
    "You're too kind! I'm here to help.",
  ],

  // General mood
  "happy|good|fun|wonderful|fantastic|cool": ["I'm glad to hear that!"],
  "bad|bored|tired": ["I hope your day gets better!"],
  "haha|ha|lol|hehe|funny|joke": ["Glad I could make you laugh!"],

  // Default response
  "default": ["I'm not sure how to respond to that.", "Can you rephrase that?"],
};

msgerForm.addEventListener("submit", event => {
  event.preventDefault();
  const msgText = msgerInput.value.trim();
  if (!msgText) return;
  msgerInput.value = "";

  addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
  respondToUser(msgText);
});

function respondToUser(input) {
  const response = getResponse(input);
  addChat(BOT_NAME, BOT_IMG, "left", response);
}

function getResponse(input) {
  input = input.toLowerCase();
  for (const key in conversation) {
    const regex = new RegExp(key, "i");
    if (regex.test(input)) {
      const responses = conversation[key];
      return responses[random(0, responses.length)];
    }
  }
  return getResponse("default");
}
// Add a typing indicator
function showTyping() {
  const typingIndicator = document.createElement("div");
  typingIndicator.className = "msg left-msg";
  typingIndicator.innerHTML = `
    <div class="msg-img" style="background-image: url(${BOT_IMG})"></div>
    <div class="msg-bubble">
      <div class="msg-info">
        <div class="msg-info-name">${BOT_NAME}</div>
        <div class="msg-info-time">${formatDate(new Date())}</div>
      </div>
      <div class="msg-text">Typing...</div>
    </div>
  `;
  msgerChat.appendChild(typingIndicator);
  msgerChat.scrollTop = msgerChat.scrollHeight;
}

// Use showTyping before the bot responds
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")  
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  showTyping(); // Show typing indicator
  if (compare(prompts, replies, text)) {
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else if (text.match(/(robot|bot|robo)/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }
  const delay = input.split(" ").length * 100;
  setTimeout(() => {
    // Remove typing indicator and add the bot's response
    msgerChat.removeChild(msgerChat.lastChild); // Remove typing indicator
    addChat(BOT_NAME, BOT_IMG, "left", product);
    msgerChat.scrollTop = msgerChat.scrollHeight;
  }, delay);
}

const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you", "elvish bhai"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],["kya rate hai"]
];

// ... (rest of your code)


const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "My team made me offc ", 
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["Ke aage koi bol sakta hai kyaaa ???? elvishhh bhaiiiii "],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],["6000 "]
];
const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]
msgerForm.addEventListener("submit", event => {
  event.preventDefault();
  const msgText = msgerInput.value;
  if (!msgText) return;
  msgerInput.value = "";
  addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
  output(msgText);
  msgerChat.scrollTop = msgerChat.scrollHeight;
});

const robot = ["How do you do, fellow human", "I am not a bot"];
msgerForm.addEventListener("submit", event => {
  event.preventDefault();
  const msgText = msgerInput.value;
  if (!msgText) return;
  msgerInput.value = "";
  addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
  output(msgText);msgerChat.scrollTop = msgerChat.scrollHeight;
});
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")  
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  if (compare(prompts, replies, text)) {
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else if (text.match(/(robot|bot|robo)/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }
  const delay = input.split(" ").length * 100;
  setTimeout(() => {
    addChat(BOT_NAME, BOT_IMG, "left", product);
    msgerChat.scrollTop = msgerChat.scrollHeight;

  }, delay);
}
function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}
function addChat(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop = msgerChat.scrollHeight;
}
function get(selector, root = document) {
  return root.querySelector(selector);
}
function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


  // Add your AI live chat initialization code here
  // For example, opening a chat window or connecting to a chat service
  console.log('AI live chat initialized.');


// Event listener for the button click
document.getElementById('ai-chat-button').addEventListener('click', function () {
  // Call the function to initialize AI live chat when the button is clicked
  initAISupport();
});

// your-ai-chat-script.js
function toggleAiPopup() {
  var aiPopup = document.getElementById('aiPopup');
  aiPopup.style.display = (aiPopup.style.display === 'block') ? 'none' : 'block';
}
document.getElementById('ai-chat-button').addEventListener('click', function () {
  // Redirect to bot.html
  window.location.href = 'bot.html';
});
// your-ai-chat-script.js

function toggleAiPopup() {
  var aiPopup = document.getElementById('aiPopup');
  aiPopup.style.display = (aiPopup.style.display === 'block') ? 'none' : 'block';

  // Scroll to the bottom of the chat container when showing the popup
  if (aiPopup.style.display === 'block') {
      scrollToBottom();
  }
}

// Function to scroll to the bottom of the chat container
function scrollToBottom() {
  var chatContainer = document.getElementById('chat-container');
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to handle adding a new message to the chat container
function addMessageToChat(message) {
  var chatContainer = document.getElementById('chat-container');
  var messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatContainer.appendChild(messageElement);

  // Scroll to the bottom after adding a new message
  scrollToBottom();
}

// Example usage of addMessageToChat function
addMessageToChat('Hello, how can I help you?');
