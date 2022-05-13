import React, { useEffect } from "react";

function AppCheckoutSummaryPrice({ values }) {
    const [price, setPrice] = React.useState(0);
    const [finalPrice, setFinalPrice] = React.useState(0.0);

    useEffect(() => {
        let sum = 0.0;
        let itemsPrice = 0.0;
        if (values.items) {
            values.items.forEach((item) => {
                itemsPrice += item.price * item.quantity;
            });
            sum += itemsPrice;
        }
        if (values.deliveryMethod) {
            sum += parseFloat(values.deliveryMethod.price);
        }
        if (values.discount) {
            if (values.discount.is_fixed) {
                sum -= sum * (values.discount.discountAmount / 100);
            } else {
                sum -= values.discount.discountAmount;
            }
        }

        setPrice(itemsPrice);
        setFinalPrice(sum);
    }, [values]);

    return (
        <>
            {price > 0 && (
                <div className="d-flex w-100 p-0 m-0">
                    <div className="d-flex flex-grow-1  py-2 ps-2 m-0 fw-bold">
                        Suma częściowa
                    </div>
                    <div className="d-flex p-0 pe-2 py-2 m-0 text-end fw-bold">
                        {price + " zł"}
                    </div>
                </div>
            )}
            {values.deliveryMethod && (
                <div className="d-flex w-100 p-0 m-0 mb-1">
                    <div className="d-flex flex-grow-1 ps-2 m-0 fw-bold">
                        {values.deliveryMethod.description}
                    </div>
                    <div className="d-flex  p-0 pe-2 m-0 text-end fw-bold">
                        +{" "}
                        {parseFloat(values.deliveryMethod.price).toFixed(2) +
                            " zł"}
                    </div>
                </div>
            )}
            {values.discount && (
                <div className="d-flex w-100 p-0 m-0">
                    <div className="d-flex flex-grow-1 ps-2 m-0 fw-bold">
                        {values.discount.name}
                    </div>
                    <div className="d-flex  p-0 pe-2 m-0 text-end fw-bold">
                        {values.discount.is_fixed
                            ? `- ${values.discount.discountAmount}%`
                            : `- ${parseFloat(
                                  values.discount.discountAmount
                              ).toFixed(2)} zł`}
                    </div>
                </div>
            )}

            <div className="d-flex w-100 p-0 m-0">
                <div className="d-flex py-2 flex-grow-1 ps-2 m-0 fw-bold totalPrice">
                    Łącznie
                </div>
                <div className="d-flex p-0 pe-2 py-2 m-0 text-end fw-bold totalPrice">
                    {parseFloat(finalPrice).toFixed(2) + " zł"}
                </div>
            </div>
        </>
    );
}

export default AppCheckoutSummaryPrice;
