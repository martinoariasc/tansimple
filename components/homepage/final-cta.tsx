'use client';

import { AddToCart } from "components/cart/add-to-cart";
import { motion } from "framer-motion";
import { Product } from "lib/shopify/types";
import { ShieldCheck } from "lucide-react";

export const FinalCta = ({ product }: { product: Product | undefined }) => (
    <section className="py-40 px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-12"
        >
            <div className="inline-block p-4 rounded-full bg-[#BEC5A4]/20 text-[#8A8E75] mb-4">
                <ShieldCheck size={32} />
            </div>
            <h2 className="text-5xl md:text-7xl premium-text leading-tight text-[#2C2D23]">
                Vuelve a lo esencial. <br /> Pruébalo sin riesgos.
            </h2>
            <p className="text-lg text-[#2C2D23]/60 font-light">
                90 días de garantía de satisfacción. Si no crees que es <span className="italic">tan simple</span> como prometemos, te devolvemos el 100% de tu inversión.
            </p>
            <div className="pt-8 flex justify-center w-full">
                {product ? (
                    <AddToCart
                        product={product}
                        className="bg-[#8A8E75] text-[#F1EAD8] px-16 py-6 text-xs uppercase tracking-[0.3em] font-bold animate-pulse-premium hover:shadow-2xl transition-all w-full sm:w-auto flex justify-center items-center"
                    />
                ) : (
                    <button className="bg-[#8A8E75] text-[#F1EAD8] px-16 py-6 text-xs uppercase tracking-[0.3em] font-bold animate-pulse-premium hover:shadow-2xl transition-all">
                        Reservar Mi Depiladora
                    </button>
                )}
            </div>
        </motion.div>
    </section>
);
