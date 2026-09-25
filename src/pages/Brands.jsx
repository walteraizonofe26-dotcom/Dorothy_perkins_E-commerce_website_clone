import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Brand grid images — used by the slider below via .map()
const brandImages = [
  { name: "Warehouse", img: "/images/brand_image7.jpg" },
  { name: "Yours", img: "/images/brand_image8.jpg" },
  { name: "Goddiva", img: "/images/brand_image2.jpg" },
  { name: "Wallis", img: "/images/brand_image3.jpg" },
  { name: "Dune London", img: "/images/brand_image4.jpg" },
  { name: "Oasis", img: "/images/brand_image5.jpg" },
  { name: "Jolie Moi", img: "/images/brand_image6.jpg" },
];

 function Brands() {
  const visibleCount = 4;
  const [startIndex, setStartIndex] = useState(0);

  const goToNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, brandImages.length - visibleCount));
  };

  const goToPrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      <Navbar />

      <main>
        <img
          src="/images/brand_image.jpg"
          alt="DP Brand Room"
          className="w-full object-cover"
        />

        <img
          src="/images/brand_imag2.jpg"
          alt="Roman"
          className="w-full object-cover"
        />

        {/* Sliding brand grid — 7 images, 4 visible at a time */}
        <div className="relative px-6 py-6">
          <div className="overflow-hidden">
            <div
              className="flex gap-3 transition-transform duration-300 ease-out md:gap-4"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
              }}
            >
              {brandImages.map((brand) => (
                <div key={brand.name} className="w-1/2 shrink-0 sm:w-1/3 md:w-1/4">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="h-64 w-full object-cover md:h-80"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrev}
            aria-label="Previous brands"
            disabled={startIndex === 0}
            className="absolute left-0 top-1/2 flex h-9 w-9 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg shadow disabled:opacity-30"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            aria-label="Next brands"
            disabled={startIndex >= brandImages.length - visibleCount}
            className="absolute right-0 top-1/2 flex h-9 w-9 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full bg-white text-lg shadow disabled:opacity-30"
          >
            &gt;
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Brands;