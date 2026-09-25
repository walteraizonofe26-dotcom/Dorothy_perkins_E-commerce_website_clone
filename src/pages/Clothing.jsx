import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductFilters from "../components/ProductsFilters";
import ProductGrid from "../components/ProductGrid";
import CategoryCarousel from "../components/categoryCarousel";

// Sale-specific category data — passed as props to CategoryCarousel
const clothingCategories = [
  { name: "Dresses", image: "/images/sale1.jpg" },
  { name: "Tops", image: "/images/sale2.jpg" },
  { name: "Coats & Jackets", image: "/images/sale3.jpg" },
  { name: "Skirts", image: "/images/sale4.jpg" },
  { name: "Trousers", image: "/images/sale5.jpg" },
  { name: "Petite", image: "/images/sale6.jpg" },
  { name: "Knitwear", image: "/images/sale7.jpg" },
  { name: "Shoes", image: "/images/sale8.jpg" },
];

// 15 Sale products — passed as props to ProductGrid
const clothingProducts = [
  { id: 1, brand: "Enorsia", name: "Women's Thick Strap Vest Top", description: "", image: "/images/product1.jpg", price: "£10.00", oldPrice: "£14.99", discount: "-33%", colors: ["#1a3a8f", "#c94f4f", "#c48fd4", "#8fbf8f"] },
  { id: 2, brand: "Enorsia", name: "Ruched Sleeves Chest Printed T-Shirt", description: "", image: "/images/product2.jpg", price: "£10.00", oldPrice: "£19.99", discount: "-50%", colors: ["#111111", "#1a1a4a", "#c48fd4", "#2f5e3f"] },
  { id: 3, brand: "Enorsia", name: "Women's Stripe Cropped Rugby Top", description: "", image: "/images/product5.jpg", price: "£14.00", oldPrice: "£34.99", discount: "-60%", colors: ["#1a3a8f", "#d98a3d", "#a8c9a0", "#f2c6c6"] },
  { id: 4, brand: "Enorsia", name: "Essential Combed Cotton Short Sleeve Crew Neck T-shirt", description: "", image: "/images/product4.jpg", price: "£7.50", oldPrice: "£10.99", discount: "-32%", colors: ["#5fae6c", "#a9c9e0", "#8f6fc4", "#4a90d9", "#ffffff"] },
  { id: 5, brand: "Enorsia", name: "Tie Neck Tops", description: "", image: "/images/product6.jpg", price: "£12.50", oldPrice: "£16.99", discount: "-26%", colors: [] },
  { id: 6, brand: "Dorothy Perkins", name: "Ditsy Floral Midi Dress", description: "Lightweight woven midi dress", image: "/images/product7.jpg", price: "£25.00", oldPrice: "£40.00", discount: "38% OFF", rating: 4, reviews: 25, colors: ["#5e6b3f", "#c94f4f"] },
  { id: 7, brand: "Dorothy Perkins", name: "Stripe Panel Cami Dress", description: "", image: "/images/product8.jpg", price: "£22.00", oldPrice: "£35.00", discount: "37% OFF", colors: ["#111111", "#f2c6c6"] },
  { id: 8, brand: "Dorothy Perkins", name: "Ruffle Sleeve Midi Dress", description: "", image: "/images/product9.jpg", price: "£28.00", oldPrice: null, discount: null, rating: 5, reviews: 12, colors: ["#8f1f3f"] },
  { id: 9, brand: "Dorothy Perkins", name: "White Ribbed Vest Top", description: "Wardrobe essential ribbed vest", image: "/images/product10.jpg", price: "£8.00", oldPrice: "£12.00", discount: "33% OFF", colors: ["#ffffff", "#111111"] },
  { id: 10, brand: "Dorothy Perkins", name: "High Waist Denim Jeans", description: "", image: "/images/product11.jpg", price: "£24.30", oldPrice: "£30.00", discount: "19% OFF", rating: 4, reviews: 8, colors: ["#3a4a6b"] },
  { id: 11, brand: "Dorothy Perkins", name: "Denim Jacket", description: "Classic cropped denim jacket", image: "/images/product12.jpg", price: "£30.00", oldPrice: "£45.00", discount: "33% OFF", colors: ["#3a4a6b", "#111111"] },
  { id: 12, brand: "Dorothy Perkins", name: "Ditsy Print Blouse", description: "", image: "/images/product13.jpg", price: "£18.00", oldPrice: null, discount: null, colors: [] },
  { id: 13, brand: "Dorothy Perkins", name: "Floral Print Puff Sleeve Dress", description: "", image: "/images/product14.jpg", price: "£26.00", oldPrice: "£38.00", discount: "32% OFF", rating: 3, reviews: 6, colors: ["#c9a15e", "#e0d0b0"] },
  { id: 14, brand: "Dorothy Perkins", name: "Ankle Grazer Trouser", description: "", image: "/images/product15.jpg", price: "£25.60", oldPrice: "£32.00", discount: "20% OFF", colors: ["#5a3d2b", "#3d2b1f"] },
  { id: 15, brand: "Dorothy Perkins", name: "Tailored Blazer", description: "", image: "/images/product17.jpg", price: "£34.30", oldPrice: "£49.00", discount: "30% OFF", rating: 4, reviews: 19, colors: ["#111111", "#5a3d2b"] },
];

function Clothing() {
  return (
    <div>
      <Navbar />

      <main>
        {/* Sale-specific breadcrumb */}
        <nav className="px-6 pt-4 text-xs text-neutral-500">
          <a href="/" className="text-blue-700 hover:underline">Home</a>
          {" / "}
          <span>Women</span>
        </nav>

        {/* Sale-specific H1 */}
        <div className="px-6 pb-2 pt-4 text-center">
          <h1 className="text-2xl font-bold">Shop All Clothing, Shoes, & Accessories</h1>
          <p className="text-sm text-green-700">1,000+ products</p>
        </div>

        <CategoryCarousel categories={clothingCategories} />
        <ProductFilters />
        <ProductGrid products={clothingProducts} />
      </main>

      <Footer />
    </div>
  );
}

export default Clothing;