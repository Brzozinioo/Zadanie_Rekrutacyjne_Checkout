import React from "react";

function AppSelect({ name, value, onChange, options, ...props }) {
    return (
        <div className="d-flex w-100 p-0 mb-1">
            <select
                className="formTextInput"
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="poland">Polska</option>
                <option value="germany">Niemcy</option>
                <option value="france">Francja</option>
            </select>
        </div>
    );
}

export default AppSelect;
