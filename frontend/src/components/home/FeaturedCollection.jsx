import ProductCard from "@/components/common/ProductCard";
import { featuredProducts } from "@/data/products";
import { Button } from "@/components/ui/button";

export default function FeaturedCollection() {
  return (
    <section className="bg-[#F8F6F2] py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">

          <p className="mb-3 uppercase tracking-[0.3em] text-[#C7A45A]">
            Featured Collection
          </p>

          <h2 className="font-serif text-5xl">
            Crafted For Every Occasion
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-500">
            Discover our carefully curated luxury heels that combine
            elegance, comfort, and timeless fashion.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
            />
          ))}

        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">

          <Button
            size="lg"
            className="rounded-full bg-black px-10 hover:bg-neutral-800"
          >
            View All Collection
          </Button>

        </div>

      </div>

    </section>
  );
}