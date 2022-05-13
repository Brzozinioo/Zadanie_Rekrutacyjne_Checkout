import React from "react";

function AppHeaderIcon({ icon, title }) {
    return (
        <div className="d-flex w-100 justify-content-start align-items-center">
            <div className="d-flex">{icon}</div>
            <div className="d-flex text-white p-1 ms-1 fs-4">{title}</div>
        </div>
    );
}

export default AppHeaderIcon;
