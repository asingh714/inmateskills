// const validate = (values) => {
//   let errors = {};

//   if (!values.username) {
//     errors.username = "Please provide a username";
//   } else if (values.username.length < 6) {
//     errors.username =
//       "Please provide a username that is at least six characters";
//   }

//   if (!values.password) {
//     errors.password = "Please provide a password";
//   } else if (values.password.length < 6) {
//     errors.password =
//       "Please provide a password that is at least six characters";
//   }

//   if (!values.name) {
//     errors.name = "Please provide a name for your prison";
//   }

//   if (!values.confirmPassword) {
//     errors.confirmPassword = "Please provide a confirmation of your password";
//   } else if (values.password !== values.confirmPassword) {
//     errors.confirmPassword =
//       "Your password and confirmation of password do not match";
//   }

//   return errors;
// };

// const validateForm = errors => {
//   let valid = true;
//   Object.values(errors).forEach(val => val.length > 0 && (valid = false));
//   return valid;
// };

export const validate = (username, password, name, confirmPassword) => {
  let errors = {};

  if (!username) {
    errors.username = "Please provide a username";
  } else if (username.length < 6) {
    errors.username =
      "Please provide a username that is at least six characters";
  }

  if (!password) {
    errors.password = "Please provide a password";
  } else if (password.length < 6) {
    errors.password =
      "Please provide a password that is at least six characters";
  }

  if (!name) {
    errors.name = "Please provide a name for your prison";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Please provide a confirmation of your password";
  } else if (password !== confirmPassword) {
    errors.confirmPassword =
      "Your passwords do not match";
  }

  return errors;
};
