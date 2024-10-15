'use client'
import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const MyProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};