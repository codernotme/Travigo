import React from "react";
import { Card, ScrollShadow } from "@heroui/react";

import { MessageBubble } from "./message-bubble";
import { MessageInput } from "./message-input";
import { QuickReplies } from "./quick-replies";
import { TypingIndicator } from "./typing-indicator";

export interface Message {
  id: string;
  content: string;
  type: "user" | "bot";
  timestamp: Date;
}

export function ChatWindow() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I help you with your travel plans today?",
      type: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = React.useState(false);

  const chatRef = React.useRef<HTMLDivElement>(null);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      type: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I understand you want to travel. Where would you like to go?",
        type: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  React.useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Card className="w-full max-w-[600px] h-[600px] p-0 relative">
      <div className="flex flex-col h-full">
        <ScrollShadow ref={chatRef} className="flex-grow p-4 space-y-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isTyping && <TypingIndicator />}
        </ScrollShadow>
        <div className="p-4 border-t border-divider">
          <QuickReplies
            suggestions={["Book a flight", "Find hotels", "Train tickets"]}
            onSelect={handleSendMessage}
          />
          <MessageInput onSend={handleSendMessage} />
        </div>
      </div>
    </Card>
  );
}
