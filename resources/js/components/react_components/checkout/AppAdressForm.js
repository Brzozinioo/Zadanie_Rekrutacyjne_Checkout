import React from "react";

import AppInput from "../AppInput";
import AppSelect from "../AppSelect";

function AppAdressForm({ formik, delivery = false, ...props }) {
    return (
        <>
            <AppInput
                type="text"
                name={delivery ? "delivery_first_name" : "first_name"}
                placeholder="Imię *"
                value={
                    delivery
                        ? formik.values.delivery_first_name
                        : formik.values.first_name
                }
                touched={
                    delivery
                        ? formik.touched.delivery_first_name
                        : formik.touched.first_name
                }
                error={
                    delivery
                        ? formik.errors.delivery_first_name
                        : formik.errors.first_name
                }
                onChange={formik.handleChange}
            />
            <AppInput
                type="text"
                name={delivery ? "delivery_last_name" : "last_name"}
                placeholder="Nazwisko *"
                value={
                    delivery
                        ? formik.values.delivery_last_name
                        : formik.values.last_name
                }
                touched={
                    delivery
                        ? formik.touched.delivery_last_name
                        : formik.touched.last_name
                }
                error={
                    delivery
                        ? formik.errors.delivery_last_name
                        : formik.errors.last_name
                }
                onChange={formik.handleChange}
            />
            <AppSelect
                name={delivery ? "delivery_country" : "country"}
                placeholder="Kraj *"
                value={
                    delivery
                        ? formik.values.delivery_country
                        : formik.values.country
                }
                touched={
                    delivery
                        ? formik.touched.delivery_country
                        : formik.touched.country
                }
                error={
                    delivery
                        ? formik.errors.delivery_country
                        : formik.errors.country
                }
                onChange={formik.handleChange}
            />
            <AppInput
                type="text"
                name={delivery ? "delivery_street" : "street"}
                placeholder="Adres *"
                value={
                    delivery
                        ? formik.values.delivery_street
                        : formik.values.street
                }
                touched={
                    delivery
                        ? formik.touched.delivery_street
                        : formik.touched.street
                }
                error={
                    delivery
                        ? formik.errors.delivery_street
                        : formik.errors.street
                }
                onChange={formik.handleChange}
            />
            <div className="d-flex w-100 p-0 justify-content-between">
                <div className="col-6">
                    <AppInput
                        type="text"
                        name={delivery ? "delivery_post_code" : "post_code"}
                        placeholder="Kod pocztowy *"
                        value={
                            delivery
                                ? formik.values.delivery_post_code
                                : formik.values.post_code
                        }
                        touched={
                            delivery
                                ? formik.touched.delivery_post_code
                                : formik.touched.post_code
                        }
                        error={
                            delivery
                                ? formik.errors.delivery_post_code
                                : formik.errors.post_code
                        }
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="col-6 ps-1 ">
                    <AppInput
                        type="text"
                        name={delivery ? "delivery_city" : "city"}
                        placeholder="Miasto *"
                        value={
                            delivery
                                ? formik.values.delivery_city
                                : formik.values.city
                        }
                        touched={
                            delivery
                                ? formik.touched.delivery_city
                                : formik.touched.city
                        }
                        error={
                            delivery
                                ? formik.errors.delivery_city
                                : formik.errors.city
                        }
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
            <AppInput
                type="text"
                name={delivery ? "delivery_phone" : "phone"}
                placeholder="Telefon *"
                value={
                    delivery
                        ? formik.values.delivery_phone
                        : formik.values.phone
                }
                touched={
                    delivery
                        ? formik.touched.delivery_phone
                        : formik.touched.phone
                }
                error={
                    delivery
                        ? formik.errors.delivery_phone
                        : formik.errors.phone
                }
                onChange={formik.handleChange}
            />
        </>
    );
}

export default AppAdressForm;
