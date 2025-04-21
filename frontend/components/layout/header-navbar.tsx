import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import { Icon } from '@iconify/react';

interface HeaderNavbarProps {
  user?: {
    name: string;
    avatar: string;
  };
  onLoginClick: () => void;
}

export function HeaderNavbar({ user, onLoginClick }: HeaderNavbarProps) {
  return (
    <Navbar maxWidth="xl" isBordered>
      <NavbarBrand>
        <Icon icon="lucide:plane-takeoff" className="text-2xl text-primary" />
        <p className="font-bold text-inherit ml-2">Travigo</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button
            variant="light"
            startContent={<Icon icon="lucide:search" />}
          >
            Find Tickets
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            variant="light"
            startContent={<Icon icon="lucide:calendar" />}
          >
            My Bookings
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            variant="light"
            startContent={<Icon icon="lucide:help-circle" />}
          >
            Help
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name={user.name}
                size="sm"
                src={user.avatar}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" startContent={<Icon icon="lucide:user" />}>
                My Profile
              </DropdownItem>
              <DropdownItem key="preferences" startContent={<Icon icon="lucide:settings" />}>
                Preferences
              </DropdownItem>
              <DropdownItem key="help" startContent={<Icon icon="lucide:help-circle" />}>
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                startContent={<Icon icon="lucide:log-out" />}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Button color="primary" onPress={onLoginClick}>
            Sign In
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  );
}