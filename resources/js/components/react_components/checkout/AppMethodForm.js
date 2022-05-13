import React from "react";

function AppMethodForm({ method, formik, radioButtonsName, ...props }) {
    return (
        <div
            className="d-flex w-100 mb-3 deliveryMethodContainer align-items-center px-2"
            {...props}
        >
            <div className="d-flex p-0 m-0">
                <input
                    type="radio"
                    className="radioButton"
                    name={radioButtonsName}
                    value={method.name}
                    onChange={formik.handleChange}
                    checked={formik.values[radioButtonsName] === method.name}
                />
            </div>
            <div className="d-flex ps-2 m-0">
                <img
                    className="methodImages"
                    src={method.image_url}
                    alt={method.description}
                />
            </div>
            <div className="d-flex flex-grow-1 ps-2">{method.description}</div>
            {method.price && (
                <div className="d-flex p-0 m-0 text-end fw-bold">
                    {parseFloat(method.price).toFixed(2)} zł
                </div>
            )}
        </div>
    );
}

export default AppMethodForm;
