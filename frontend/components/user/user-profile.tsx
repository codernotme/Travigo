import React from 'react';
import { Card, CardBody, Avatar, Tabs, Tab, Divider } from '@heroui/react';
import { BookingHistory } from './booking-history';
import { PreferencesEditor } from './preferences-editor';

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    phone: string;
    avatar: string;
  };
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <Card className="max-w-3xl mx-auto">
      <CardBody className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Avatar
            src={user.avatar}
            name={user.name}
            size="lg"
            isBordered
            color="primary"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-default-500">{user.email}</p>
            <p className="text-default-500">{user.phone}</p>
          </div>
        </div>

        <Divider className="my-4" />

        <Tabs aria-label="User profile sections">
          <Tab key="bookings" title="Booking History">
            <BookingHistory />
          </Tab>
          <Tab key="preferences" title="Travel Preferences">
            <PreferencesEditor />
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}