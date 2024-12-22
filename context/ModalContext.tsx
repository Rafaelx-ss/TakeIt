"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ModalTakeIt, ModalTakeItProps } from '@/components/modal-variants';

interface ModalQueueItem extends Omit<ModalTakeItProps, 'isOpen' | 'setIsOpen'> {}

interface ModalContextProps {
    showModal: (props: Omit<ModalTakeItProps, 'isOpen' | 'setIsOpen'>) => void;
    hideModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modalQueue, setModalQueue] = useState<ModalQueueItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const showModal = (props: Omit<ModalTakeItProps, 'isOpen' | 'setIsOpen'>) => {
        if (!isOpen) {
            setModalQueue(prev => [...prev, props]);
            setIsOpen(true);
        } else {
            setModalQueue(prev => [...prev, props]);
        }
    };

    const hideModal = () => {
        setIsOpen(false);
        setModalQueue(prev => {
            const [_, ...rest] = prev;
            if (rest.length > 0) {
                setTimeout(() => setIsOpen(true), 100);
            }
            return rest;
        });
    };

    const currentModal = modalQueue[0];

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            {children}
            {currentModal && (
                <ModalTakeIt
                    {...currentModal}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    onCancel={() => {
                        currentModal.onCancel?.();
                        hideModal();
                    }}
                    onConfirm={() => {
                        currentModal.onConfirm?.();
                        hideModal();
                    }}
                />
            )}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal debe ser usado dentro de un ModalProvider');
    }
    return context;
};