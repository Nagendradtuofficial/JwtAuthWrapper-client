import React from "react";
import './styles.css';

export const Loader = () => {
    return (
        <div className="loader">
            <div className="spinner">
                {[...Array(12)].map((_, index) => (
                    <div key={index} className="spinner-blade" style={{ '--i': index }}></div>
                ))}
            </div>
        </div>
    );
}