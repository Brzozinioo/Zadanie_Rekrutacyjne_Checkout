import React from "react";

function AppInput({
    type,
    name,
    width,
    placeholder,
    value,
    className,
    onChange,
    touched,
    error,
    ...props
}) {
    return (
        <div
            className={["d-flex row m-0 mb-2 w-100  p-0", className].join(" ")}
        >
            <div className="d-flex w-100 p-0 m-0">
                <input
                    className="formTextInput"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    {...props}
                />
            </div>
            {touched && error && (
                <div className="d-flex flex-grow-1 p-0 m-0">
                    <div className="d-flex fw-bold m-0 errorMessage ">
                        {error}
                    </div>
                </div>
            )}
        </div>
    );
}

export default AppInput;
