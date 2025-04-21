import React from 'react';
import { Card, CardBody, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';

export function BookingHistory() {
  const bookings = [
    {
      id: 'BK001',
      type: 'train',
      from: 'Mumbai',
      to: 'Delhi',
      date: '2024-03-15',
      status: 'completed',
    },
    {
      id: 'BK002',
      type: 'flight',
      from: 'Bangalore',
      to: 'Chennai',
      date: '2024-04-01',
      status: 'upcoming',
    },
  ];

  const getStatusColor = (
    status: string
  ): 'primary' | 'default' | 'secondary' | 'success' | 'warning' | 'danger' | undefined => {
    const colors: Record<string, 'primary' | 'default' | 'secondary' | 'success' | 'warning' | 'danger'> = {
      completed: 'success',
      upcoming: 'primary',
      cancelled: 'danger',
    };
    return colors[status] || 'default';
  };

  return (
    <div className="space-y-4 mt-4">
      {bookings.map((booking) => (
        <Card key={booking.id} className="w-full">
          <CardBody className="flex justify-between items-center p-4">
            <div className="flex items-center gap-4">
              <Icon
                icon={`lucide:${booking.type}`}
                className="text-2xl text-default-500"
              />
              <div>
                <p className="font-semibold">
                  {booking.from} → {booking.to}
                </p>
                <p className="text-small text-default-500">{booking.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Chip
                color={getStatusColor(booking.status)}
                variant="flat"
                size="sm"
              >
                {booking.status}
              </Chip>
              <p className="text-small font-semibold">#{booking.id}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}