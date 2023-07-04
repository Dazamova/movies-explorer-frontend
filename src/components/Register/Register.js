import React from "react";
import { AuthorisationForm } from "../AuthorisationForm/AuthorisationForm";
import { Input } from "../AuthorisationForm/Input/Input";
import { useFormWithValidation } from "../../hooks/validation";

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
          minLength="2"
          maxLength="20"
          error={errors["name"]}
        />
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