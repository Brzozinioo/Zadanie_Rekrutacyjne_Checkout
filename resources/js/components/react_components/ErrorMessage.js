import React from "react";

function ErrorMessage(props) {
    return (
        <div className="d-flex m-0 p-0">
            <div className="errorMessage">
                <p className="d-flex fw-bold m-0 ">{props.text}</p>
            </div>
        </div>
    );
}

export default ErrorMessage;
