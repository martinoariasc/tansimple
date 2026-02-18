'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Sparkles, Zap } from 'lucide-react';
import React, { useRef } from 'react';

export const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 premium-blur border-b border-[#D5C7AD]/20 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-2xl font-light tracking-[0.2em] text-[#2C2D23] uppercase">
                tan simple
            </div>
            <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] text-[#2C2D23]/60">
                <a href="#tech" className="hover:text-[#2C2D23] transition-colors">Tecnología</a>
                <a href="#results" className="hover:text-[#2C2D23] transition-colors">Resultados</a>
                <a href="#ritual" className="hover:text-[#2C2D23] transition-colors">El Ritual</a>
            </div>
            <button className="bg-[#8A8E75] text-[#F1EAD8] px-8 py-3 text-[10px] uppercase tracking-widest hover:opacity-90 transition-all">
                Comprar Ahora
            </button>
        </div>
    </nav>
);

export const TechSection = () => (
    <section id="tech" className="py-32 px-6 bg-[#2C2D23]">
        <div className="max-w-7xl mx-auto text-center mb-24">
            <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] uppercase tracking-[0.4em] text-[#BEC5A4] mb-4 block"
            >
                Tecnología Invisible
            </motion.span>
            <h2 className="text-4xl md:text-6xl text-[#F1EAD8] premium-text">Grado Clínico en tus Manos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
                { icon: <ShieldCheck />, title: "Sensor Inteligente", desc: "Ajuste automático según tu tono de piel para máxima seguridad." },
                { icon: <Zap />, title: "900,000 Flashes", desc: "Diseñada para durar toda una vida de tratamientos y retoques." },
                { icon: <Sparkles />, title: "Eficacia Probada", desc: "Reducción permanente del vello visible en solo 4 sesiones." }
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="glass-card p-12 text-center group"
                >
                    <div className="text-[#BEC5A4] flex justify-center mb-8 scale-150 group-hover:scale-[1.7] transition-transform duration-500">
                        {item.icon}
                    </div>
                    <h3 className="text-[#F1EAD8] text-xl mb-4 tracking-wider">{item.title}</h3>
                    <p className="text-[#F1EAD8]/60 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
        </div>
    </section>
);

const RitualStep = ({ number, title, desc, isActive }: { number: string, title: string, desc: string, isActive: boolean }) => (
    <motion.div
        animate={{ opacity: isActive ? 1 : 0.2, x: isActive ? 0 : -20 }}
        className="mb-32 last:mb-0"
    >
        <div className="flex items-baseline gap-6 mb-4">
            <span className="text-5xl font-light italic text-[#8A8E75]">{number}</span>
            <h3 className="text-3xl text-[#2C2D23] tracking-wide">{title}</h3>
        </div>
        <p className="text-[#2C2D23]/70 font-light text-lg max-w-sm ml-12">
            {desc}
        </p>
    </motion.div>
);

export const RitualSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const activeIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 2]);

    return (
        <section id="ritual" ref={containerRef} className="py-32 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-20">
                <div className="w-full md:w-1/2">
                    <div className="sticky top-1/4">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#8A8E75] mb-6 block">El Ritual</span>
                        <div className="space-y-24">
                            <RitualStep number="01" title="Rasura" desc="Prepara el lienzo. Una piel limpia y afeitada permite que la luz llegue directo a la raíz." isActive={true} />
                            <RitualStep number="02" title="Pulsa" desc="Desliza suavemente. El sensor inteligente se encarga de la potencia perfecta para ti." isActive={true} />
                            <RitualStep number="03" title="Brilla" desc="Resultados permanentes. Disfruta de la libertad de estar lista, siempre." isActive={true} />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="sticky top-20 aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                            alt="Model ritual"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export const ComparisonTable = () => (
    <section className="py-32 px-6 bg-[#F1EAD8] border-y border-[#D5C7AD]/30">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-center mb-20 premium-text">La Elección Consciente</h2>

            <div className="grid grid-cols-4 gap-4 items-center">
                {/* Encabezados */}
                <div className="col-span-1"></div>
                <div className="text-center p-6 bg-[#2C2D23] text-[#F1EAD8] rounded-t-3xl">
                    <span className="text-[10px] uppercase tracking-widest font-bold">tan simple</span>
                </div>
                <div className="text-center p-6 text-[#2C2D23]/40 uppercase text-[9px] tracking-widest">Cera Tradicional</div>
                <div className="text-center p-6 text-[#2C2D23]/40 uppercase text-[9px] tracking-widest">Servicio Clínico</div>

                {/* Filas */}
                {[
                    { label: "Coste a largo plazo", values: ["$ - Inversión única", "$$$ - Mensual", "$$$$ - Alto"] },
                    { label: "Dolor", values: ["Imperceptible", "Alto", "Moderado"] },
                    { label: "Comodidad", values: ["Tu hogar", "Salón", "Clínica"] },
                    { label: "Resultados", values: ["Permanentes", "Temporales", "Permanentes"] }
                ].map((row, i) => (
                    <React.Fragment key={i}>
                        <div className="col-span-1 py-8 text-[11px] uppercase tracking-wider font-semibold text-[#2C2D23]/60 border-b border-[#D5C7AD]/20">{row.label}</div>
                        <div className={`text-center py-8 border-b border-[#D5C7AD]/20 ${i === 3 ? 'rounded-b-3xl' : ''} bg-[#8A8E75]/5 text-[#2C2D23] text-sm`}>
                            {row.values[0]}
                        </div>
                        <div className="text-center py-8 border-b border-[#D5C7AD]/20 text-[#2C2D23]/50 text-xs">{row.values[1]}</div>
                        <div className="text-center py-8 border-b border-[#D5C7AD]/20 text-[#2C2D23]/50 text-xs">{row.values[2]}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    </section>
);
