import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import OrderForm from "@/components/OrderForm";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <Navbar />

      {/* Home */}
      <section id="home">
        <Hero />
      </section>

      {/* Services */}
      <section id="services">
        <Services />
      </section>

      {/* Portfolio */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Pricing */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Order */}
      <section id="order">
        <OrderForm />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp */}
      <WhatsAppButton />

    </main>
  );
}