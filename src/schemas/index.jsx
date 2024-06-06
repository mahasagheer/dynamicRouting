import * as Yup from "yup";
export const SignUpSchema = Yup.object({
  title: Yup.string().min(10).max(20).required("Enter title..."),
  body: Yup.string().min(50).max(250).required("Type Here......"),
});
