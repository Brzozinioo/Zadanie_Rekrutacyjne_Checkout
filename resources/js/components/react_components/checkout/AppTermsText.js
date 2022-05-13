import React from "react";

function AppTermsText(props) {
    return (
        <p className="d-flex ms-2 fw-bold m-0">
            Zapoznałam/em się z
            <a
                className="px-1 text-decoration-none"
                href="#"
                onClick={() => {
                    alert("Otwarcie regulaminu");
                }}
            >
                Regulaminem
            </a>{" "}
            zakupów
        </p>
    );
}

export default AppTermsText;
