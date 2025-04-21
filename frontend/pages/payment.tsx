import { HeaderNavbar } from '@/components/layout/header-navbar';
import { Footer } from '@/components/layout/footer';

export default function PaymentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderNavbar onLoginClick={() => {}} />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Payment Gateway</h2>
        <p className="mb-2">Redirecting to payment provider...</p>
        {/* Integrate payment gateway here */}
      </main>
      <Footer />
    </div>
  );
}
