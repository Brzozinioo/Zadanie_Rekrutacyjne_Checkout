import React from "react";

function AppModal({ modalContent }) {
    return (
        <div className="modalBackground">
            <div className="centerModal">{modalContent}</div>
        </div>
    );
}

export default AppModal;
