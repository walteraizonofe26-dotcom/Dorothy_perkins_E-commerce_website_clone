import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo1.jpg"
import userIcon from "../assets/login_person.png";
import bagIcon from "../assets/cart-image.png";

const navItems = [
    { name: "Sale", path: "/sale" },
    { name: "New In", path: "/new-in" },
    { name: "Clothing", path: "/clothing" },
    { name: "Dresses", path: "/dresses" },
    { name: "Petite", path: "/petite" },
    { name: "Shoes & Accessories", path: "/shoes-accessories" },
    { name: "Beauty", path: "/beauty" },
    { name: "Home", path: "/home" },
    { name: "Brands", path: "/brands" },
];

function Navbar() {
    return (
        <header className="w-full">
            <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
                <Link to="/" className="shrink-0">
                    <img src={logo} alt="Dorothy Perkins logo" className="h-8 w-auto md:h-9" />
                </Link>



                {/* Search bar */}
                <div className="relative order-3 w-full md:order-none md:w-1/2">
                    <input
                        type="text"
                        placeholder="Search Products and Brands"
                        className="w-full rounded-full bg-[#f5f5f5] py-2.5 pl-4 pr-20 text-sm text-neutral-700 outline-none placeholder:text-neutral-500"
                    />
                    <div className="absolute right-4 top-1/2 flex -translate-y-1/2 gap-3">
                        <img
                            src={bagIcon}
                            alt="Search by image"
                            className="h-5 w-5 cursor-pointer"
                        />
                        <img
                            src={bagIcon}
                            alt="Search"
                            className="h-5 w-5 cursor-pointer"
                        />
                    </div>
                </div>

                {/* Right-side icons */}
                <div className="flex shrink-0 items-center gap-4">
                    <Link to="/login">
                        <img
                            src={userIcon}
                            alt="Account"
                            className="h-5 w-5 cursor-pointer"
                        />
                    </Link>
                    <img
                        src={bagIcon}
                        alt="Wishlist"
                        className="h-5 w-5 cursor-pointer"
                    />
                    <img
                        src={bagIcon}
                        alt="Shopping bag"
                        className="h-5 w-5 cursor-pointer"
                    />
                </div>
            </div>

            {/* ---------- NAVIGATION MENU ---------- */}
            <nav className="w-full bg-black">
                <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-3">

                    {navItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-[13px] tracking-wide text-white underline-offset-4 hover:underline ${isActive ? "underline" : ""
                                    } ${item.name === "Sale" ? "font-bold text-red-400" : ""}`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* ---------- PROMO BAR ---------- */}
            <div className="flex items-center justify-between bg-white px-4 py-2 text-xs font-semibold tracking-wide">
                <button aria-label="Previous promotion" className="px-2 text-neutral-500 hover:text-black">
                    &lt;
                </button>
                <p>At Least 20% Off Denim</p>
                <button aria-label="Next promotion" className="px-2 text-neutral-500 hover:text-black">
                    &gt;
                </button>
            </div>
        </header>

    );
}

export default Navbar