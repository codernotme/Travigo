import React from "react";
import {
  Card,
  Input,
  Select,
  SelectItem,
  Button,
  DatePicker,
} from "@heroui/react";
import { Icon } from "@iconify/react";

interface PreferenceFormProps {
  onSubmit: (data: TravelPreference) => void;
}

export interface TravelPreference {
  from: string;
  to: string;
  date: string;
  mode: "train" | "bus" | "flight";
  passengers: number;
  class: string;
}

export function PreferenceForm({ onSubmit }: PreferenceFormProps) {
  const [formData, setFormData] = React.useState<TravelPreference>({
    from: "",
    to: "",
    date: "",
    mode: "train",
    passengers: 1,
    class: "economy",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="p-4 space-y-4">
      <h3 className="text-lg font-semibold">Travel Preferences</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <Input
            label="From"
            placeholder="Departure city"
            startContent={
              <Icon className="text-default-400" icon="lucide:map-pin" />
            }
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          />
          <Input
            label="To"
            placeholder="Destination city"
            startContent={
              <Icon className="text-default-400" icon="lucide:map-pin" />
            }
            value={formData.to}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
          />
        </div>

        <div className="flex gap-4">
          <DatePicker
            className="flex-1"
            label="Travel Date"
            onChange={(date: any) =>
              setFormData({ ...formData, date: date?.toString() || "" })
            }
          />
          <Select
            className="flex-1"
            label="Mode of Travel"
            value={formData.mode}
            onChange={(e) =>
              setFormData({ ...formData, mode: e.target.value as any })
            }
          >
            <SelectItem key="train" startContent={<Icon icon="lucide:train" />}>
              Train
            </SelectItem>
            <SelectItem key="bus" startContent={<Icon icon="lucide:bus" />}>
              Bus
            </SelectItem>
            <SelectItem
              key="flight"
              startContent={<Icon icon="lucide:plane" />}
            >
              Flight
            </SelectItem>
          </Select>
        </div>

        <div className="flex gap-4">
          <Input
            className="flex-1"
            label="Passengers"
            max={10}
            min={1}
            type="number"
            value={formData.passengers.toString()}
            onChange={(e) =>
              setFormData({ ...formData, passengers: parseInt(e.target.value) })
            }
          />
          <Select
            className="flex-1"
            label="Class"
            value={formData.class}
            onChange={(e) =>
              setFormData({ ...formData, class: e.target.value })
            }
          >
            <SelectItem key="economy">Economy</SelectItem>
            <SelectItem key="business">Business</SelectItem>
            <SelectItem key="first">First Class</SelectItem>
          </Select>
        </div>
        <Button className="w-full" color="primary" type="submit">
          Search
        </Button>
      </form>
    </Card>
  );
}
