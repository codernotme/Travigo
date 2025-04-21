import { ChatWindow } from '@/components/chat/chat-window';
import { HeaderNavbar } from '@/components/layout/header-navbar';
import { Footer } from '@/components/layout/footer';

export default function ChatPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderNavbar onLoginClick={() => {}} />
      <main className="flex-grow flex justify-center items-center">
        <ChatWindow />
      </main>
      <Footer />
    </div>
  );
}
