import { PreferenceForm } from '@/components/booking/preference-form';
import { SearchResultsCard } from '@/components/booking/search-results-card';
import { ChatWindow } from '@/components/chat/chat-window';
import { Footer } from '@/components/layout/footer';
import { HeaderNavbar } from '@/components/layout/header-navbar';
import { MobileMenu } from '@/components/layout/mobile-menu';
import { LoginModal } from '@/components/user/login-modal';
import { showToast } from '@/utils/toast';
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
  // ... more mock results
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderNavbar onLoginClick={() => setIsLoginModalOpen(true)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      <main className="flex-grow p-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChatWindow />
          <div className="space-y-4">
            <PreferenceForm onSubmit={(data) => {
              console.log(data);
              showToast.success('Searching for available options...');
            }} />
            <SearchResultsCard
              results={mockResults}
              mode="train"
              onBook={(result) => {
                console.log(result);
                showToast.info('Processing your booking...');
              }}
            />
          </div>
        </div>
      </main>

      <Footer />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={(credentials) => {
          console.log(credentials);
          showToast.success('Successfully logged in!');
          setIsLoginModalOpen(false);
        }}
        onRegisterClick={() => {
          setIsLoginModalOpen(false);
          showToast.info('Opening registration form...');
        }}
      />
    </div>
  );
}