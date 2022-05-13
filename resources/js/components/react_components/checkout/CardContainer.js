import React from "react";
import AppHeaderIcon from "./AppHeaderIcon";

function CardContainer({ icon, title, children, ...props }) {
    return (
        <div className="row mb-5">
            <div className="d-flex col-12 cardHeader rounded">
                <AppHeaderIcon icon={icon} title={title} />
            </div>
            <div className="d-flex col-12 p-0">{children}</div>
        </div>
    );
}

export default CardContainer;
