import { useState } from "react";

const shoppingLinks = [
    "Unlimited Delivery",
    "DP Deliver+",
    "Size Guide",
    "DebenhamsPay+",
    "Debenhams Mastercard",
    "Klarna",
    "PayPal",
    "Clearpay",
    "Student Beans",
    "UNiDAYS",
];

const customerCareLinks = [
    "Contact Us",
    "Return Your Order",
    "Frequently Asked Questions",
    "Delivery Information",
    "Returns Information",
    "Gift Card Balance",
];

const privacyLinks = [
    "Privacy Policy",
    "Terms & Conditions",
    "About Cookies",
    "Terms of Use",
    "Concessionaire Brands",
    "Product",
];

const moreFromDpLinks = ["Careers At DP", "Modern Slavery Statement"];

const brandLogos = [
    { name: "Debenhams", img: "debenhams.png" },
    { name: "Wallis", img: "wallis.png" },
    { name: "Oasis", img: "oasis-logo.png" },
    { name: "Coast", img: "coast.png" },
    { name: "Burton London", img: "burton-london.png" },
    { name: "Misspap", img: "misspap.png" },
    { name: "Warehouse", img: "warehouse.png" },
    { name: "Wallis+", img: "wallis-plus.png" },
];

const paymentIcons = [
    { name: "Visa", img: "visa.png" },
    { name: "Mastercard", img: "mastercard.png" },
    { name: "Amex", img: "amex.png" },
    { name: "Maestro", img: "maestro.png" },
    { name: "Visa Debit", img: "visa2.png" },
    { name: "Apple Pay", img: "apple-pay.png" },
    { name: "Pay", img: "pay.png" },
    { name: "PayPal", img: "paypal.png" },
    { name: "Klarna", img: "klarna.png" },
    { name: "Clearpay", img: "clearpay.png" },
    { name: "Google Pay", img: "google-pay.png" },
];

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
    };

    return (
        <footer className="w-full bg-white">
            {/* ---------- NEWSLETTER ---------- */}
            <div className="flex flex-col gap-6 bg-neutral-100 px-6 py-8 md:flex-row md:items-start md:justify-between">
                <div>
                    <h2 className="text-xl font-bold">Let's get to know each other</h2>
                    <p className="mt-1 text-sm text-neutral-600">
                        Sign up to receive emails from us, so you never miss out on the good stuff.
                    </p>
                </div>

                <form
                    onSubmit={handleSubscribe}
                    className="flex w-full max-w-xl flex-col gap-2 md:w-1/2"
                >
                    <div className="flex gap-0">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Please enter your email address"
                            className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none"
                        />
                        <button
                            type="submit"
                            className="shrink-0 bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                    <p className="text-xs text-neutral-500">
                        By submitting your details, you agree to receive marketing communications from
                        Dorothy Perkins & our{" "}
                        <a href="#" className="underline">
                            family of brands
                        </a>{" "}
                        by email. You can unsubscribe at any point. You also consent to the use of your
                        details in accordance with our{" "}
                        <a href="#" className="underline">
                            Privacy Policy.
                        </a>
                    </p>
                </form>
            </div>

            <div className="grid grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-3 md:grid-cols-5">
                <div>
                    <h3 className="mb-3 text-sm font-bold">Shopping with DP</h3>
                    <ul className="space-y-2">
                        {shoppingLinks.map((link) => (
                            <li key={link}>
                                <a href="#" className="text-sm text-blue-700 hover:underline">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="mb-3 text-sm font-bold">Customer Care</h3>
                    <ul className="space-y-2">
                        {customerCareLinks.map((link) => (
                            <li key={link}>

                               <a href="#"
                                className={`text-sm text-blue-700 hover:underline ${link === "Delivery Information" ? "underline" : ""
                                    }`}>
                                {link}
                            </a>
              </li>
            ))}
                </ul>
            </div>

            <div>
                <h3 className="mb-3 text-sm font-bold">Privacy & Legal</h3>
                <ul className="space-y-2">
                    {privacyLinks.map((link) => (
                        <li key={link}>
                            <a href="#" className="text-sm text-blue-700 hover:underline">
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="mb-3 text-sm font-bold">More From DP</h3>
                <ul className="space-y-2">
                    {moreFromDpLinks.map((link) => (
                        <li key={link}>
                            <a href="#" className="text-sm text-blue-700 hover:underline">
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="mb-3 text-sm font-bold">Follow Us On Social Media</h3>
                <div className="flex gap-4">
                    <img src="instagram-icon.png" alt="Instagram" className="h-5 w-5 cursor-pointer" />
                    <img src="facebook-icon.png" alt="Facebook" className="h-5 w-5 cursor-pointer" />
                </div>

                <h3 className="mb-3 mt-6 text-sm font-bold">Download Our App</h3>
                <div className="flex flex-col gap-2">
                    <img
                        src="google-play-badge.png"
                        alt="Get it on Google Play"
                        className="h-10 w-auto cursor-pointer"
                    />
                    <img
                        src="app-store-badge.png"
                        alt="Download on the App Store"
                        className="h-10 w-auto cursor-pointer"
                    />
                </div>
            </div>
        </div>

      {/* ---------- BRAND LOGOS + PAYMENT ICONS ---------- */ }
    <div className="flex flex-col gap-6 border-t border-neutral-200 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-6">
            {brandLogos.map((brand) => (
                <img
                    key={brand.name}
                    src={brand.img}
                    alt={brand.name}
                    className="h-5 w-auto object-contain"
                />
            ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
            {paymentIcons.map((payment) => (
                <img
                    key={payment.name}
                    src={payment.img}
                    alt={payment.name}
                    className="h-6 w-auto object-contain"
                />
            ))}
        </div>
    </div>

    {/* ---------- COPYRIGHT ---------- */ }
    <div className="border-t border-neutral-200 py-6 text-center">
        <p className="text-lg font-black">DP.</p>
        <p className="text-xs text-neutral-500">COPYRIGHT © 2026 DOROTHY PERKINS</p>
    </div>
    </footer >
  );
}