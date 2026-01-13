'use client'
import React, { createContext, useState, useEffect } from 'react';

export const ModalContext = createContext();

export const MyProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(null);
  const [isParRoute, setIsParRoute] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Function to toggle isParRoute
  const parRoute = () => setIsParRoute(!isParRoute);

  // Update windowWidth on resize
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial window width
    updateWindowWidth();

    // Add event listener for window resize
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, parRoute, isParRoute, windowWidth }}>
      {children}
    </ModalContext.Provider>
  );
};