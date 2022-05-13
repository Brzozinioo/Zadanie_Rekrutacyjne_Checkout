import React, { useEffect } from "react";
import { FaUser, FaTruckMoving, FaCreditCard } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { useFormik } from "formik";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

import {
    AppTermsText,
    AppAdressForm,
    AppMethodForm,
    AppCheckoutItem,
    AppCheckoutSummaryPrice,
    CardContainer,
} from "../react_components/checkout";
import { AppLoginModal } from "../react_components/modals";
import {
    AppButton,
    AppCheckbox,
    AppInput,
    AppDashedLine,
    AppTextArea,
    AppModal,
    ErrorMessage,
} from "../react_components";
import colors from "../config/colors";
import validationSchema from "../config/checkoutValidationSchema";
import { useNavigate } from "react-router-dom";

function CheckoutPage(props) {
    const [activePaymentMethods, setActivePaymentMethods] = React.useState([]);
    const [checkoutSummary, setCheckoutSummary] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isLoginOpen, setIsLoginOpen] = React.useState(false);
    const [discountStatus, setDiscountStatus] = React.useState("");
    const [deliveryMethods, setDeliveryMethods] = React.useState([]);
    const [paymentMethods, setPaymentMethods] = React.useState([]);
    const navigate = useNavigate();

    // W ramach zadania przedmioty w koszyku zostały ustawione na sztywno.
    // Bez problemu mogą one być zwracane za pomocą API bądź przechowywane w localStorage.

    // W ramach zadania za każdym odświerzeniem strony adres e-mail jest generowany na nowo poprzez funkcję generateEmail
    // Takie podjeście zstało zastosowane ze względu na brak widocznego pola email w otrzymanym widoku zadania

    const checkoutItems = [
        {
            id: 1,
            name: "Przedmiot 1",
            quantity: 2,
            image_url: "http://via.placeholder.com/200x100?text=SampleImage",
            price: 11.22,
        },
        {
            id: 2,
            name: "Przedmiot 2",
            quantity: 1,
            image_url: "http://via.placeholder.com/200x100?text=SampleImage",
            price: 2.23,
        },
        {
            id: 3,
            name: "Przedmiot 3",
            quantity: 100,
            image_url: "http://via.placeholder.com/200x100?text=SampleImage",
            price: 35.0,
        },
    ];

    const generateEmail = () => {
        var allchars = "abcdefghijklmnopqrstuvwxyz1234567890";
        var emailLength = 15;
        var string = "";
        for (var i = 0; i < emailLength; i++) {
            string += allchars[Math.floor(Math.random() * allchars.length)];
        }
        string = string + "@gmail.com";
        return string;
    };

    const formik = useFormik({
        initialValues: {
            is_user_logged: false,
            user_id: "",
            is_new_account: false,
            login: "",
            email: generateEmail(),
            password: "",
            confirm_password: "",
            first_name: "",
            last_name: "",
            country: "poland",
            street: "",
            post_code: "",
            city: "",
            phone: "",
            diffrent_delivery_address: false,
            delivery_first_name: "",
            delivery_last_name: "",
            delivery_country: "poland",
            delivery_street: "",
            delivery_post_code: "",
            delivery_city: "",
            delivery_phone: "",
            selected_delivery_method: "",
            selected_payment_method: "",
            comment: "",
            discount_code: "",
            newsletter: false,
            terms_and_conditions: false,
            g_recaptcha_response: "",
        },
        onSubmit: async (values) => {
            setIsLoading(true);
            const requestValues = { ...values, items: checkoutItems };
            axios.post("/api/order/store", requestValues).then((response) => {
                if (response.data.success) {
                    const order = response.data;
                    navigate("/success", { state: order });
                } else {
                    formik.setErrors({
                        ...formik.errors,
                        ...response.data.message,
                    });
                }
                setIsLoading(false);
            });
        },
        validationSchema: validationSchema,
    });

    useEffect(() => {
        let delivery = formik.values.selected_delivery_method;
        if (delivery == "DPDPaidOnDelivery") {
            setActivePaymentMethods([paymentMethods[1]]);
            formik.setFieldValue("selected_payment_method", "");
        } else {
            setActivePaymentMethods(paymentMethods);
        }

        const deliveryItem = deliveryMethods.find(
            (item) => item.name == delivery
        );
        setCheckoutSummary({
            ...checkoutSummary,
            deliveryMethod: deliveryItem,
        });
    }, [formik.values.selected_delivery_method]);

    useEffect(() => {
        axios.get("/api/checkout").then((res) => {
            const response = res.data;
            if (response.success) {
                setDeliveryMethods(response.deliveryMethods);
                setPaymentMethods(response.paymentMethods);
                setActivePaymentMethods(response.paymentMethods);
                setCheckoutSummary({ items: checkoutItems });
                setIsLoading(false);
            }
        });
    }, []);

    useEffect(() => {}, [formik.errors]);

    const handleDiscountCodeCheck = async (code) => {
        if (code == "") {
            setDiscountStatus("Nieprawidłowy kod rabatowy");
            return;
        }
        setIsLoading(true);
        setDiscountStatus("");
        setCheckoutSummary({
            items: checkoutSummary.items,
            deliveryMethod: checkoutSummary.deliveryMethod,
        });

        axios
            .post("/api/discount", { code: code })
            .then((res) => {
                const response = res.data;
                if (response.success) {
                    const discount = response.discount;
                    setCheckoutSummary({
                        ...checkoutSummary,
                        discount: {
                            name: discount.name,
                            code: discount.code,
                            discountAmount: discount.discountAmount,
                            is_fixed: discount.is_fixed,
                        },
                    });
                } else {
                    setDiscountStatus(response.message);
                }
                setIsLoading(false);
            })
            .catch((err) => {
                setDiscountStatus("Nieprawidłowy kod rabatu");
                setIsLoading(false);
            });
    };

    if (isLoading) {
        return (
            <div className="d-flex w-100 h-100 justify-content-center align-items-center">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">
                        Ładowanie zawartości
                    </span>
                </div>
            </div>
        );
    } else
        return (
            <form onSubmit={formik.handleSubmit}>
                <div className="container-fluid">
                    <div className="row justify-content-center pt-5">
                        <div className="col-xl-3 col-lg-4 col-md-9 col-sm-11 col-11 mx-3">
                            <CardContainer
                                icon={<FaUser color="white" size={20} />}
                                title="1. TWOJE DANE"
                            >
                                <div className="d-flex w-100 row m-0 p-0">
                                    <AppButton
                                        text="Logowanie"
                                        outlined
                                        onClick={() => setIsLoginOpen(true)}
                                    />

                                    {isLoginOpen && (
                                        <AppModal
                                            modalContent={
                                                <AppLoginModal
                                                    isOpen={setIsLoginOpen}
                                                />
                                            }
                                        />
                                    )}

                                    <p className="text-center fw-bold fs-6 p-3 m-0">
                                        Masz już konto? Kliknij aby się
                                        zalogować
                                    </p>

                                    <AppCheckbox
                                        name="is_new_account"
                                        text="Stwórz nowe konto"
                                        onChange={formik.handleChange}
                                        value={formik.values.is_new_account}
                                        touched={formik.touched.is_new_account}
                                        error={formik.errors.is_new_account}
                                    />
                                    {formik.values.is_new_account && (
                                        <>
                                            <AppInput
                                                type="text"
                                                name="login"
                                                placeholder="Login *"
                                                value={formik.values.login}
                                                touched={formik.touched.login}
                                                error={formik.errors.login}
                                                onChange={formik.handleChange}
                                            />
                                            <AppInput
                                                type="password"
                                                name="password"
                                                placeholder="Hasło *"
                                                value={formik.values.password}
                                                touched={
                                                    formik.touched.password
                                                }
                                                error={formik.errors.password}
                                                onChange={formik.handleChange}
                                            />

                                            <AppInput
                                                type="password"
                                                name="confirm_password"
                                                placeholder="Potwierdź hasło *"
                                                touched={
                                                    formik.touched
                                                        .confirm_password
                                                }
                                                error={
                                                    formik.errors
                                                        .confirm_password
                                                }
                                                value={
                                                    formik.values
                                                        .confirm_password
                                                }
                                                onChange={formik.handleChange}
                                            />
                                            <AppAdressForm formik={formik} />

                                            <AppCheckbox
                                                name="diffrent_delivery_address"
                                                text="Dostawa pod inny adres"
                                                onChange={formik.handleChange}
                                                value={
                                                    formik.values
                                                        .diffrent_delivery_address
                                                }
                                            />
                                            {formik.values
                                                .diffrent_delivery_address && (
                                                <AppAdressForm
                                                    formik={formik}
                                                    delivery
                                                />
                                            )}
                                        </>
                                    )}
                                </div>
                            </CardContainer>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-9 col-sm-11 col-11 mx-3">
                            <CardContainer
                                icon={<FaTruckMoving color="white" size={20} />}
                                title="2. METODA DOSTAWY"
                            >
                                <div className="d-flex w-100 row m-0 p-0">
                                    {deliveryMethods.map((method) => (
                                        <AppMethodForm
                                            key={method.name}
                                            method={method}
                                            formik={formik}
                                            radioButtonsName="selected_delivery_method"
                                        />
                                    ))}
                                    {formik.touched.selected_delivery_method &&
                                        formik.errors
                                            .selected_delivery_method && (
                                            <div className="d-flex w-100 m-0 p-0">
                                                <ErrorMessage
                                                    text={
                                                        formik.errors
                                                            .selected_delivery_method
                                                    }
                                                />
                                            </div>
                                        )}
                                </div>
                            </CardContainer>
                            <CardContainer
                                icon={<FaCreditCard color="white" size={20} />}
                                title="2. METODA PŁATNOŚCI"
                            >
                                <div className="d-flex w-100 row m-0 p-0">
                                    {activePaymentMethods.map((method) => (
                                        <AppMethodForm
                                            key={method.name}
                                            method={method}
                                            formik={formik}
                                            radioButtonsName="selected_payment_method"
                                        />
                                    ))}

                                    {formik.touched.selected_payment_method &&
                                        formik.errors
                                            .selected_payment_method && (
                                            <div className="d-flex w-100 m-0 mb-2 p-0">
                                                <ErrorMessage
                                                    text={
                                                        formik.errors
                                                            .selected_payment_method
                                                    }
                                                />
                                            </div>
                                        )}

                                    <AppInput
                                        type="text"
                                        name="discount_code"
                                        placeholder="Kod rabatowy"
                                        value={formik.values.discount_code}
                                        touched={true}
                                        error={discountStatus}
                                        onChange={formik.handleChange}
                                    />

                                    <AppButton
                                        text="Dodaj kod rabatowy"
                                        color="#a89f8f"
                                        height="50px"
                                        onClick={() => {
                                            handleDiscountCodeCheck(
                                                formik.values.discount_code
                                            );
                                        }}
                                        outlined
                                    />
                                </div>
                            </CardContainer>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-9 col-sm-11 col-11 mx-3">
                            <CardContainer
                                icon={
                                    <IoDocumentText color="white" size={20} />
                                }
                                title="4. PODSUMOWANIE"
                            >
                                <div className="d-flex row p-0 mx-0 mt-3">
                                    {checkoutItems.map((item) => (
                                        <AppCheckoutItem
                                            key={item.name}
                                            item={item}
                                        />
                                    ))}

                                    <AppDashedLine />
                                    <AppCheckoutSummaryPrice
                                        values={checkoutSummary}
                                    />
                                    <AppDashedLine />
                                    <AppTextArea
                                        name="comment"
                                        value={formik.values.comment}
                                        onChange={formik.handleChange}
                                        placeholder="Komentarz"
                                    />
                                    <AppCheckbox
                                        name="newsletter"
                                        text="Zapisz się, aby otrzymywać newsletter"
                                        onChange={formik.handleChange}
                                        value={formik.values.newsletter}
                                    />
                                    <AppCheckbox
                                        name="terms_and_conditions"
                                        text={<AppTermsText />}
                                        onChange={formik.handleChange}
                                        touched={
                                            formik.touched.terms_and_conditions
                                        }
                                        error={
                                            formik.errors.terms_and_conditions
                                        }
                                        value={
                                            formik.values.terms_and_conditions
                                        }
                                    />
                                    <div className="d-flex w-100 row m-0 mb-2 p-0">
                                        <div className="col-12 m-0 p-0 mb-2">
                                            <ReCAPTCHA
                                                sitekey="6LfRJeofAAAAAH_WoA8rI9SsMaEr5gGUkZXZqJLR"
                                                onChange={(value) => {
                                                    formik.handleChange({
                                                        target: {
                                                            name: "g_recaptcha_response",
                                                            value: value,
                                                        },
                                                    });
                                                }}
                                            />
                                        </div>
                                        {formik.touched.g_recaptcha_response &&
                                            formik.errors
                                                .g_recaptcha_response && (
                                                <ErrorMessage
                                                    text={
                                                        formik.errors
                                                            .g_recaptcha_response
                                                    }
                                                />
                                            )}
                                    </div>
                                    <AppButton
                                        text="Potwierdź zakup"
                                        height="100px"
                                        color={colors.red}
                                        submit
                                    />
                                </div>
                            </CardContainer>
                        </div>
                    </div>
                </div>
            </form>
        );
}

export default CheckoutPage;
