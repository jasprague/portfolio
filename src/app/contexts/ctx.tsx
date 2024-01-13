import React from 'react';

interface CtxType {
    isMobileOrTablet: boolean
    setIsMobileOrTablet: (isMobileOrTablet:boolean) => void
    handleOpenModal: () => void
    handleCloseModal: () => void
    isModalOpen: boolean
    setModalOpen: (isModalOpen:boolean) => void
}

const defaultCtx: CtxType = {
    isMobileOrTablet: false,
    setIsMobileOrTablet: () => {},
    handleOpenModal: () => {},
    handleCloseModal: () => {},
    isModalOpen: false,
    setModalOpen: () => {}
}

const Ctx = React.createContext(defaultCtx);
export default Ctx;