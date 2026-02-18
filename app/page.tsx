import Hero from "components/hero";
import { FinalCta } from "components/homepage/final-cta";
import { ComparisonTable, Navbar, RitualSection, TechSection } from "components/homepage/sections";
import { getProducts } from "lib/shopify";

export default async function ScrollytellingPage() {
  // Obtenemos los productos ordenados por los más vendidos
  const products = await getProducts({ sortKey: "BEST_SELLING", reverse: true });
  const mainProduct = products.length > 0 ? products[0] : undefined;

  return (
    <main className="bg-[#F1EAD8] text-[#2C2D23] selection:bg-[#BEC5A4] selection:text-[#F1EAD8]">
      <Navbar />
      <Hero product={mainProduct} />
      <div className="h-32" />
      <TechSection />
      <RitualSection />
      <ComparisonTable />
      <FinalCta product={mainProduct} />
      <footer className="py-20 border-t border-[#D5C7AD]/30 text-center">
        <div className="text-xl font-light tracking-[0.2em] text-[#2C2D23] uppercase mb-8">tan simple</div>
        <p className="text-[10px] uppercase tracking-widest text-[#2C2D23]/30">© 2026 tan simple. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
