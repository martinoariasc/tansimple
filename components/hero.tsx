import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-[#fdfbf7]">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Skincare"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 hero-gradient"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl">
                <span className="text-xs uppercase tracking-[0.3em] mb-4 block animate-fade-in premium-text">
                    Tecnología de Estética Profesional en Casa
                </span>
                <h1 className="text-5xl md:text-7xl mb-6 premium-text">
                    La libertad de una piel suave, ahora es <span className="font-light italic">tan simple.</span>
                </h1>
                <p className="text-lg md:text-xl mb-10 text-neutral-600 font-light max-w-2xl mx-auto">
                    ¿Cansada de las rutinas de depilación dolorosas? Creemos que la tecnología de punta no debería ser complicada.
                </p>
                <Link
                    href="/search"
                    className="inline-block px-12 py-4 bg-black text-white text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all"
                >
                    Quiero mi piel suave hoy
                </Link>
            </div>
        </section>
    );
}
