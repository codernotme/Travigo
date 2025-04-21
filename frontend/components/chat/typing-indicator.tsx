import React from 'react';
import { Card } from '@heroui/react';

export function TypingIndicator() {
  return (
    <Card className="inline-block p-3 bg-content2">
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-default-400 animate-bounce" />
        <div className="w-2 h-2 rounded-full bg-default-400 animate-bounce [animation-delay:0.2s]" />
        <div className="w-2 h-2 rounded-full bg-default-400 animate-bounce [animation-delay:0.4s]" />
      </div>
    </Card>
  );
}