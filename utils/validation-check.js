const checkValidationEmail = (email) => {
  const EMAIL_REGEX = new RegExp(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  );
  if (!EMAIL_REGEX.test(email)) {
    const err = new Error("INVALID_EMAIL");
    err.statusCode = 400;
    throw err;
  }
};

const checkValidationPassword = (password) => {
  const PASSWORD_REGEX = new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,20})");
  if (!PASSWORD_REGEX.test(password)) {
    const err = new Error("INVALID_PASSWORD");
    err.statusCode = 400;
    throw err;
  }
};

const checkValidationBirth = (birth) => {
  const BIRTH_REGEX = new RegExp(
    "^(19[0-9][0-9]|20\\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$"
  );
  if (!BIRTH_REGEX.test(birth)) {
    const err = new Error("INVALID_BIRTHDAY");
    err.statusCode = 400;
    throw err;
  }
};

const checkValidationPhoneNumber = (phoneNumber) => {
  const PHONE_NUMBER_REGEX = new RegExp(
    "^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})"
  );
  if (!PHONE_NUMBER_REGEX.test(phoneNumber)) {
    const err = new Error("INVALID_PHONE_NUMBER");
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  checkValidationEmail,
  checkValidationPassword,
  checkValidationBirth,
  checkValidationPhoneNumber,
};
