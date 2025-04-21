import { BookingSummary } from '@/components/booking/booking-summary';
import { HeaderNavbar } from '@/components/layout/header-navbar';
import { Footer } from '@/components/layout/footer';

const mockBooking = {
  id: 'BK001',
  operator: 'Express Railways',
  from: 'Mumbai',
  to: 'Delhi',
  date: '2024-03-15',
  passengers: 2,
  class: 'Economy',
  price: 2400,
  tax: 120,
};

export default function BookingSummaryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderNavbar onLoginClick={() => {}} />
      <main className="flex-grow flex items-center justify-center">
        <BookingSummary
          booking={mockBooking}
          onProceed={() => {}}
          onCancel={() => {}}
        />
      </main>
      <Footer />
    </div>
  );
}
