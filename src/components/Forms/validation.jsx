const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regex = /^(?=.*\d).+$/;
export const validate = (inputs) => {
  const errors = {};
  if (!inputs.userName.length) {
    errors.userName = "No puede ser vació";
  }

  if (!regexEmail.test(inputs.userName)) {
    errors.userName = "Debe ser un correo electrónico";
  }
  if (inputs.userName.length > 35) {
    errors.userName = "No puede tener mas de 35 caracteres";
  }

  if (!regex.test(inputs.password)) {
    errors.password = "Debe contener mínimo un número";
  }

  if (inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password = "Dbe tener entre 6 y 10 caracteres";
  }
  return errors;
};
