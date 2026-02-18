"use client";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Product } from "lib/shopify/types";
import { Fragment } from "react";
import { CodForm } from "./cod-form";

export default function CodModal({
    isOpen,
    closeModal,
    product
}: {
    isOpen: boolean;
    closeModal: () => void;
    product: Product | undefined;
}) {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={closeModal} className="relative z-50">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
                </Transition.Child>

                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-[#FDFBF7] p-6 text-left align-middle shadow-xl transition-all border border-[#D5C7AD]/40">
                            <div className="flex justify-between items-center mb-6 border-b border-[#D5C7AD]/20 pb-4">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-[#2C2D23] uppercase tracking-widest"
                                >
                                    Pedido Rápido
                                </Dialog.Title>
                                <button
                                    type="button"
                                    className="rounded-md bg-transparent text-[#2C2D23]/50 hover:text-[#2C2D23] focus:outline-none"
                                    onClick={closeModal}
                                >
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            <div className="mt-2">
                                <p className="text-sm text-[#2C2D23]/70 mb-6 font-light">
                                    Completa tus datos para el envío. Pagas al recibir el producto.
                                </p>
                                <CodForm product={product} />
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}
