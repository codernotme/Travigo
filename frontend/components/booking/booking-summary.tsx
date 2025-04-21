import React from 'react';
import { Card, CardBody, Divider, Button, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';

interface BookingSummaryProps {
  booking: {
    id: string;
    operator: string;
    from: string;
    to: string;
    date: string;
    passengers: number;
    class: string;
    price: number;
    tax: number;
  };
  onProceed: () => void;
  onCancel: () => void;
}

export function BookingSummary({ booking, onProceed, onCancel }: BookingSummaryProps) {
  const total = booking.price + booking.tax;

  return (
    <Card className="max-w-md mx-auto">
      <CardBody className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Booking Summary</h3>
          <Chip color="primary" variant="flat">
            {booking.id}
          </Chip>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:map-pin" className="text-default-500" />
              <span>From</span>
            </div>
            <span className="font-semibold">{booking.from}</span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:map-pin" className="text-default-500" />
              <span>To</span>
            </div>
            <span className="font-semibold">{booking.to}</span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:calendar" className="text-default-500" />
              <span>Date</span>
            </div>
            <span className="font-semibold">{booking.date}</span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:users" className="text-default-500" />
              <span>Passengers</span>
            </div>
            <span className="font-semibold">{booking.passengers}</span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:ticket" className="text-default-500" />
              <span>Class</span>
            </div>
            <span className="font-semibold">{booking.class}</span>
          </div>
        </div>

        <Divider className="my-4" />

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Base Fare</span>
            <span>₹{booking.price}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>₹{booking.tax}</span>
          </div>
          <Divider className="my-2" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <Button
            variant="flat"
            color="danger"
            className="flex-1"
            onPress={onCancel}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            className="flex-1"
            onPress={onProceed}
          >
            Proceed to Pay
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}