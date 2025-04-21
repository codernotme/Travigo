import React from 'react';
import { Button } from '@heroui/react';

interface QuickRepliesProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export function QuickReplies({ suggestions, onSelect }: QuickRepliesProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {suggestions.map((suggestion) => (
        <Button
          key={suggestion}
          size="sm"
          variant="flat"
          color="primary"
          onPress={() => onSelect(suggestion)}
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
}