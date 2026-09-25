import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsFilters from "../components/ProductsFilters";
import ProductGrid from "../components/ProductGrid";

const subCategories = [
    "Dresses",
    "Tops",
    "Jeans",
    "Summer Shoes & Accessories",
    "Summer Outfits",
    "Coats & Jackets",
    "Trousers",
];

// 15 New In products
const newInProducts = [
    { id: 1, brand: "Dorothy Perkins", name: "Berry Spot Petite Puff Sleeve Midi Shirt Dress", image: "/images/product12.jpg", price: "£39.00", oldPrice: null, discount: null, rating: null, reviews: null, colors: [] },
    { id: 2, brand: "Dorothy Perkins", name: "Floral Keyhole Midi Dress", image: "/images/product17.jpg", price: "£35.00", oldPrice: null, discount: null, rating: null, reviews: null, colors: [] },
    { id: 3, brand: "Dorothy Perkins", name: "Blue Spot V Neck Midi Dress", image: "/images/product16.jpg", price: "£31.20", oldPrice: "£39.00", discount: "-20%", rating: 4, reviews: 32, colors: [] },
    { id: 4, brand: "Dorothy Perkins", name: "Berry Zebra V Neck Midi Dress", image: "/images/product15.jpg", price: "£27.30", oldPrice: "£39.00", discount: "-30%", rating: 4, reviews: 20, colors: [] },
    { id: 5, brand: "Dorothy Perkins", name: "Belted Scuba Shift Mini Dress", image: "/images/product14.jpg", price: "£28.00", oldPrice: "£35.00", discount: "-20%", rating: 4, reviews: 3, colors: [] },
    { id: 6, brand: "Dorothy Perkins", name: "Ditsy Print Wrap Midi Dress", image: "/images/product13.jpg", price: "£32.00", oldPrice: null, discount: null, rating: null, reviews: null, colors: ["#5e6b3f", "#c94f4f"] },
    { id: 7, brand: "Dorothy Perkins", name: "Puff Sleeve Blouse", image: "/images/product11.jpg", price: "£20.00", oldPrice: "£28.00", discount: "-29%", rating: 5, reviews: 9, colors: ["#ffffff", "#111111"] },
    { id: 8, brand: "Dorothy Perkins", name: "Wide Leg Denim Jeans", image: "/images/product10.jpg", price: "£30.00", oldPrice: null, discount: null, rating: 4, reviews: 14, colors: ["#3a4a6b"] },
    { id: 9, brand: "Dorothy Perkins", name: "Belted Trench Coat", image: "/images/product9.jpg", price: "£55.00", oldPrice: "£70.00", discount: "-21%", rating: null, reviews: null, colors: ["#c9a15e", "#111111"] },
    { id: 10, brand: "Dorothy Perkins", name: "Tailored Wide Leg Trouser", image: "/images/product8.jpg", price: "£27.20", oldPrice: "£34.00", discount: "-20%", rating: 3, reviews: 6, colors: ["#111111", "#5a3d2b"] },
    { id: 11, brand: "Dorothy Perkins", name: "Animal Print Midi Skirt", image: "/images/product7.jpg", price: "£24.00", oldPrice: null, discount: null, rating: null, reviews: null, colors: [] },
    { id: 12, brand: "Dorothy Perkins", name: "Chunky Knit Jumper", image: "/images/product6.jpg", price: "£26.00", oldPrice: "£32.00", discount: "-19%", rating: 4, reviews: 11, colors: ["#e0d0b0", "#5a3d2b"] },
    { id: 13, brand: "Dorothy Perkins", name: "Ankle Strap Block Heel Sandals", image: "/images/product5.jpg", price: "£22.00", oldPrice: null, discount: null, rating: null, reviews: null, colors: [] },
    { id: 14, brand: "Dorothy Perkins", name: "Cropped Denim Jacket", image: "/images/product1.jpg", price: "£30.00", oldPrice: "£45.00", discount: "-33%", rating: 4, reviews: 8, colors: ["#3a4a6b"] },
    { id: 15, brand: "Dorothy Perkins", name: "Satin Cami Slip Dress", image: "/images/product4.jpg", price: "£24.00", oldPrice: null, discount: null, rating: 5, reviews: 2, colors: ["#8f1f3f", "#111111"] },
];

function NewIn() {
    return (
        <div>
            <Navbar />

            <main>
                <nav className="px-6 pt-4 text-xs text-neutral-500">
                    <a href="/" className="text-blue-700 hover:underline">Home</a>
                    {" / "}
                    <a href="/new-in" className="text-blue-700 hover:underline">New In</a>
                    {" / "}
                    <span>Womens New In</span>
                </nav>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-6 pb-2">
                    {subCategories.map((label) => (
                        <a key={label} href="#" className="text-sm text-neutral-800 underline-offset-4 hover:underline">
                            {label} </a>
                    ))}
                </div>
                <p className="pb-4 text-center text-sm text-green-700">1,000+ products</p>

                <ProductsFilters />
                <ProductGrid products={newInProducts} />
            </main>

            <Footer />
        </div>
    )
}

export default NewIn;