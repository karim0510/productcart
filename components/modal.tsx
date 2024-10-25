// This is Modal component

import React, {ReactNode} from 'react';

interface modalDataType {
    isOpen: boolean,
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void,
    children: ReactNode
}

const Modal = (props: modalDataType) => {

    const { isOpen, onClose, children } = props;
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
            <div className="bg-hemocyanin p-4 rounded-lg shadow-lg w-[350px]">
                <div className="flex justify-between items-center">
                    <div>Cart</div>
                    <button onClick={onClose} className="text-white text-xl">&times;</button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;