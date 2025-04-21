import { addToast } from '@heroui/react';

export const showToast = {
  success: (message: string) => {
    addToast({
      title: "Success",
      description: message,
      color: "success",
    });
  },
  error: (message: string) => {
    addToast({
      title: "Error",
      description: message,
      color: "danger",
    });
  },
  info: (message: string) => {
    addToast({
      title: "Info",
      description: message,
      color: "primary",
    });
  },
  warning: (message: string) => {
    addToast({
      title: "Warning",
      description: message,
      color: "warning",
    });
  },
};
