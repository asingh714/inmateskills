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
    errors.confirmPassword = "Your passwords do not match";
  }

  return errors;
};

export const validateAddInmate = date => {
  let errors = {};

  if (!date) {
    errors.date = "Please provide a release date for this inmate";
  }

  return errors;
};

export const validateContact = (name, email, phone_number) => {
  let errors = {};

  if (!name) {
    errors.name = "Please provide a name";
  }

  if (!email) {
    errors.email = "Please provide an email";
  }

  if (!phone_number) {
    errors.phone_number = "Please provide a phone number";
  }

  return errors;
};
