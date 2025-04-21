import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Checkbox,
} from '@heroui/react';
import { Icon } from '@iconify/react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: (data: RegisterData) => void;
  onLoginClick: () => void;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export function RegisterModal({ isOpen, onClose, onRegister, onLoginClick }: RegisterModalProps) {
  const [formData, setFormData] = React.useState<RegisterData>({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Create Account</ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  startContent={<Icon icon="lucide:user" className="text-default-400" />}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  startContent={<Icon icon="lucide:mail" className="text-default-400" />}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  startContent={<Icon icon="lucide:lock" className="text-default-400" />}
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  startContent={<Icon icon="lucide:phone" className="text-default-400" />}
                />
                <Checkbox defaultSelected>
                  I agree to the Terms of Service and Privacy Policy
                </Checkbox>
              </form>
            </ModalBody>
            <ModalFooter className="flex flex-col gap-2">
              <Button color="primary" className="w-full" onPress={() => onRegister(formData)}>
                Create Account
              </Button>
              <p className="text-center text-small">
                Already have an account?{' '}
                <Button variant="light" className="p-0" onPress={onLoginClick}>
                  Sign in
                </Button>
              </p>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}