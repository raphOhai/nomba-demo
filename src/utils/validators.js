import * as yup from "yup";

const newsletterSchema = yup.object({
  name: yup.string().required("Your fullname is required"),
  email: yup
    .string()
    .required("Your email is required")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Kindly enter a valid email address"
    ),
});

export { newsletterSchema };
