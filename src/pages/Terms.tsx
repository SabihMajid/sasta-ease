import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <p className="text-xl text-muted-foreground">Terms and conditions coming soon...</p>
      </main>
      <Footer />
    </div>
  );
}