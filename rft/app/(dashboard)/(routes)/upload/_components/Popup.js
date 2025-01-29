import React, { useEffect } from 'react';
import './Popup.css'; // Import the CSS file for animations

function Popup({ onClose }) {
    useEffect(() => {
        // Automatically close the popup after 2 seconds
        const timer = setTimeout(() => {
            onClose();
        }, 2000);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="popup-container">
            <div className="popup-content">
                <p className="text-lg font-semibold">Upload is completed!</p>
            </div>
        </div>
    );
}

export default Popup;