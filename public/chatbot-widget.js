// BudulTech AI Chatbot Widget
// Add this to your website: <script src="https://budultech.com/chatbot-widget.js" data-client-id="YOUR_CLIENT_ID"></script>

(function() {
  const script = document.currentScript;
  const clientId = script.getAttribute('data-client-id');
  const baseUrl = script.src.replace('/chatbot-widget.js', '');
  
  if (!clientId) {
    console.error('BudulTech Chatbot: Missing data-client-id attribute');
    return;
  }

  // Default config
  let config = {
    name: 'AI Assistant',
    greeting: 'Hi! How can I help you today?',
    color: '#3B82F6',
  };

  // Fetch client config
  fetch(`${baseUrl}/api/chatbot/config?clientId=${clientId}`)
    .then(res => res.json())
    .then(data => {
      if (data.name) config.name = data.name;
      if (data.greeting) config.greeting = data.greeting;
      if (data.color) config.color = data.color;
      initWidget();
    })
    .catch(() => initWidget());

  function initWidget() {
    // Styles
    const styles = document.createElement('style');
    styles.textContent = `
      .bt-widget-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: ${config.color};
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s;
      }
      .bt-widget-btn:hover { transform: scale(1.1); }
      .bt-widget-btn svg { width: 28px; height: 28px; fill: white; }
      
      .bt-widget-container {
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 380px;
        max-width: calc(100vw - 40px);
        height: 500px;
        max-height: calc(100vh - 120px);
        background: white;
        border-radius: 16px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        z-index: 99999;
        display: none;
        flex-direction: column;
        overflow: hidden;
      }
      .bt-widget-container.open { display: flex; }
      
      .bt-widget-header {
        background: ${config.color};
        color: white;
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .bt-widget-avatar {
        width: 40px;
        height: 40px;
        background: rgba(255,255,255,0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bt-widget-name { font-weight: 600; }
      .bt-widget-status { font-size: 12px; opacity: 0.8; }
      .bt-widget-close {
        margin-left: auto;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 4px;
      }
      
      .bt-widget-messages {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      
      .bt-message {
        max-width: 85%;
        padding: 12px 16px;
        border-radius: 16px;
        font-size: 14px;
        line-height: 1.4;
      }
      .bt-message.bot {
        background: #f1f1f1;
        align-self: flex-start;
        border-bottom-left-radius: 4px;
      }
      .bt-message.user {
        background: ${config.color};
        color: white;
        align-self: flex-end;
        border-bottom-right-radius: 4px;
      }
      .bt-message.typing {
        display: flex;
        gap: 4px;
        padding: 16px;
      }
      .bt-typing-dot {
        width: 8px;
        height: 8px;
        background: #999;
        border-radius: 50%;
        animation: bt-bounce 1.4s infinite ease-in-out both;
      }
      .bt-typing-dot:nth-child(1) { animation-delay: -0.32s; }
      .bt-typing-dot:nth-child(2) { animation-delay: -0.16s; }
      @keyframes bt-bounce {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1); }
      }
      
      .bt-widget-input {
        border-top: 1px solid #eee;
        padding: 12px;
        display: flex;
        gap: 8px;
      }
      .bt-widget-input input {
        flex: 1;
        border: 1px solid #ddd;
        border-radius: 24px;
        padding: 10px 16px;
        font-size: 14px;
        outline: none;
      }
      .bt-widget-input input:focus { border-color: ${config.color}; }
      .bt-widget-input button {
        background: ${config.color};
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bt-widget-input button svg { width: 18px; height: 18px; fill: white; }
      
      .bt-lead-form {
        padding: 16px;
        background: #f9f9f9;
        border-top: 1px solid #eee;
      }
      .bt-lead-form input {
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 10px 12px;
        margin-bottom: 8px;
        font-size: 14px;
      }
      .bt-lead-form button {
        width: 100%;
        background: ${config.color};
        color: white;
        border: none;
        border-radius: 8px;
        padding: 12px;
        font-weight: 600;
        cursor: pointer;
      }
    `;
    document.head.appendChild(styles);

    // Widget HTML
    const widget = document.createElement('div');
    widget.innerHTML = `
      <button class="bt-widget-btn" id="bt-toggle">
        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
      </button>
      <div class="bt-widget-container" id="bt-container">
        <div class="bt-widget-header">
          <div class="bt-widget-avatar">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
          </div>
          <div>
            <div class="bt-widget-name">${config.name}</div>
            <div class="bt-widget-status">Online now</div>
          </div>
          <button class="bt-widget-close" id="bt-close">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </div>
        <div class="bt-widget-messages" id="bt-messages">
          <div class="bt-message bot">${config.greeting}</div>
        </div>
        <div class="bt-widget-input">
          <input type="text" id="bt-input" placeholder="Type a message..." />
          <button id="bt-send">
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(widget);

    // State
    let isOpen = false;
    let messages = [];
    let leadCaptured = false;
    const sessionId = 'bt-' + Math.random().toString(36).substr(2, 9);

    // Elements
    const toggle = document.getElementById('bt-toggle');
    const container = document.getElementById('bt-container');
    const closeBtn = document.getElementById('bt-close');
    const messagesDiv = document.getElementById('bt-messages');
    const input = document.getElementById('bt-input');
    const sendBtn = document.getElementById('bt-send');

    // Toggle widget
    toggle.addEventListener('click', () => {
      isOpen = !isOpen;
      container.classList.toggle('open', isOpen);
    });
    closeBtn.addEventListener('click', () => {
      isOpen = false;
      container.classList.remove('open');
    });

    // Send message
    async function sendMessage() {
      const text = input.value.trim();
      if (!text) return;

      // Add user message
      addMessage(text, 'user');
      input.value = '';

      // Show typing
      const typingDiv = document.createElement('div');
      typingDiv.className = 'bt-message bot typing';
      typingDiv.innerHTML = '<div class="bt-typing-dot"></div><div class="bt-typing-dot"></div><div class="bt-typing-dot"></div>';
      messagesDiv.appendChild(typingDiv);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;

      try {
        const res = await fetch(`${baseUrl}/api/chatbot/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            clientId,
            sessionId,
            message: text,
            history: messages.slice(-10),
          }),
        });
        const data = await res.json();
        
        typingDiv.remove();
        addMessage(data.response || "I'm sorry, I couldn't process that. Please try again.", 'bot');

        // Check if we should capture lead
        if (!leadCaptured && messages.length >= 4) {
          showLeadForm();
        }
      } catch (error) {
        typingDiv.remove();
        addMessage("I'm having trouble connecting. Please try again.", 'bot');
      }
    }

    function addMessage(text, role) {
      messages.push({ role, content: text });
      const div = document.createElement('div');
      div.className = `bt-message ${role}`;
      div.textContent = text;
      messagesDiv.appendChild(div);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    function showLeadForm() {
      leadCaptured = true;
      const formDiv = document.createElement('div');
      formDiv.className = 'bt-lead-form';
      formDiv.innerHTML = `
        <p style="margin:0 0 12px;font-size:14px;"><strong>Want us to follow up?</strong> Leave your info:</p>
        <input type="text" id="bt-lead-name" placeholder="Your name" />
        <input type="email" id="bt-lead-email" placeholder="Email" />
        <input type="tel" id="bt-lead-phone" placeholder="Phone (optional)" />
        <button id="bt-lead-submit">Send</button>
      `;
      messagesDiv.parentNode.insertBefore(formDiv, document.querySelector('.bt-widget-input'));

      document.getElementById('bt-lead-submit').addEventListener('click', async () => {
        const name = document.getElementById('bt-lead-name').value;
        const email = document.getElementById('bt-lead-email').value;
        const phone = document.getElementById('bt-lead-phone').value;

        if (!email) {
          alert('Please enter your email');
          return;
        }

        try {
          await fetch(`${baseUrl}/api/leads`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              clientId,
              name,
              email,
              phone,
              message: messages.map(m => `${m.role}: ${m.content}`).join('\\n'),
              source: 'chatbot',
            }),
          });
          formDiv.innerHTML = '<p style="text-align:center;color:green;margin:16px 0;">✓ Thanks! We\'ll be in touch soon.</p>';
          setTimeout(() => formDiv.remove(), 3000);
        } catch (error) {
          alert('Error submitting. Please try again.');
        }
      });
    }

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  }
})();
