import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductFilters from "../components/ProductsFilters";
import ProductGrid from "../components/ProductGrid";
import CategoryCarousel from "../components/categoryCarousel";

// Sale-specific category data — untouched, still passed to CategoryCarousel
const saleCategories = [
  { name: "Dresses", image: "/images/sale1.jpg" },
  { name: "Tops", image: "/images/sale2.jpg" },
  { name: "Coats & Jackets", image: "/images/sale3.jpg" },
  { name: "Skirts", image: "/images/sale4.jpg" },
  { name: "Trousers", image: "/images/sale5.jpg" },
  { name: "Petite", image: "/images/sale6.jpg" },
  { name: "Knitwear", image: "/images/sale7.jpg" },
  { name: "Shoes", image: "/images/sale8.jpg" },
];

function Sale() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const merchantID = localStorage.getItem("merchant_id");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resp = await axios.get(
          `http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${merchantID}`
        );
        setProducts(resp.data.data || []);
      } catch (err) {
        console.log(err);
        setError("Could not load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [merchantID]);

  return (
    <div>
      <Navbar />

      <main>
        {/* Sale-specific breadcrumb */}
        <nav className="px-6 pt-4 text-xs text-neutral-500">
          <a href="/" className="text-blue-700 hover:underline">Home</a>
          {" / "}
          <a href="/sale" className="text-blue-700 hover:underline">Sale</a>
          {" / "}
          <span>Womens Sale</span>
        </nav>

        {/* Sale-specific H1 */}
        <div className="px-6 pb-2 pt-4 text-center">
          <h1 className="text-2xl font-bold">Women's Sale</h1>
          <p className="text-sm text-green-700">1,000+ products</p>
        </div>

        <CategoryCarousel categories={saleCategories} />
        <ProductFilters />

        {isLoading && (
          <p className="px-6 py-6 text-sm text-neutral-500">Loading products...</p>
        )}
        {error && (
          <p className="px-6 py-6 text-sm text-red-600">{error}</p>
        )}
        {!isLoading && !error && <ProductGrid products={products} />}
      </main>

      <Footer />
    </div>
  );
}

export default Sale;