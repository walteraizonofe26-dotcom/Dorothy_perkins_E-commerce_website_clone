import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const heroImages = ["dp_images/hero1.png", "dp_images/hero2.png", "dp_images/hero3.png"];

const products = [
  { id: 1, name: "Petite Berry Ditsy Frill Neck Midi Dress", price: "£38.00", oldPrice: null, img: "dp_images/product1.jpg", colors: ["🔴", "⚫", "🟢"] },
  { id: 2, name: "Petite Black Ruched Sleeve Blazer", price: "£34.30", oldPrice: "£49.00", img: "dp_images/product2.jpg", colors: ["⚫", "🟤"] },
  { id: 3, name: "3/4 Roll Sleeve Blouse", price: "£25.00", oldPrice: null, img: "dp_images/product3.jpg", colors: ["🔴", "⚫", "🟢"] },
  { id: 4, name: "Petite Ankle Grazer Trouser", price: "£28.80", oldPrice: "£32.00", img: "dp_images/product4.jpg", colors: ["🟤", "🟣"] },
  { id: 5, name: "Ankle Grazer Trouser", price: "£25.60", oldPrice: "£32.00", img: "dp_images/product5.jpg", colors: ["🟤", "🟣"] },
  { id: 6, name: "Wrap Midi Dress", price: "£30.00", oldPrice: null, img: "dp_images/product6.jpg", colors: ["🔴", "🟢"] },
  { id: 7, name: "Tailored Wide Leg Trouser", price: "£27.20", oldPrice: "£34.00", img: "dp_images/product7.jpg", colors: ["⚫", "🟤"] },
  { id: 8, name: "Puff Sleeve Blouse", price: "£22.00", oldPrice: "£28.00", img: "dp_images/product8.jpg", colors: ["🔴", "⚪"] },
  { id: 9, name: "Belted Shirt Dress", price: "£36.00", oldPrice: null, img: "dp_images/product9.jpg", colors: ["🟢", "🟤"] },
  { id: 10, name: "Straight Leg Denim Jean", price: "£54.30", oldPrice: "£30.00", img: "dp_images/product10.jpg", colors: ["🔵", "⚫"] },
  { id: 11, name: "Straight Leg Denim Jean", price: "£24.30", oldPrice: "£50.00", img: "dp_images/product11.jpg", colors: ["🔵", "⚫"] },
  { id: 12, name: "Straight Leg Denim Jean", price: "£94.30", oldPrice: "£90.00", img: "dp_images/product12.jpg", colors: ["🔵", "⚫"] },
  { id: 13, name: "Straight Leg Denim Jean", price: "£24.30", oldPrice: "£37.00", img: "dp_images/product13.jpg", colors: ["🔵", "⚫"] },
  { id: 14, name: "Straight Leg Denim Jean", price: "£14.30", oldPrice: "£20.00", img: "dp_images/product14.jpg", colors: ["🔵", "⚫"] },
  { id: 15, name: "Straight Leg Denim Jean", price: "£44.30", oldPrice: "£30.00", img: "dp_images/product15.jpg", colors: ["🔵", "⚫"] },
];

function Dp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Product carousel — manual sliding only, no auto-timer
  const visibleCount = 5;
  const [startIndex, setStartIndex] = useState(0);

  const goToNextProducts = () => {
    setStartIndex((prev) => Math.min(prev + 1, products.length - visibleCount));
  };

  const goToPrevProducts = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      <Navbar />

      <section className="relative h-[400px] w-full overflow-hidden md:h-[550px]">
        <img
          src={heroImages[currentIndex]}
          alt={`Hero slide ${currentIndex + 1}`}
          className="h-full w-full object-cover"
        />
        <button
          onClick={goToPrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-lg hover:bg-white"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-lg hover:bg-white"
        >
          &gt;
        </button>
        <button className="absolute bottom-16 right-6 bg-white px-6 py-3 text-sm font-semibold tracking-wide hover:bg-neutral-100 md:right-12">
          SHOP NOW
        </button>
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 w-8 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      </section>

      {/* ---------- PROMO BANNER ---------- */}
      <div className="flex flex-col items-start justify-between gap-2 bg-[#b89b74] px-6 py-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-white">SAVE ON</p>
          <p className="font-serif text-2xl tracking-wide text-white sm:text-3xl">
            SELECTED FASHION FAVOURITES
          </p>
        </div>
        <p className="text-sm font-semibold tracking-[0.2em] text-white">
          USE CODE: FASHION
        </p>
      </div>

      {/* ---------- CATEGORY CIRCLES ---------- */}
      <div className="flex gap-6 overflow-x-auto px-6 py-6">
        {[
          { label: "Sale", img: "dp_images/upTo30.jpg" },
          { label: "New In", img: "dp_images/newIn.jpg" },
          { label: "Dresses", img: "dp_images/dresses.jpg" },
          { label: "Coats & Jackets", img: "dp_images/coat&jacket.jpg" },
          { label: "Tops", img: "dp_images/tops.jpg" },
          { label: "Denim", img: "dp_images/denim.jpg" },
          { label: "Trousers", img: "dp_images/trowsers.jpg" },
          { label: "Petite", img: "dp_images/petite.jpg" },
          { label: "Workwear", img: "dp_images/workWear.jpg" },
          { label: "Shoes", img: "dp_images/shoes.jpg" },
        ].map((cat) => (
          <div key={cat.label} className="flex shrink-0 flex-col items-center gap-2">
            <img
              src={cat.img}
              alt={cat.label}
              className="h-24 w-24 rounded-full bg-[#f2e4d4] object-cover md:h-28 md:w-28"
            />
            <p className="text-xs font-medium">{cat.label}</p>
          </div>
        ))}
      </div>

    
      <div className="grid grid-cols-2 gap-3 px-3 md:grid-cols-4 md:gap-4 md:px-6">
        {["dp_images/trending2.jpg", "dp_images/trending1.jpg", "dp_images/trending4.jpg", "dp_images/trending3.jpg"].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Grid item ${index + 1}`}
            className="h-64 w-full object-cover md:h-80"
          />
        ))}
      </div>

      <section className="relative h-[400px] w-full overflow-hidden md:h-[550px]">
        <img
          src="dp_images/casualChick.jpg"
          alt="Casual chic banner"
          className="h-full w-full object-cover"
        />
        <button className="absolute bottom-16 right-6 bg-white px-6 py-3 text-sm font-semibold tracking-wide hover:bg-neutral-100 md:right-12">
          SHOP NOW
        </button>
      </section>

      <div className="grid grid-cols-2 gap-3 px-3 md:grid-cols-4 md:gap-4 md:px-6">
        {["dp_images/coat.jpg", "dp_images/jeansTrouser.jpg", "dp_images/petiteShoes.jpg", "dp_images/petite2.jpg"].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Category ${index + 1}`}
            className="h-64 w-full object-cover md:h-80"
          />
        ))}
      </div>

      <div className="px-6 py-8">
        <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold">Wardrobes, Updates</h2>
            <p className="text-sm text-neutral-600">
              Shop the latest & greatest styles for the season ahead.
            </p>
          </div>
          <div className="flex gap-5 text-sm font-medium">
            <button className="border-b-2 border-black pb-1">Fashion</button>
            <button className="pb-1 text-neutral-500 hover:text-black">Petite</button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-1/2 shrink-0 sm:w-1/3 md:w-1/5"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-72 w-full object-cover"
                  />
                  <p className="mt-2 text-xs font-semibold text-neutral-500">
                    Dorothy Perkins
                  </p>
                  <p className="text-sm text-neutral-800">{product.name}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span
                      className={`text-sm font-semibold ${product.oldPrice ? "text-red-600" : "text-black"
                        }`}
                    >
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-neutral-400 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex gap-1 text-lg">
                    {product.colors.map((color, i) => (
                      <span key={i} className="cursor-pointer">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevProducts}
            aria-label="Previous products"
            disabled={startIndex === 0}
            className="absolute left-0 top-1/3 flex h-9 w-9 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg shadow disabled:opacity-30"
          >
            &lt;
          </button>
          <button
            onClick={goToNextProducts}
            aria-label="Next products"
            disabled={startIndex >= products.length - visibleCount}
            className="absolute right-0 top-1/3 flex h-9 w-9 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full bg-white text-lg shadow disabled:opacity-30"
          >
            &gt;
          </button>
        </div>
      </div>

      <img
        src="dp_images/extra10%2.jpg"
        alt="Download the app for an extra 10% off"
        className="w-full object-cover"
      />

      {/* ---------- GODDIVA HERO BANNER ---------- */}
      <section className="relative h-[400px] w-full overflow-hidden md:h-[550px]">
        <img
          src="dp_images/gloddiva2.jpg"
          alt="Goddiva collection"
          className="h-full w-full object-cover"
        />
        <button className="absolute bottom-8 right-6 bg-white px-6 py-3 text-sm font-semibold tracking-wide hover:bg-neutral-100 md:right-12">
          SHOP NOW
        </button>
      </section>

      <img
        src="dp_images/roman.jpg"
        alt="Featured brands"
        className="w-full object-cover"
      />
      <div className="grid grid-cols-2 gap-3 px-3 md:grid-cols-4 md:gap-4 md:px-6">
        {["dp_images/gridImage1.jpg", "dp_images/gridImage2.jpg", "dp_images/gridImage3.jpg", "dp_images/gridImage4.jpg"].map(
          (src, index) => (
            <img
              key={index}
              src={src}
              alt={`Brand ${index + 1}`}
              className="h-64 w-full object-cover md:h-80"
            />
          )
        )}
      </div>

      <img
        src="dp_images/payE0.jpg"
        alt="Pay £0 at checkout with DebenhamsPay"
        className="w-full object-cover"
      />

      {/* ---------- WELCOME TEXT (real text, expandable) ---------- */}
      <WelcomeText />
       <Footer />
    </div>
  );
}

function WelcomeText() {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText =
    "Welcome to DP, where effortless, everyday pieces combine for a curated wardrobe you'll love. Explore our latest collections and discover hard-working, elevated feminine designs for busy moments and non-stop schedules. Signature";

  const fullText = shortText + " tailoring, versatile denim, and statement dresses sit alongside wardrobe staples designed to move with you — from the office to evenings out. Whatever the occasion, DP makes it easy to look and feel your best.";
  
  return (
    <div className="px-6 py-10 text-center">
      <p className="mx-auto max-w-4xl text-sm text-neutral-600">
        {isExpanded ? fullText : shortText}
      </p>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="mx-auto mt-3 flex items-center gap-1 text-sm font-medium text-neutral-700 hover:text-black"
      >
        <span className="text-lg">{isExpanded ? "−" : "+"}</span>
        {isExpanded ? "Show less text" : "Show more text"}
      </button>
    </div>
  );
}

export default Dp;