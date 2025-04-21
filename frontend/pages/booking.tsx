import { PreferenceForm } from '@/components/booking/preference-form';
import { SearchResultsCard } from '@/components/booking/search-results-card';
import { HeaderNavbar } from '@/components/layout/header-navbar';
import { Footer } from '@/components/layout/footer';
import React from 'react';

const mockResults = [
  {
    id: '1',
    operator: 'Express Railways',
    departure: '10:00 AM',
    arrival: '4:00 PM',
    duration: '6h',
    price: 1200,
    available: 45,
  },
  // ...more mock results
];

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderNavbar onLoginClick={() => {}} />
      <main className="flex-grow p-4 flex flex-col gap-4 max-w-4xl mx-auto">
        <PreferenceForm onSubmit={() => {}} />
        <SearchResultsCard results={mockResults} mode="train" onBook={() => {}} />
      </main>
      <Footer />
    </div>
  );
}
