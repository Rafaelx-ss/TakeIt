"use client"

import ReactDOM from 'react-dom';
import { useState, useEffect } from "react"
import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
    Modal,
    ModalContent, 
    ModalDescription,
    ModalHeader,
    ModalTitle,
    ModalFooter,
} from "@/components/ui/modal"

export interface ModalTakeItProps {
    title: string
    description: string
    variant: "success" | "error" | "warning" | "info" | "delete"
    onConfirm?: () => void
    onCancel?: () => void
    timer?: number
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

const iconVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
        scale: 1, 
        opacity: 1, 
        transition: { 
            type: "spring",
            stiffness: 260,
            damping: 20
        } 
    },
    hover: { 
        scale: 1.1,
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.3 }
    }
}

export function ModalTakeIt({
    title,
    description,
    variant,
    onConfirm,
    onCancel,
    timer,
    isOpen,
    setIsOpen
}: ModalTakeItProps) {
    const [progress, setProgress] = useState(100);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isOpen && timer) {
            setProgress(100);
            interval = setInterval(() => {
                setProgress((prevProgress) => {
                    if (prevProgress <= 0) {
                        clearInterval(interval);
                        setIsOpen(false);
                        return 0;
                    }
                    return prevProgress - (100 / (timer * 10));
                });
            }, 100);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isOpen, timer, setIsOpen]);

    const handleConfirm = () => {
        onConfirm?.();
        setIsOpen(false);
    };

    const handleCancel = () => {
        onCancel?.();
        setIsOpen(false);
    };

    const getIcon = () => {
        const iconProps = {
            className: "w-6 h-6",
            variants: iconVariants,
            initial: "hidden",
            animate: "visible",
            whileHover: "hover"
        };

        switch (variant) {
            case "success":
                return <motion.div {...iconProps}><CheckCircle className="text-green-500" /></motion.div>;
            case "error":
                return <motion.div {...iconProps}><XCircle className="text-red-500" /></motion.div>;
            case "warning":
                return <motion.div {...iconProps}><AlertTriangle className="text-yellow-500" /></motion.div>;
            case "info":
                return <motion.div {...iconProps}><Info className="text-blue-500" /></motion.div>;
            case "delete":
                return <motion.div {...iconProps}><AlertTriangle className="text-red-500" /></motion.div>;
            default:
                return null;
        }
    };

    const getButtonColor = () => {
        switch (variant) {
            case "success":
                return "bg-green-500 hover:bg-green-600";
            case "error":
                return "bg-red-500 hover:bg-red-600";
            case "warning":
                return "bg-yellow-500 hover:bg-yellow-600";
            case "info":
                return "bg-blue-500 hover:bg-blue-600";
            case "delete":
                return "bg-red-500 hover:bg-red-600";
            default:
                return "";
        }
    };

    const modalContent = (
        <Modal open={isOpen} onOpenChange={setIsOpen} >
            <AnimatePresence >
                {isOpen && (
                    <ModalContent forceMount>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="pt-5"
                        >
                            <ModalHeader className="mb-4">
                                <div className="flex items-center gap-2">
                                    {getIcon()}
                                    <ModalTitle>{title}</ModalTitle>
                                </div>
                                <ModalDescription>{description}</ModalDescription>
                            </ModalHeader>
                            <ModalFooter className="mb-4">
                                {variant !== "success" && variant !== "info" && variant !== "error" && (
                                    <Button variant="outline" onClick={handleCancel}>
                                        Cancelar
                                    </Button>
                                )}
                                <Button className={getButtonColor()} onClick={handleConfirm}>
                                    {variant === "delete" ? "Eliminar" : "Aceptar"}
                                </Button>
                            </ModalFooter>
                            {timer && (
                                <div className="mt-4 text-xs text-muted-foreground">
                                    <div className="flex justify-between mb-1">
                                        <span>Cerrando en {Math.ceil(progress / 100 * timer)} segundos</span>
                                    </div>
                                    <Progress value={progress} className="h-1 bg-muted" />
                                </div>
                            )}
                        </motion.div>
                    </ModalContent>
                )}
            </AnimatePresence>
        </Modal>
    );

    return mounted ? modalContent : null;
}
