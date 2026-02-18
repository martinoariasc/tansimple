export default function Story() {
    return (
        <section className="py-24 bg-[#fdfbf7]">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2">
                    <div className="aspect-[4/5] bg-neutral-200 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                            alt="Brand Story"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 space-y-8">
                    <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">Nuestra Filosofía</span>
                    <h2 className="text-4xl md:text-5xl premium-text leading-tight">
                        Belleza profesional, <br /> simplificada.
                    </h2>
                    <p className="text-neutral-600 font-light leading-relaxed text-lg">
                        En <strong>tan simple</strong>, creemos que cuidarte no debería ser una tarea costosa ni complicada.
                        Nuestra visión es democratizar la tecnología de estética profesional, llevándola directamente a tu hogar.
                    </p>
                    <p className="text-neutral-500 font-light leading-relaxed">
                        Eliminamos las complicaciones de las citas y los procesos dolorosos para darte el control total de tu rutina de belleza.
                        Porque al final del día, sentirte bien contigo misma debería ser así de simple.
                    </p>
                </div>
            </div>
        </section>
    );
}
