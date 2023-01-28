import Input from "./input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required("Username is a required field"),
  phoneNumber: yup
    .string()
    .required("Phone number is a required field")
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Phone number is not valid!."
    ),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not valid"),
  password: yup.string().min(6, "Password must be atleasr 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must be matched"),
});

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const formSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="sign-up">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Input
          id="username"
          label="Username"
          type="text"
          placeholder="Enter Username"
          register={{ ...register("username") }}
          errorMessage={errors.username?.message}
        />
        <Input
          id="phoneNumber"
          label="Phone Number"
          type="number"
          placeholder="Enter Phonenumber"
          register={{ ...register("phoneNumber") }}
          errorMessage={errors.phoneNumber?.message}
        />
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Enter Email"
          register={{ ...register("email") }}
          errorMessage={errors.email?.message}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
          register={{ ...register("password") }}
          errorMessage={errors.password?.message}
        />
        <Input
          id="confirmPassword "
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          register={{ ...register("confirmPassword") }}
          errorMessage={errors.confirmPassword?.message}
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
