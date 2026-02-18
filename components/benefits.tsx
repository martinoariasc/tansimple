export default function Benefits() {
    const items = [
        {
            title: "Eficacia Real",
            description: "Resultados visibles desde las primeras 4 sesiones de uso continuo.",
            icon: "✨"
        },
        {
            title: "Sin Complicaciones",
            description: "Un solo botón, 5 niveles y sensor inteligente. Es tan simple como deslizar.",
            icon: "🔘"
        },
        {
            title: "Seguridad Total",
            description: "Certificación internacional para cuidar tu piel mientras eliminas el vello.",
            icon: "🛡️"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl text-center mb-16 premium-text">¿Por qué elegir tan simple?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {items.map((item, index) => (
                        <div key={index} className="text-center group p-8 hover:bg-[#fdfbf7] transition-colors duration-500">
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h3 className="text-lg mb-4 tracking-widest">{item.title}</h3>
                            <p className="text-neutral-500 font-light leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
