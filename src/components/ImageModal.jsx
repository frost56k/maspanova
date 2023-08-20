'use client'

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@/configs/icons'
import Image from "next/image";

const ImageModal = ({ src, alt }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
                  <Image
            src={src}
            alt={alt}
            width={400}
            height={300}
            quality={50}
            className='object-cover h-auto max-w-full rounded-lg'
            onClick={handleOpen}
        />
            {isOpen && ReactDOM.createPortal(
                <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75">
                    <div className="fixed bg-gray w-11/12 max-w-2xl lg:p-8 rounded-lg shadow-xl">
                        <button
                            className="fixed mt-12 ld:mt-4 top-2 right-4 md:right-8 text-gray-500 hover:text-white"
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </button>
                        <img src={src} alt={alt} />
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default ImageModal;