import { useState, useEffect } from "react";
import "../Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  const chatbotScript = {
    "hi": "Hello! How can I assist you?",
    "hello": "Hi! How can I help today?",
    "how are you": "I'm good, thanks for asking! 😊",
    "what is your name": "I’m ChatBot, here to assist you!",
    "home": "Welcome! How can I help you today with our services?",
    "about": "Quick Dev Web, based in Frazer Town, Bangalore. We offer web solutions.",
    "services": "We provide web dev, UI/UX design, and mobile apps. Want more info?",
    "contact location": "We’re located in Frazer Town, Bangalore.",
    "bye": "Goodbye! Have a great day! 👋",
    "default": "I'm currently scripted to answer only a few questions. You can ask me about:\n1. Home\n2. About\n3. Services\n4. Contact Location.\nFeel free to ask any of these!"
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setShowPrompt(false);
  };

  const handlePromptClick = () => {
    setIsOpen(true);
    setShowPrompt(false);
  };

  const handleMouseOut = (e) => {
    const chatbotElement = document.querySelector('.chatbot-container');
    if (chatbotElement && !chatbotElement.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const botResponse = chatbotScript[input.toLowerCase()] || chatbotScript["default"];
      const botMessage = { sender: "bot", text: botResponse };
      setMessages([...messages, userMessage, botMessage]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      <div className="robot-head">
        <div className="robot-eyes">
          <div className="robot-eye"></div>
          <div className="robot-eye"></div>
        </div>
        <button className="toggle-btn" onClick={toggleChatbot}>🤖</button>
      </div>

      {showPrompt && (
        <div className="chatbot-prompt" onClick={handlePromptClick}>
          <p>Click here or the robot to ask any query about the website!</p>
        </div>
      )}

      {isOpen && (
        <div className="chatbot">
          <div className="chatbox">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="bot-msg">Typing...</div>}
          </div>

          <div className="input-area">
            <input
              type="text"
              placeholder="Ask me something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
