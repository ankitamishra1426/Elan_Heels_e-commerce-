import { Button } from "@/components/ui/button";
import heroImage from "@/assets/images/hero/hero.png";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden ">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Luxury Heel"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8">

        <div className="max-w-xl">

          <span className="rounded-full border border-[#C7A45A] px-6 py-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            Limited Edition
          </span>

          <h1 className="mt-8 font-serif text-6xl leading-tight text-white">
            The Autumn /
            <br />
            Winter Collection
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-200">
            Sculptural silhouettes crafted for the modern woman.
            Discover timeless elegance and luxurious comfort.
          </p>

          <div className="mt-10 flex gap-5">

            <Button
              className="rounded-full bg-[#C7A45A] px-8 py-7 text-black hover:bg-[#D4AF37]"
            >
              Shop Collection
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-white bg-transparent px-8 py-7 text-white hover:bg-white hover:text-black"
            >
              Explore
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}