import { AdminPanel } from '@/components/admin/admin-panel';
import { HeaderNavbar } from '@/components/layout/header-navbar';
import { Footer } from '@/components/layout/footer';

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderNavbar onLoginClick={() => {}} />
      <main className="flex-grow">
        <AdminPanel />
      </main>
      <Footer />
    </div>
  );
}
