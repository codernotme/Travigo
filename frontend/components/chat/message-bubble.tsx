import React from 'react';
import { Card } from '@heroui/react';
import type { Message } from './chat-window';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isBot = message.type === 'bot';

  // Format timestamp as HH:mm:ss (24-hour, zero-padded)
  function formatTime(date: Date) {
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    const s = date.getSeconds().toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  }

  // Ensure timestamp is always a Date object
  const timestamp = new Date(message.timestamp);

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <Card
        className={`max-w-[80%] p-3 ${
          isBot
            ? 'bg-content2 text-content2-foreground'
            : 'bg-primary text-primary-foreground'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <span className="text-xs opacity-70 mt-1 block">
          {formatTime(timestamp)}
        </span>
      </Card>
    </div>
  );
}