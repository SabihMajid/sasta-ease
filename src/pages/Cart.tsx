import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Cart() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        <p className="text-xl text-muted-foreground">Cart page coming soon...</p>
      </main>
      <Footer />
    </div>
  );
}