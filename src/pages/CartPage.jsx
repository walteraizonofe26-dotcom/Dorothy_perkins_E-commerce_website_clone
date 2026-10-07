import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const currency = cart[0]?.currency || "";

  if (cart.length === 0) {
    return (
      <div>
        <Navbar />
        <main className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-2xl font-bold">Your cart is empty</h1>
          <Link to="/" className="mt-4 inline-block underline">Continue shopping</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-2xl font-bold">Your Cart</h1>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 border-b border-neutral-200 pb-6 sm:flex-row">
                <img src={item.image} alt={item.title} className="h-32 w-32 shrink-0 object-cover" />

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
                    <p className="mt-2 text-sm text-neutral-600">
                      {item.currency} {item.price.toLocaleString()} each
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <button onClick={() => decreaseQuantity(item.id)} aria-label="Decrease quantity"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100">−</button>
                      <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)} aria-label="Increase quantity"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100">+</button>
                    </div>

                    <p className="text-sm font-semibold">
                      {item.currency} {(item.price * item.quantity).toLocaleString()}
                    </p>

                    <button onClick={() => removeFromCart(item.id)}
                      className="text-sm font-medium text-red-600 hover:underline">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-fit rounded-lg border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <div className="mt-4 flex justify-between text-sm text-neutral-600">
              <span>Subtotal</span>
              <span>{currency} {totalPrice.toLocaleString()}</span>
            </div>
            <div className="mt-2 flex justify-between border-t border-neutral-200 pt-4 text-base font-semibold">
              <span>Total</span>
              <span>{currency} {totalPrice.toLocaleString()}</span>
            </div>
            <button className="mt-6 w-full bg-black py-3 text-sm font-semibold text-white hover:bg-neutral-800">
              CHECKOUT
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CartPage;