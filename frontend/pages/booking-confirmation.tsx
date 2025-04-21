import { HeaderNavbar } from '@/components/layout/header-navbar';
import { Footer } from '@/components/layout/footer';

export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderNavbar onLoginClick={() => {}} />
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-content2 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
          <p className="mb-2">Your ticket ID: <span className="font-mono">BK001</span></p>
          <p className="mb-4">A confirmation email has been sent. Download your ticket below.</p>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded">Download PDF</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
