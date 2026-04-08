import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookDescription from "./components/BookDescription";
import AuthorSection from "./components/AuthorSection";
import RegistrationForm from "./components/RegistrationForm";
import SponsorsSection from "./components/SponsorsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main style={{ background: "#0a2a35" }}>
      <Navbar />
      <Hero />
      <BookDescription />
      <AuthorSection />
      <SponsorsSection />
      <RegistrationForm />
      <Footer />
    </main>
  );
}
