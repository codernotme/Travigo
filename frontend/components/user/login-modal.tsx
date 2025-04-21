import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Divider,
} from '@heroui/react';
import { Icon } from '@iconify/react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (credentials: { email: string; password: string }) => void;
  onRegisterClick: () => void;
}

export function LoginModal({ isOpen, onClose, onLogin, onRegisterClick }: LoginModalProps) {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Sign In</ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  value={credentials.email}
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                  startContent={<Icon icon="lucide:mail" className="text-default-400" />}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  startContent={<Icon icon="lucide:lock" className="text-default-400" />}
                />
              </form>

              <div className="flex justify-end">
                <Button variant="light" size="sm">
                  Forgot password?
                </Button>
              </div>

              <Divider className="my-4" />

              <Button
                className="w-full"
                color="default"
                variant="flat"
                startContent={<Icon icon="logos:google-icon" />}
              >
                Continue with Google
              </Button>
            </ModalBody>
            <ModalFooter className="flex flex-col gap-2">
              <Button color="primary" className="w-full" onPress={() => onLogin(credentials)}>
                Sign In
              </Button>
              <p className="text-center text-small">
                Don't have an account?{' '}
                <Button variant="light" className="p-0" onPress={onRegisterClick}>
                  Sign up
                </Button>
              </p>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}