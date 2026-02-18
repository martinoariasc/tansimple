'use client';

import { BuyNowButton } from "components/checkout/buy-now-button";
import { motion } from "framer-motion";
import { Product } from "lib/shopify/types";

export default function Hero({ product }: { product: Product | undefined }) {
    const price = product?.priceRange?.maxVariantPrice?.amount;
    const currencyCode = product?.priceRange?.maxVariantPrice?.currencyCode || "USD";

    return (
        <section className="min-h-screen flex items-center pt-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#8A8E75] mb-6 block font-semibold">
                        Inversión en ti
                    </span>
                    <h1 className="text-6xl md:text-8xl leading-[1.1] mb-8 text-[#2C2D23]">
                        La belleza de lo esencial. <br />
                        <span className="italic font-light italic">tan simple.</span>
                    </h1>
                    <p className="text-lg text-[#2C2D23]/70 font-light max-w-md leading-relaxed mb-10">
                        Libertad es dejar de contar los días para tu próxima cita. Es recuperar tu tiempo. Es sentir tu piel suave, siempre.
                        Diseño atemporal con eficacia probada en casa.
                        {price && <span className="block mt-4 text-xl font-medium">{new Intl.NumberFormat('es-ES', { style: 'currency', currency: currencyCode }).format(parseFloat(price))}</span>}
                    </p>
                    <div className="flex gap-8 items-center w-full sm:w-auto">
                        {product ? (
                            <BuyNowButton
                                product={product}
                                text="Descubre la Experiencia"
                                className="bg-[#2C2D23] text-[#F1EAD8] px-10 py-5 text-[11px] uppercase tracking-widest animate-pulse-premium hover:bg-[#8A8E75] transition-colors w-full sm:w-auto"
                            />
                        ) : (
                            <button className="bg-[#2C2D23] text-[#F1EAD8] px-10 py-5 text-[11px] uppercase tracking-widest animate-pulse-premium">
                                Descubre la Experiencia
                            </button>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="relative aspect-square w-full rounded-[60px] overflow-hidden shadow-2xl"
                >
                    <img
                        src={product?.featuredImage?.url || "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2070&auto=format&fit=crop"}
                        alt={product?.featuredImage?.altText || "IPL Device"}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2D23]/20 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
