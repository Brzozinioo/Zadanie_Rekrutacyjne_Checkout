import * as Yup from "yup";

export default Yup.object().shape({
    is_new_account: Yup.boolean().oneOf(
        [true],
        "Zaloguj się albo załóż nowe konto"
    ),
    g_recaptcha_response: Yup.string().required(
        "Potwierdź, że nie jesteś botem"
    ),
    login: Yup.string().when("is_new_account", {
        is: true,
        then: Yup.string().required("Pole Login jest wymagane"),
    }),
    email: Yup.string().when("is_new_account", {
        is: true,
        then: Yup.string().required("Pole Email jest wymagane"),
    }),
    password: Yup.string().when("is_new_account", {
        is: true,
        then: Yup.string().required("Pole Hasło jest wymagane"),
    }),
    confirm_password: Yup.string().when("is_new_account", {
        is: true,
        then: Yup.string()
            .oneOf([Yup.ref("password"), null], "Hasła nie są takie same")
            .required("Pole Potwierdź Hasło jest wymagane"),
    }),
    first_name: Yup.string().when("is_new_account", {
        is: true,
        then: Yup.string().required("Pole Imię jest wymagane"),
    }),
    last_name: Yup.string().when("is_new_account", {
        is: true,
        then: Yup.string().required("Pole Nazwisko jest wymagane"),
    }),
    country: Yup.string().when("is_new_account", {
        is: true,
        then: Yup.string().required("Pole Kraj jest wymagane"),
    }),
    street: Yup.string().when("is_new_account", {
        is: true,
        then: Yup.string().required("Pole Adres jest wymagane"),
    }),
    post_code: Yup.string()
        .matches(/^[0-9]{2}-[0-9]{3}$/, "Niepoprawny kod pocztowy (XX-XXX)")
        .when("is_new_account", {
            is: true,
            then: Yup.string().required("Pole Kod Pocztowy jest wymagane"),
        }),
    city: Yup.string().when("is_new_account", {
        is: true,
        then: Yup.string().required("Pole Miasto jest wymagane"),
    }),
    phone: Yup.string()
        .matches(/^[0-9]{9}$/, "Niepoprawny numer telefonu (XXXXXXXXX)")
        .when("is_new_account", {
            is: true,
            then: Yup.string().required("Pole Telefon jest wymagane"),
        }),
    diffrent_delivery_address: Yup.boolean(),
    delivery_first_name: Yup.string().when("diffrent_delivery_address", {
        is: true,
        then: Yup.string().required("Pole Imię jest wymagane"),
    }),
    delivery_last_name: Yup.string().when("diffrent_delivery_address", {
        is: true,
        then: Yup.string().required("Pole Nazwisko jest wymagane"),
    }),
    delivery_country: Yup.string().when("diffrent_delivery_address", {
        is: true,
        then: Yup.string().required("Pole Kraj jest wymagane"),
    }),
    delivery_street: Yup.string().when("diffrent_delivery_address", {
        is: true,
        then: Yup.string().required("Pole Adres jest wymagane"),
    }),
    delivery_post_code: Yup.string()
        .matches(/^[0-9]{2}-[0-9]{3}$/, "Niepoprawny kod pocztowy")
        .when("diffrent_delivery_address", {
            is: true,
            then: Yup.string().required("Pole Kod pocztowy jest wymagane"),
        }),
    delivery_city: Yup.string().when("diffrent_delivery_address", {
        is: true,
        then: Yup.string().required("Pole Miasto jest wymagane"),
    }),
    delivery_phone: Yup.string()
        .matches(/^[0-9]{9}$/, "Niepoprawny numer telefonu")
        .when("diffrent_delivery_address", {
            is: true,
            then: Yup.string().required("Pole Telefon jest wymagane"),
        }),
    selected_delivery_method: Yup.string().required("Wybierz metodę dostawy"),
    selected_payment_method: Yup.string().required("Wybierz metodę płatności"),
    terms_and_conditions: Yup.boolean().oneOf(
        [true],
        "Musisz zaakceptować regulamin"
    ),
});
