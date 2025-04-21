import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Button } from '@heroui/react';
import { Icon } from '@iconify/react';

export function UserSessions() {
  const sessions = [
    {
      id: '1',
      user: 'John Doe',
      status: 'active',
      startTime: '10:30 AM',
      duration: '45m',
      platform: 'web',
      location: 'Mumbai, IN',
    },
    // Add more mock sessions
  ];

  return (
    <Table aria-label="User sessions table" className="mt-4">
      <TableHeader>
        <TableColumn>USER</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>START TIME</TableColumn>
        <TableColumn>DURATION</TableColumn>
        <TableColumn>PLATFORM</TableColumn>
        <TableColumn>LOCATION</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
        {sessions.map((session) => (
          <TableRow key={session.id}>
            <TableCell>{session.user}</TableCell>
            <TableCell>
              <Chip
                color={session.status === 'active' ? 'success' : 'default'}
                size="sm"
              >
                {session.status}
              </Chip>
            </TableCell>
            <TableCell>{session.startTime}</TableCell>
            <TableCell>{session.duration}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Icon icon={`lucide:${session.platform}`} />
                {session.platform}
              </div>
            </TableCell>
            <TableCell>{session.location}</TableCell>
            <TableCell>
              <Button
                size="sm"
                variant="light"
                color="danger"
                startContent={<Icon icon="lucide:x" />}
              >
                End Session
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}