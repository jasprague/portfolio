
'use client'
import React, { useState, FC, ReactNode } from 'react';
import Ctx from './ctx';

export const CtxProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
      console.log('Ctx is working')
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };

    return (
        <Ctx.Provider value={{isMobileOrTablet, setIsMobileOrTablet, isModalOpen, setModalOpen, handleOpenModal, handleCloseModal}}>
            {children}
        </Ctx.Provider>
    );
};
