import React, { useEffect } from "react";
import Button from "@/components/ui/button";
import InputBox from "@/components/ui/inputBox";
import Text from "@/components/ui/text";
import { useSelector, useDispatch } from "react-redux";
import { setFormData, setFormValidity } from "@/store/form";
import {
  loginEmailValidator,
  loginFormValidator,
  loginPasswordValidator,
} from "@/utils/formValidation";
import { getLoggedInUser, login } from "@/store/login";
import { useCookies } from "react-cookie";

const LoginForm = () => {
  const logindata = useSelector((state) => state.formSlice);
  const userData = useSelector((state) => state.loginSlice);
  const { data: formData, errors } = logindata;
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ name, value }));
    getLoggedInUser;
  };

  const onBlurHandler = (e) => {
    const { name, value } = e.target;
    if (errors.constructor === Object && Object.keys(errors).length !== 0) {
      const formvalidationErrors = loginFormValidator(formData);
      delete formvalidationErrors.errors.password;
      if (!formvalidationErrors.isValid) {
        dispatch(
          setFormValidity(
            formvalidationErrors.isValid,
            formvalidationErrors.errors
          )
        );
        return;
      }
    }
    const validationErrors =
      name === "email"
        ? loginEmailValidator({ [name]: value })
        : loginPasswordValidator({ [name]: value });

    const errorOutput = !validationErrors.errors?.[name]?.includes("required*")
      ? { ...validationErrors }
      : { errors: {} };
    if (!validationErrors.isValid) {
      const param = {
        isvalid: validationErrors.isValid,
        errors: errorOutput.errors,
      };
      dispatch(setFormValidity(param));
      return;
    }
    dispatch(setFormValidity(true, {}));
  };

  useEffect(() => {
    if (userData.token) {
      setCookie("token", userData.token);
    }
  }, [userData.token]);

  const onInputClear = (name) => {
    const value = "";
    dispatch(setFormData({ name, value }));
    dispatch(setFormValidity(true, {}));
  };

  const setToken = (token) => {
    if (token) {
      try {
        setCookie("token", token);
      } catch (err) {
        setCookie("token", null);
      }
    }
  };

  const onLoginSubmitHandler = async (event) => {
    if (event) event.preventDefault();
    const validationErrors = loginFormValidator(formData);
    if (!validationErrors.isValid) {
      const param = {
        isvalid: validationErrors.isValid,
        errors: validationErrors.errors,
      };
      dispatch(setFormValidity(param));
      return;
    }

    dispatch(setFormValidity({ isvalid: true, errors: {} }));
    dispatch(getLoggedInUser(formData));
  };
  return (
    <div>
      <Text styles={{ fontSize: "1.5rem", fontWeight: 600 }}>LOGIN</Text>
      <form onSubmit={onLoginSubmitHandler}>
        <InputBox
          id="login-email-input"
          value={formData.email}
          name="email"
          type="email"
          placeholder="Please provide email"
          labelText="Email"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          errors={errors}
          onClear={onInputClear}
        />
        <InputBox
          id="login-password-input"
          value={formData.password}
          name="password"
          type="password"
          placeholder="Please provide password"
          labelText="Password"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          errors={errors}
          onClear={onInputClear}
        />
        <div
          style={{
            margin: "15px 10px 15px 10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Button text="Login" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
