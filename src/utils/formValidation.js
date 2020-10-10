export const regex = {
  email: /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
  name: /^[a-zA-Z\s-]{3,}$/,
  code: /^[0-9]+$/,
  currencyFloat: /^\d+(\.\d+)?$/,
};

export const fieldValidate = (text, type) => {
  let result = {
    error: false,
    helperText: "",
  };
  switch (type) {
    case "email":
      if (!regex.email.test(text)) {
        result = { error: true, helperText: "Incorrect Email Format." };
      }
      break;
    case "password":
      if (!regex.password.test(text)) {
        result = {
          error: true,
          helperText:
            "Incorrect Password Format. Must contain each small, capital alphabets, numbers and atleast 8 characters long.",
        };
      }
      break;

    case "name":
      if (!regex.name.test(text)) {
        result = {
          error: true,
          helperText:
            "Incorrect Format. Can only contain alphabets, - character and atleast 3 characters long.",
        };
      }
      break;

    case "code":
      if (!regex.code.test(text)) {
        result = {
          error: true,
          helperText: "Incorrect Format. Can only contain numbers.",
        };
      }
      break;

    case "currencyFloat":
      if (!regex.currencyFloat.test(text)) {
        result = {
          error: true,
          helperText: "Incorrect Format. Enter correct value.",
        };
      }
      break;

    default:
      break;
  }
  return result;
};
