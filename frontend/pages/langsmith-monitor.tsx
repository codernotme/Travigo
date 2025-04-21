import { HeaderNavbar } from '@/components/layout/header-navbar';
import { Footer } from '@/components/layout/footer';

export default function LangSmithMonitorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderNavbar onLoginClick={() => {}} />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">LangSmith Monitor</h2>
        <iframe
          src="https://app.langchain.com/traces"
          title="LangSmith Traces"
          className="w-full max-w-4xl h-[600px] border rounded"
        />
      </main>
      <Footer />
    </div>
  );
}
