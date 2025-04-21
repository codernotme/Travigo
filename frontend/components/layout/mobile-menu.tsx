import React from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { icon: 'lucide:search', label: 'Find Tickets' },
    { icon: 'lucide:calendar', label: 'My Bookings' },
    { icon: 'lucide:message-circle', label: 'Chat Support' },
    { icon: 'lucide:help-circle', label: 'Help' },
    { icon: 'lucide:settings', label: 'Settings' },
  ];

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="border-b border-divider">
              <Icon icon="lucide:plane-takeoff" className="text-2xl text-primary" />
              <span className="font-bold ml-2">Travigo</span>
            </DrawerHeader>
            <DrawerBody className="p-4">
              <div className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="light"
                    className="justify-start"
                    startContent={<Icon icon={item.icon} />}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}