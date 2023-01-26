import * as yup from "yup";

export const postFormSchema = yup.object().shape({
    name: yup
        .string("Name should be a string")
        .required("Name and Surname is required"),
    price: yup
        .number("Price is a number")
        .required("Price is required"),
    image: yup
        .string("Image must be a string")
        .required("Image is required"),
    category: yup
        .string("Category should be a string")
        .required("Category is required"),
    information: yup
        .string("Information is a string")
        .required("Information is required"),
    title: yup
        .string("Title must be a string")
        .required("Title is required"),
});