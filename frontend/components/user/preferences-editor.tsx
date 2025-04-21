/* eslint-disable prettier/prettier */
import React from 'react';
import { Card, CardBody, Select, SelectItem, Button, Switch } from '@heroui/react';

export function PreferencesEditor() {
  const [preferences, setPreferences] = React.useState({
    preferredClass: 'economy',
    mealPreference: 'veg',
    seatPreference: 'window',
    notifications: true,
  });

  return (
    <div className="space-y-6 mt-4">
      <Card>
        <CardBody className="space-y-4">
          <Select
            label="Preferred Travel Class"
            value={preferences.preferredClass}
            onChange={(e) =>
              setPreferences({ ...preferences, preferredClass: e.target.value })
            }
          >
            <SelectItem key="economy">Economy</SelectItem>
            <SelectItem key="business">Business</SelectItem>
            <SelectItem key="first" >First Class</SelectItem>
          </Select>

          <Select
            label="Meal Preference"
            value={preferences.mealPreference}
            onChange={(e) =>
              setPreferences({ ...preferences, mealPreference: e.target.value })
            }
          >
            <SelectItem key="veg" >Vegetarian</SelectItem>
            <SelectItem key="nonveg">Non-Vegetarian</SelectItem>
            <SelectItem key="none">No Preference</SelectItem>
          </Select>

          <Select
            label="Seat Preference"
            value={preferences.seatPreference}
            onChange={(e) =>
              setPreferences({ ...preferences, seatPreference: e.target.value })
            }
          >
            <SelectItem key="window">Window</SelectItem>
            <SelectItem key="aisle">Aisle</SelectItem>
            <SelectItem key="none" >No Preference</SelectItem>
          </Select>

          <div className="flex justify-between items-center">
            <p>Travel Notifications</p>
            <Switch
              isSelected={preferences.notifications}
              onValueChange={(value) =>
                setPreferences({ ...preferences, notifications: value })
              }
            />
          </div>

          <Button className="w-full" color="primary">
            Save Preferences
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}