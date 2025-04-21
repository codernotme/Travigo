import React from "react";
import { Card, CardBody, Button, Tabs, Tab, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface SearchResult {
  id: string;
  operator: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  available: number;
}

interface SearchResultsCardProps {
  results: SearchResult[];
  mode: "train" | "bus" | "flight";
  onBook: (result: SearchResult) => void;
}

export function SearchResultsCard({
  results,
  mode,
  onBook,
}: SearchResultsCardProps) {
  const getIcon = (mode: string) => {
    const icons = {
      train: "lucide:train",
      bus: "lucide:bus",
      flight: "lucide:plane",
    };

    return icons[mode as keyof typeof icons];
  };

  const ResultItem = ({ result }: { result: SearchResult }) => (
    <Card className="mb-4">
      <CardBody className="flex justify-between items-center p-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Icon className="text-xl text-default-500" icon={getIcon(mode)} />
            <span className="font-semibold">{result.operator}</span>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-lg font-semibold">{result.departure}</p>
              <p className="text-small text-default-500">Departure</p>
            </div>
            <Icon className="text-default-500" icon="lucide:arrow-right" />
            <div>
              <p className="text-lg font-semibold">{result.arrival}</p>
              <p className="text-small text-default-500">Arrival</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-primary">₹{result.price}</p>
          <Chip color={result.available > 5 ? "success" : "warning"} size="sm">
            {result.available} seats left
          </Chip>
          <Button
            className="mt-2"
            color="primary"
            size="sm"
            variant="flat"
            onPress={() => onBook(result)}
          >
            Book Now
          </Button>
        </div>
      </CardBody>
    </Card>
  );

  return (
    <Card className="p-4">
      <Tabs aria-label="Travel options">
        <Tab key="best" title="Best">
          <div className="mt-4">
            {results.map((result) => (
              <ResultItem key={result.id} result={result} />
            ))}
          </div>
        </Tab>
        <Tab key="cheapest" title="Cheapest">
          <div className="mt-4">
            {[...results]
              .sort((a, b) => a.price - b.price)
              .map((result) => (
                <ResultItem key={result.id} result={result} />
              ))}
          </div>
        </Tab>
        <Tab key="fastest" title="Fastest">
          <div className="mt-4">
            {[...results]
              .sort((a, b) => parseInt(a.duration) - parseInt(b.duration))
              .map((result) => (
                <ResultItem key={result.id} result={result} />
              ))}
          </div>
        </Tab>
      </Tabs>
    </Card>
  );
}
