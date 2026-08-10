import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { WhyUs } from "./components/WhyUs";
import { Inspiration } from "./components/Inspiration";
import { Reviews } from "./components/Reviews";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen w-full max-w-[100vw] overflow-x-hidden"
      style={{ backgroundColor: "#0B0C0F", fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyUs />
      <Inspiration />
      <Reviews />
      <Footer />
    </div>
  );
}
