export const loginFormValidator = (values) => {
  const errors = {
    errors: {
      ...loginEmailValidator(values).errors,
      ...loginPasswordValidator(values).errors,
    },
    isValid:
      loginEmailValidator(values).isValid &&
      loginPasswordValidator(values).isValid,
  };
  return errors;
};

export const emailValidator = (value) => {
  const emailAddressRegex = /(.+)@(.+){2,}\.(.+){2,}/;
  return emailAddressRegex.test(value);
};

export const loginEmailValidator = (values) => {
  let isValid = true;
  const errors = {};

  if (!values.email) {
    isValid = false;
    errors.email = "Email address is required*";
  } else if (!emailValidator(values.email)) {
    isValid = false;
    errors.email = "Please enter valid email address";
  }
  return { isValid, errors };
};

export const loginPasswordValidator = (values) => {
  let isValid = true;
  const errors = {};
  if (!values.password) {
    isValid = false;
    errors.password = "Password is required*";
  }
  return { isValid, errors };
};
