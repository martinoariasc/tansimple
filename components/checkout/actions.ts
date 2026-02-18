"use server";

export async function createCodOrder(prevState: any, formData: FormData) {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const department = formData.get("department") as string;
    const city = formData.get("city") as string;
    const variantId = formData.get("variantId") as string;

    // Validación básica
    if (!name || !phone || !address || !department || !city || !variantId) {
        return { success: false, message: "Por favor completa todos los campos." };
    }

    // AQUÍ INTEGRACIÓN CON SHOPIFY ADMIN API
    // Como no tenemos token de Admin todavía, simularemos el éxito
    // Idealmente:
    // 1. fetch('https://mi-tienda.myshopify.com/admin/api/2023-10/orders.json', ...)
    // 2. POST { order: { line_items: [...], shipping_address: {...}, financial_status: 'pending' } }

    console.log("Creando pedido COD para:", { name, phone, address, location: `${city}, ${department}`, variantId });

    // Simulación de retraso de red
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Retornar éxito
    return {
        success: true,
        message: "¡Pedido recibido! Te escribiremos al WhatsApp para confirmar."
    };
}
