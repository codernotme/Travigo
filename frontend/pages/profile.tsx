import { UserProfile } from '@/components/user/user-profile';
import { HeaderNavbar } from '@/components/layout/header-navbar';
import { Footer } from '@/components/layout/footer';

const mockUser = {
  name: 'Aryan',
  email: 'aryan@example.com',
  phone: '+91-9876543210',
  avatar: 'https://i.pravatar.cc/150?img=3',
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderNavbar onLoginClick={() => {}} user={mockUser} />
      <main className="flex-grow flex items-center justify-center">
        <UserProfile user={mockUser} />
      </main>
      <Footer />
    </div>
  );
}
