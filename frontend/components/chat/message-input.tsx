import React from 'react';
import { Input, Button } from '@heroui/react';
import { Icon } from '@iconify/react';

interface MessageInputProps {
  onSend: (message: string) => void;
}

export function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow"
        endContent={
          <Button
            isIconOnly
            size="sm"
            variant="light"
            type="button"
            className="text-default-500"
          >
            <Icon icon="lucide:mic" className="text-lg" />
          </Button>
        }
      />
      <Button
        color="primary"
        type="submit"
        isDisabled={!message.trim()}
        isIconOnly
      >
        <Icon icon="lucide:send" className="text-lg" />
      </Button>
    </form>
  );
}