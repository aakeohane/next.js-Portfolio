'use client'
import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const MyProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal...");
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  const [isParRoute, setIsParRoute] = useState(false);
    const parRoute = () => setIsParRoute(!isParRoute);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, parRoute, isParRoute }}>
      {children}
    </ModalContext.Provider>
  );
};