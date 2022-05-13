import React from "react";
import ErrorMessage from "./ErrorMessage";

function AppCheckbox({
    name,
    text,
    onChange,
    value,
    touched,
    error,
    ...props
}) {
    return (
        <div className="d-flex w-100 row p-0 m-0  mb-4 p-0 ">
            <div className="d-flex justify-content-start align-items-center col-12 p-0 m-0 ">
                <input
                    className="customCheckbox"
                    type="checkbox"
                    name={name}
                    onChange={onChange}
                    checked={value}
                    {...props}
                />

                {typeof text === "string" ? (
                    <p className="d-flex ms-2 fw-bold m-0">{text}</p>
                ) : (
                    text
                )}
            </div>
            {touched && error && (
                <div className="d-flex col-12 p-0 m-0">
                    <ErrorMessage text={error} />
                </div>
            )}
        </div>
    );
}

export default AppCheckbox;
