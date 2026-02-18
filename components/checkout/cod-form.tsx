"use client";

import { paraguayLocations } from "lib/locations";
import { Product } from "lib/shopify/types";
import { useActionState, useState } from "react";
import { createCodOrder } from "./actions";

// Submit Button Component
function SubmitButton({ pending }: { pending: boolean }) {
    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full rounded-full bg-[#8A8E75] px-4 py-3 text-sm font-bold uppercase tracking-widest text-[#F1EAD8] hover:bg-[#2C2D23] hover:shadow-lg transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed mt-6"
        >
            {pending ? "Procesando..." : "Confirmar Pedido - Pago Contra Entrega"}
        </button>
    );
}

export function CodForm({ product }: { product: Product | undefined }) {
    const [department, setDepartment] = useState("");
    const [cities, setCities] = useState<string[]>([]);
    // Use useActionState directly with the import
    const [state, formAction, isPending] = useActionState(createCodOrder, null);

    const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDept = e.target.value;
        setDepartment(selectedDept);
        const location = paraguayLocations.find((loc) => loc.department === selectedDept);
        setCities(location ? location.cities : []);
    };

    if (!product) return <div>Cargando producto...</div>;

    return (
        <form action={formAction} className="space-y-4">
            <input type="hidden" name="variantId" value={product.variants[0]?.id} />

            {/* Información del Producto (Resumen visual) */}
            <div className="flex gap-4 items-center bg-[#2C2D23]/5 p-3 rounded-lg mb-4">
                <div className="h-16 w-16 bg-white rounded-md overflow-hidden relative border border-[#D5C7AD]/20 flex-shrink-0">
                    <img src={product.featuredImage?.url} alt={product.title} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-[#2C2D23]">{product.title}</h4>
                    <p className="text-xs text-[#2C2D23]/60">Pago en efectivo al recibir</p>
                </div>
            </div>

            <div>
                <label htmlFor="name" className="block text-xs font-medium text-[#2C2D23]/60 uppercase tracking-wider mb-1">
                    Nombre Completo
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="block w-full rounded-md border-0 py-2.5 px-3 text-[#2C2D23] shadow-sm ring-1 ring-inset ring-[#D5C7AD] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#8A8E75] sm:text-sm sm:leading-6 bg-white/50"
                    placeholder="Ej: Juan Pérez"
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-xs font-medium text-[#2C2D23]/60 uppercase tracking-wider mb-1">
                    Teléfono / WhatsApp
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="block w-full rounded-md border-0 py-2.5 px-3 text-[#2C2D23] shadow-sm ring-1 ring-inset ring-[#D5C7AD] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#8A8E75] sm:text-sm sm:leading-6 bg-white/50"
                    placeholder="Ej: 0981 123 456"
                />
            </div>

            <div>
                <label htmlFor="address" className="block text-xs font-medium text-[#2C2D23]/60 uppercase tracking-wider mb-1">
                    Dirección de Entrega
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="block w-full rounded-md border-0 py-2.5 px-3 text-[#2C2D23] shadow-sm ring-1 ring-inset ring-[#D5C7AD] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#8A8E75] sm:text-sm sm:leading-6 bg-white/50"
                    placeholder="Calle, Número de casa, Referencia"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="department" className="block text-xs font-medium text-[#2C2D23]/60 uppercase tracking-wider mb-1">
                        Departamento
                    </label>
                    <select
                        id="department"
                        name="department"
                        required
                        value={department}
                        onChange={handleDepartmentChange}
                        className="block w-full rounded-md border-0 py-2.5 px-3 text-[#2C2D23] shadow-sm ring-1 ring-inset ring-[#D5C7AD] focus:ring-2 focus:ring-inset focus:ring-[#8A8E75] sm:text-sm sm:leading-6 bg-white/50"
                    >
                        <option value="">Selecciona...</option>
                        {paraguayLocations.map((loc) => (
                            <option key={loc.department} value={loc.department}>
                                {loc.department}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="city" className="block text-xs font-medium text-[#2C2D23]/60 uppercase tracking-wider mb-1">
                        Ciudad
                    </label>
                    <select
                        id="city"
                        name="city"
                        required
                        disabled={!department}
                        className="block w-full rounded-md border-0 py-2.5 px-3 text-[#2C2D23] shadow-sm ring-1 ring-inset ring-[#D5C7AD] focus:ring-2 focus:ring-inset focus:ring-[#8A8E75] sm:text-sm sm:leading-6 bg-white/50 disabled:opacity-50"
                    >
                        <option value="">Selecciona...</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {state && (
                <p className={`text-sm text-center ${state.success ? 'text-green-600' : 'text-red-500'}`}>
                    {state.message}
                </p>
            )}

            <SubmitButton pending={isPending} />
        </form>
    );
}
