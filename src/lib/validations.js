import * as yup from "yup";

export const registerValidation = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("Username is a required field.")
        .min(6),
    email: yup
        .string()
        .trim()
        .required("Email is a required field.")
        .email("Not a valid email"),
    password: yup
        .string()
        .trim()
        .required("Password is a required field.")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Invalid Password"
        ),
});

export const loginValidations = yup.object().shape({
    email: yup.string().trim().required("Username is a required field.").email("Email is Invalid"),
    password: yup.string().trim().required("Password is a required field."),
});
