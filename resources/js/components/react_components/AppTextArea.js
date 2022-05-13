import React from "react";

function AppTextArea({
    name,
    width = "w-100",
    placeholder,
    value,
    className,
    onChange,
    ...props
}) {
    return (
        <div
            className={["d-flex mb-1 w-100 mt-3 p-0", className, width].join(
                " "
            )}
        >
            <textarea
                className="formTextInput formTextArea"
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                {...props}
            />
        </div>
    );
}

export default AppTextArea;
