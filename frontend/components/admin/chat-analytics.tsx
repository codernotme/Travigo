import React from 'react';
import { Card, CardBody, Select, SelectItem } from '@heroui/react';

export function ChatAnalytics() {
  const [timeRange, setTimeRange] = React.useState('7d');

  const metrics = {
    totalSessions: 1234,
    avgDuration: '8m',
    successRate: '92%',
    topIntents: [
      { intent: 'book_ticket', count: 450 },
      { intent: 'check_status', count: 320 },
      { intent: 'cancel_booking', count: 180 },
    ],
  };

  return (
    <div className="space-y-6 mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Chat Performance</h2>
        <Select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          size="sm"
        >
          <SelectItem key="24h">Last 24 Hours</SelectItem>
          <SelectItem key="7d">Last 7 Days</SelectItem>
          <SelectItem key="30d">Last 30 Days</SelectItem>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardBody>
            <p className="text-default-500">Total Sessions</p>
            <h3 className="text-2xl font-bold">{metrics.totalSessions}</h3>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p className="text-default-500">Avg. Duration</p>
            <h3 className="text-2xl font-bold">{metrics.avgDuration}</h3>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <p className="text-default-500">Success Rate</p>
            <h3 className="text-2xl font-bold">{metrics.successRate}</h3>
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardBody>
          <h3 className="text-lg font-semibold mb-4">Top User Intents</h3>
          <div className="space-y-4">
            {metrics.topIntents.map((item) => (
              <div key={item.intent} className="flex justify-between items-center">
                <span className="text-default-500">{item.intent}</span>
                <span className="font-semibold">{item.count}</span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}