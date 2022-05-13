import React from "react";

function AppCheckoutItem({ item }) {
    return (
        <div className="d-flex w-100 mb-2 p-0 align-items-center">
            <div className="d-flex p-0 m-0">
                <img
                    className="checkoutItemsImages"
                    src={item.image_url}
                    alt={item.name}
                />
            </div>
            <div className="d-flex row flex-grow-1 p-0 ps-2 m-0">
                <div className="d-flex col-12  p-0 m-0 fw-bold w-100 text-start">
                    {item.name}
                </div>
                <div className="d-flex col-12 p-0 m-0 text-start itemQuantity">
                    Ilość: {item.quantity}
                </div>
            </div>
            <div className="d-flex p-0 m-0 pe-1 h-100 text-end fw-bold">
                {(item.price * item.quantity).toFixed(2)} zł
            </div>
        </div>
    );
}

export default AppCheckoutItem;
