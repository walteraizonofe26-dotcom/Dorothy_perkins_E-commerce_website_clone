import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

// Hardcoded, not from the API — decorative only
const colorOptions = ["🔴", "⚫", "🟢", "🔵", "🟤"];
const sizeOptions = ["XS", "S", "M", "L", "XL"];

function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);

  //const merchantID = localStorage.getItem("merchant_id");

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const resp = await axios.get(
          `http://ecommerce.reworkstaging.name.ng/v2/products/${id}`
        );
       console.log("Product API Response:", resp.data);

        // The API only gives us the full list, so we find the one
        // product whose id matches the :id from the URL.
        // const matchedProduct = resp.data.data?.find(
        //   (item) => String(item.id) === id
        // );

        
        if (resp.data) {
          setProduct(resp.data);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        console.log(err);
        setError("Could not load product. Please try again later.");
        console.log("Server response:", err.response?.data);
      } finally {
        setIsLoading(false);
      }
    };

    getSingleProduct();
  }, [id]);

const { addToCart } = useCart();

const handleAddToCart = () => {
  const added = addToCart({
    id: product.id,
    title: product.title,
    image: product.images?.[0],
    description: product.descp,
    currency: product.currency,
    price: Number(String(product.price).replace(/,/g, "")),
  });

  alert(added ? "Item added to cart" : "Product already exists in the cart");
};

  if (isLoading) {
    return (
      <div>
        <Navbar />
        <p className="px-6 py-10 text-sm text-neutral-500">Loading product...</p>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div>
        <Navbar />
        <p className="px-6 py-10 text-sm text-red-600">{error || "Product not found."}</p>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Product image */}
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="h-[500px] w-full object-cover"
          />

          {/* Product details */}
          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="mt-2 text-xl font-semibold">
              {product.currency} {product.price}
            </p>
            {product.descp && (
              <p className="mt-4 text-sm text-neutral-600">{product.descp}</p>
            )}

            {/* Color selector — hardcoded */}
            <div className="mt-6">
              <p className="text-sm font-medium">Colour</p>
              <div className="mt-2 flex gap-2 text-2xl">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                      selectedColor === color ? "border-black" : "border-transparent"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selector — hardcoded */}
            <div className="mt-6">
              <p className="text-sm font-medium">Size</p>
              <div className="mt-2 flex gap-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 w-10 rounded-md border text-sm font-medium ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-neutral-300 text-neutral-700 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to bag */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-black py-3 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              ADD TO BAG
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ProductPage;