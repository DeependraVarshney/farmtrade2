import React from "react";

const Chatbot = () => {
  return (
    <div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.embeddedChatbotConfig = {
              chatbotId: "Gzf8V98uc6Ny23t0tOcfB",
              domain: "www.chatbase.co"
            }
          `,
        }}
      />
      <script
        src="https://www.chatbase.co/embed.min.js"
        chatbotId="Gzf8V98uc6Ny23t0tOcfB"
        domain="www.chatbase.co"
        defer
      />
    </div>
  );
};

export default Chatbot;