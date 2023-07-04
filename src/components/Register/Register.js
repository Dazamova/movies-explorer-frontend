import React from "react";
import { AuthorisationForm } from "../AuthorisationForm/AuthorisationForm";
import { Input } from "../AuthorisationForm/Input/Input";
import { useFormWithValidation } from "../../hooks/validation";
import { INPUT_SETTINGS } from "../../utils/constants";

export const Register = (props) => {
  const { onSubmit } = props;
  const [formValue, setFormValue] = React.useState('', '');

  const { handleChange, errors } = useFormWithValidation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    handleChange(e);

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValue);
  }

  return (
    <AuthorisationForm disabled={errors["name"] || errors["email"] || errors["password"]} header="Добро пожаловать!" buttonText="Зарегистрироваться" onSubmit={handleSubmit} isDisplay={true}>
      <>
        <Input
          inputName="Имя"
          name="name"
          id="name"
          type="text"
          onChange={handleInputChange}
          value={formValue.name || ''}
          minLength={INPUT_SETTINGS.name.minLength}
          maxLength={INPUT_SETTINGS.name.maxLength}
          error={errors["name"]}
        />
        <Input
          inputName="E-mail"
          name="email"
          id="email"
          type="email"
          onChange={handleInputChange}
          value={formValue.email || ''}
          minLength={INPUT_SETTINGS.email.minLength}
          maxLength={INPUT_SETTINGS.email.maxLength}
          error={errors["email"]}
        />
        <Input
          inputName="Пароль"
          name="password"
          id="password"
          type="password"
          onChange={handleInputChange}
          value={formValue.password || ''}
          minLength={INPUT_SETTINGS.password.minLength}
          maxLength={INPUT_SETTINGS.password.maxLength}
          error={errors["password"]}
        />
      </>
    </AuthorisationForm>
  )
}