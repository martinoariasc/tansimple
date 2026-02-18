"use client";

import clsx from "clsx";
import { Product } from "lib/shopify/types";
import { useState } from "react";
import CodModal from "./cod-modal";

export function BuyNowButton({
    product,
    className,
    text = "Comprar Ahora"
}: {
    product: Product | undefined;
    className?: string;
    text?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={clsx(
                    "relative flex items-center justify-center rounded-full bg-[#8A8E75] p-4 text-white hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-60",
                    className
                )}
                disabled={!product?.availableForSale}
            >
                {text}
            </button>

            <CodModal
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                product={product}
            />
        </>
    );
}
