import { Link, NavLink } from "react-router-dom";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const leftLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "New Arrivals",
    path: "/new-arrivals",
  },
  {
    title: "Collections",
    path: "/collections",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between rounded-full border bg-white/30 border-white/30 px-10 shadow-2xl backdrop-blur-xl">

          {/* LEFT */}
          <div className="flex items-center gap-10">
            {leftLinks.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                    isActive
                      ? "text-black"
                      : "text-neutral-600 hover:text-black"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.title}
                    {isActive && (
                      <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-black"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CENTER LOGO */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 text-3xl font-serif tracking-[0.35em]"
          >
            ÉLAN
          </Link>

          {/* RIGHT */}
          <div className="flex items-center gap-6">

            <NavLink
              to="/about"
              className="text-xs uppercase tracking-[0.18em] text-neutral-700 hover:text-black"
            >
              About
            </NavLink>

            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

          </div>

        </div>
      </div>
    </header>
  );
}