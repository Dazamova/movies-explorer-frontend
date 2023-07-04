import React from "react";
import { AuthorisationForm } from "../AuthorisationForm/AuthorisationForm";
import { Input } from "../AuthorisationForm/Input/Input";
import { useFormWithValidation } from "../../hooks/validation";

export const Login = (props) => {
  const { onSubmit } = props;
  const [formValue, setFormValue] = React.useState('', '')

  const { handleChange, errors } =
    useFormWithValidation();

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
    <AuthorisationForm disabled={errors["email"] || errors["password"]} header="Рады видеть!" buttonText="Войти" onSubmit={handleSubmit} name="login">
      <>
        <Input
          inputName="E-mail"
          name="email"
          id="email"
          type="email"
          onChange={handleInputChange}
          value={formValue.email || ''}
          minLength="6"
          maxLength="40"
          error={errors["email"]}
        />
        <Input
          inputName="Пароль"
          name="password"
          id="password"
          type="password"
          onChange={handleInputChange}
          value={formValue.password || ''}
          minLength="6"
          maxLength="10"
          error={errors["password"]}
        />
      </>
    </AuthorisationForm>
  )
}
