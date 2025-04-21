import React from 'react';
import { Card, CardBody, Tabs, Tab } from '@heroui/react';

export function BookingMetrics() {
  const metrics = {
    revenue: {
      total: '₹1,234,567',
      growth: '+15%',
    },
    bookings: {
      total: 1567,
      completed: 1234,
      cancelled: 89,
      pending: 244,
    },
    popular: [
      { route: 'Mumbai - Delhi', bookings: 234 },
      { route: 'Bangalore - Chennai', bookings: 189 },
      { route: 'Delhi - Kolkata', bookings: 156 },
    ],
  };

  return (
    <div className="space-y-6 mt-4">
      <Card>
        <CardBody>
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold">{metrics.revenue.total}</span>
            <span className="text-success text-sm">{metrics.revenue.growth}</span>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <h3 className="text-lg font-semibold mb-4">Booking Status</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-default-500">Total</p>
              <p className="text-2xl font-bold">{metrics.bookings.total}</p>
            </div>
            <div>
              <p className="text-default-500">Completed</p>
              <p className="text-2xl font-bold text-success">
                {metrics.bookings.completed}
              </p>
            </div>
            <div>
              <p className="text-default-500">Cancelled</p>
              <p className="text-2xl font-bold text-danger">
                {metrics.bookings.cancelled}
              </p>
            </div>
            <div>
              <p className="text-default-500">Pending</p>
              <p className="text-2xl font-bold text-warning">
                {metrics.bookings.pending}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <h3 className="text-lg font-semibold mb-4">Popular Routes</h3>
          <div className="space-y-4">
            {metrics.popular.map((route) => (
              <div
                key={route.route}
                className="flex justify-between items-center"
              >
                <span className="text-default-500">{route.route}</span>
                <span className="font-semibold">{route.bookings} bookings</span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}