import React from 'react';
import { Card, CardBody, Tabs, Tab } from '@heroui/react';
import { UserSessions } from './user-sessions';
import { SystemLogs } from './system-logs';
import { ChatAnalytics } from './chat-analytics';
import { BookingMetrics } from './booking-metrics';
import { Icon } from '@iconify/react';

export function AdminPanel() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Active Users"
          value="1,234"
          change="+12%"
          icon="lucide:users"
        />
        <MetricCard
          title="Bookings Today"
          value="156"
          change="+5%"
          icon="lucide:ticket"
        />
        <MetricCard
          title="Chat Sessions"
          value="890"
          change="+8%"
          icon="lucide:message-circle"
        />
        <MetricCard
          title="Success Rate"
          value="94%"
          change="+2%"
          icon="lucide:trending-up"
        />
      </div>

      <Tabs aria-label="Admin sections">
        <Tab key="sessions" title="User Sessions">
          <UserSessions />
        </Tab>
        <Tab key="logs" title="System Logs">
          <SystemLogs />
        </Tab>
        <Tab key="analytics" title="Chat Analytics">
          <ChatAnalytics />
        </Tab>
        <Tab key="metrics" title="Booking Metrics">
          <BookingMetrics />
        </Tab>
      </Tabs>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
}

function MetricCard({ title, value, change, icon }: MetricCardProps) {
  const isPositive = change.startsWith('+');
  
  return (
    <Card>
      <CardBody className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-default-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <Icon icon={icon} className="text-2xl text-default-400" />
        </div>
        <p className={`text-sm mt-2 ${isPositive ? 'text-success' : 'text-danger'}`}>
          {change} from last week
        </p>
      </CardBody>
    </Card>
  );
}