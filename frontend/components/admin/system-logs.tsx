import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Input } from '@heroui/react';
import { Icon } from '@iconify/react';

export function SystemLogs() {
  const [filter, setFilter] = React.useState('');
  
  const logs = [
    {
      id: '1',
      timestamp: '2024-03-20 10:30:45',
      level: 'error',
      service: 'booking-service',
      message: 'Payment gateway timeout',
    },
    // Add more mock logs
  ];

  const getLevelColor = (level: string) => {
    const colors = {
      error: 'danger',
      warn: 'warning',
      info: 'primary',
      debug: 'default',
    };
    return colors[level as keyof typeof colors] || 'default';
  };

  return (
    <div className="space-y-4 mt-4">
      <Input
        placeholder="Filter logs..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        startContent={<Icon icon="lucide:search" className="text-default-400" />}
      />
      
      <Table aria-label="System logs table">
        <TableHeader>
          <TableColumn>TIMESTAMP</TableColumn>
          <TableColumn>LEVEL</TableColumn>
          <TableColumn>SERVICE</TableColumn>
          <TableColumn>MESSAGE</TableColumn>
        </TableHeader>
        <TableBody>
          {logs.map((log) => (
            <TableRow key={log.id}>
              <TableCell>
                <code className="text-sm">{log.timestamp}</code>
              </TableCell>
              <TableCell>
                <Chip color={getLevelColor(log.level)} size="sm">
                  {log.level}
                </Chip>
              </TableCell>
              <TableCell>{log.service}</TableCell>
              <TableCell>{log.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}